import { PostNavigation } from "@/components/ui/post-navigation"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof PostNavigation> = {
  title: "UI/PostNavigation",
  component: PostNavigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    next_title: { description: "次の記事タイトル (string)" },
    next_article_id: { description: "次の記事ID (string)" },
    prev_title: { description: "前の記事タイトル (string)" },
    prev_article_id: { description: "前の記事ID (string)" },
  },
}

export default meta

type Story = StoryObj<typeof PostNavigation>

export const Default: Story = {
  args: {
    next_title: "次の記事タイトル",
    next_article_id: "2",
    prev_title: "前の記事タイトル",
    prev_article_id: "1",
  },
}
