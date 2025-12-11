import { Header } from "@/components/layout/header"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: () => <Header />,
}
