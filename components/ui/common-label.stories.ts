import { CommonLabel } from "@/components/ui/common-label"
import type { Meta, StoryObj } from "@storybook/react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CommonLabel> = {
  title: "UI/CommonLabel",
  component: CommonLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "タイトル",
    },
    id: {
      description: "1",
    },
  },
}

export default meta
type Story = StoryObj<typeof CommonLabel>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Common: Story = {
  args: {
    text: "タイトル",
    id: "1",
  },
}
