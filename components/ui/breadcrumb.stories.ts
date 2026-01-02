import { Breadcrumb } from "@/components/ui/breadcrumb"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Breadcrumb",
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
