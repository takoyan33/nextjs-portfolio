import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import Portfolios from "@/app/portfolios/page"
import type { PortfolioType } from "@/types"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

// --- next/navigation のモック ---
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vi.fn(),
  }),
}))

test.skip("Portfolios が表示されるか", async () => {
  render(<Portfolios searchParams={{ order: "new" }} />)

  expect(await screen.findByText("To You Design(ポートフォリオサイト)1")).toBeVisible()
  expect(await screen.findByText("To You Design(ポートフォリオサイト)2")).toBeVisible()
})

const completePortfolio: PortfolioType = {
  id: 1,
  name: "入稿テスト用ポートフォリオ",
  date: "2026-08-15",
  tag: ["React", "Next.js"],
  topImg: "/images/portfolio/portfolio_top3.png",
  front_url: "https://example.com",
  back_url: "https://api.example.com",
  front_github: "https://github.com/example/frontend",
  back_github: "https://github.com/example/backend",
  color: "portfolio__tag--color4",
  about: "<p>About の本文</p>",
  aboutImg: "/images/portfolio/portfolio_about3.png",
  function: "<p>機能一覧の本文</p>",
  functionImg: "/images/portfolio/portfolio_function3.png",
  appeal: "<p>アピールの本文</p>",
  appealImg: "/images/portfolio/portfolio_appeal3.png",
  front_skill: ["React", "Next.js"],
  back_skill: ["Ruby on Rails"],
  infra_skill: ["Vercel"],
  time: "2ヶ月",
  prev_title: "前の記事",
  prev_article_id: "0",
  next_title: "次の記事",
  next_article_id: "2",
}

type TechnologyVisibilityCase = {
  name: string
  portfolio: PortfolioType
  visible: string[]
  hidden: string[]
}

const technologyVisibilityCases: TechnologyVisibilityCase[] = [
  {
    name: "完全な入稿データでは全ての技術カテゴリを表示する",
    portfolio: completePortfolio,
    visible: ["フロントエンド", "バックエンド", "インフラ"],
    hidden: [],
  },
  {
    name: "フロントエンド技術が未入稿ならフロントエンドを表示しない",
    portfolio: { ...completePortfolio, front_skill: [] },
    visible: ["バックエンド", "インフラ"],
    hidden: ["フロントエンド"],
  },
  {
    name: "バックエンド技術が未入稿ならバックエンドを表示しない",
    portfolio: { ...completePortfolio, back_skill: [] },
    visible: ["フロントエンド", "インフラ"],
    hidden: ["バックエンド"],
  },
  {
    name: "インフラ技術が未入稿ならインフラを表示しない",
    portfolio: { ...completePortfolio, infra_skill: [] },
    visible: ["フロントエンド", "バックエンド"],
    hidden: ["インフラ"],
  },
  {
    name: "全ての技術が未入稿でも詳細ページを表示できる",
    portfolio: { ...completePortfolio, front_skill: [], back_skill: [], infra_skill: [] },
    visible: [],
    hidden: ["フロントエンド", "バックエンド", "インフラ"],
  },
]

describe("PortfolioDetail 入稿データ", () => {
  test.each(technologyVisibilityCases)("$name", ({ portfolio, visible, hidden }) => {
    render(<PortfolioDetail portfolio={portfolio} />)

    expect(screen.getByRole("heading", { level: 2, name: portfolio.name })).toBeVisible()
    expect(screen.getByText("About の本文")).toBeVisible()
    expect(screen.getByText("機能一覧の本文")).toBeVisible()
    expect(screen.getByText("アピールの本文")).toBeVisible()

    for (const category of visible) {
      expect(screen.getByRole("heading", { level: 4, name: category })).toBeVisible()
    }
    for (const category of hidden) {
      expect(screen.queryByRole("heading", { level: 4, name: category })).not.toBeInTheDocument()
    }
  })
})
