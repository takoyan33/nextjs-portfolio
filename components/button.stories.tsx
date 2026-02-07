import { Button } from "@/components/button"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { description: "ボタンラベル" },
    disabled: { description: "無効化フラグ" },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: "ボタン",
    disabled: false,
  },
}
