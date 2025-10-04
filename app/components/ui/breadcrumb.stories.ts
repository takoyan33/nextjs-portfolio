import type { Meta, StoryObj } from "@storybook/react"
import { Breadcrumb } from "./breadcrumb"

const meta: Meta<typeof Breadcrumb> = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "パンくずリストの項目 (nameとlinkを含む配列)",
      control: { type: "object" },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Common: Story = {
  args: {
    items: [
      { name: "Home", link: "/" },
      { name: "Docs", link: "/docs" },
      { name: "Breadcrumb", link: "/docs/breadcrumb" },
    ],
  },
}
