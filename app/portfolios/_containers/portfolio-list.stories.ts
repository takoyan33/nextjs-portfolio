import { PortfolioList } from "@/app/portfolios/_containers/portfolio-list"
import type { Meta, StoryObj } from "@storybook/react"
import { http, HttpResponse } from "msw"

const meta: Meta<typeof PortfolioList> = {
  title: "UI/PortfolioList",
  component: PortfolioList,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    msw: {
      handlers: [
        http.get("*/api/portfolios", () => {
          return HttpResponse.json({
            data: [
              {
                id: 3,
                name: "To You Design(ポートフォリオサイト)1",
                date: "2023-11-30",
                tag: ["React", "Next.js", "Ruby"],
                topImg: "/images/portfolio/portfolio_top3.png",
                front_url: "https://to-you-design.vercel.app/",
                front_github: "https://github.com/takoyan33/nextjs-portfolio",
                back_github: "https://github.com/takoyan33/next-portfolio-backend-posgre",
                color: "portfolio__tag--color4",
                about:
                  "<p>自分についての経歴や経験を振り返るために、ポートフォリオサイトとして、Next.jsとRuby on Railsで制作しました。</p>",
                aboutImg: "/images/portfolio/portfolio_about3.png",
                function:
                  "<p>内容としては</p><ul><li>経歴、職歴紹介</li><li>ポートフォリオ紹介</li><li>ブログ表示</li><li>プロフィール画面</li></ul><p>があります</p>",
                functionImg: "/images/portfolio/portfolio_function3.png",
                appeal:
                  "<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。レスポンシブを意識した実装をしました。<br>2つ目は、App Routerで実装し、読み込みを早めるため、Server Componentを利用しながら実装している点です。<br>3つ目にRuby on RailsでバックエンドのAPIを作っており、そこからデータを取得している点です。</p>",
                appealImg: "/images/portfolio/portfolio_appeal3.png",
                front_skill: ["React", "Next.js", "SCSS", "Biome"],
                back_skill: ["Ruby on Rails", "Ruby"],
                infra_skill: ["Vercel", "Render"],
                time: "2ヶ月",
                prev_title: "Manga Study",
                prev_article_id: "2",
                next_title: "サークル管理App",
                next_article_id: "4",
              },
              {
                id: 3,
                name: "To You Design(ポートフォリオサイト)1",
                date: "2023-11-29",
                tag: ["React", "Next.js", "Ruby"],
                topImg: "/images/portfolio/portfolio_top3.png",
                front_url: "https://to-you-design.vercel.app/",
                front_github: "https://github.com/takoyan33/nextjs-portfolio",
                back_github: "https://github.com/takoyan33/next-portfolio-backend-posgre",
                color: "portfolio__tag--color4",
                about:
                  "<p>自分についての経歴や経験を振り返るために、ポートフォリオサイトとして、Next.jsとRuby on Railsで制作しました。</p>",
                aboutImg: "/images/portfolio/portfolio_about3.png",
                function:
                  "<p>内容としては</p><ul><li>経歴、職歴紹介</li><li>ポートフォリオ紹介</li><li>ブログ表示</li><li>プロフィール画面</li></ul><p>があります</p>",
                functionImg: "/images/portfolio/portfolio_function3.png",
                appeal:
                  "<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。レスポンシブを意識した実装をしました。<br>2つ目は、App Routerで実装し、読み込みを早めるため、Server Componentを利用しながら実装している点です。<br>3つ目にRuby on RailsでバックエンドのAPIを作っており、そこからデータを取得している点です。</p>",
                appealImg: "/images/portfolio/portfolio_appeal3.png",
                front_skill: ["React", "Next.js", "SCSS", "Biome"],
                back_skill: ["Ruby on Rails", "Ruby"],
                infra_skill: ["Vercel", "Render"],
                time: "2ヶ月",
                prev_title: "Manga Study",
                prev_article_id: "2",
                next_title: "サークル管理App",
                next_article_id: "4",
              },
            ],
          })
        }),
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PortfolioList>

export const Common: Story = {
  args: {},
}
