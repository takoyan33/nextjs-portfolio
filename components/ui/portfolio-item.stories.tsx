import PortfolioItem from "@/components/ui/portfolio-item"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PortfolioItem> = {
  title: "UI/PortfolioItem",
  component: PortfolioItem,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    portfolio_id: { description: "ポートフォリオID (number)" },
    portfolio_name: { description: "ポートフォリオタイトル (string)" },
    portfolio_date: { description: "作成日 (string)" },
    portfolio_tag: { description: "タグ一覧 (string[])" },
    portfolio_topImg: { description: "サムネイル画像パス (string)" },
  },
}

export default meta

type Story = StoryObj<typeof PortfolioItem>

export const Default: Story = {
  args: {
    portfolio_id: 1,
    portfolio_name: "Reactポートフォリオ",
    portfolio_date: "2025-10-06",
    portfolio_tag: ["React", "TypeScript", "Next.js"],
    portfolio_topImg: "/images/myphoto.png",
  },
}
