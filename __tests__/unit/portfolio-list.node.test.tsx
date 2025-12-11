import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { mockSWRResponse } from "../../__tests__/utils/swr-helper"
import { PortfolioList } from "../../app/portfolios/_containers/portfolio-list"

// useSWRをモック
vi.mock("swr")

describe("正常系", () => {
  test("portfolioList表示される", () => {
    // モックの戻り値を設定
    mockSWRResponse({
      data: [
        {
          id: 1,
          name: "ポートフォリオ1",
          date: "2023-01-01",
          topImg: "/images/portfolio1.png",
          tag: ["説明1"],
        },
        {
          id: 2,
          name: "ポートフォリオ2",
          date: "2023-02-01",
          topImg: "/images/portfolio2.png",
          tag: ["説明2"],
        },
      ],
    })

    render(<PortfolioList />)
    //screen.debug()
    expect(screen.getByText("全ての制作物")).toBeVisible()
    expect(screen.getByText("ポートフォリオ1")).toBeVisible()
    expect(screen.getByText("ポートフォリオ2")).toBeVisible()
  })

  test("portfolioList 読み込み中", () => {
    // モックの戻り値を設定
    mockSWRResponse(undefined, undefined, true)

    render(<PortfolioList />)

    expect(screen.getByText("読み込み中...")).toBeVisible()
  })
  test("portfolioList 記事がない場合", () => {
    // モックの戻り値を設定
    mockSWRResponse(undefined)

    render(<PortfolioList />)

    expect(screen.getByText("記事がありません")).toBeVisible()
  })
})

describe("異常系", () => {
  test("portfolioList表示されない", () => {
    mockSWRResponse(undefined, new Error("fetch failed"))

    render(<PortfolioList />)

    expect(screen.getByText("エラーが発生しました")).toBeVisible()
  })
})
