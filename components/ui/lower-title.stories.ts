import { LowerTitle } from "@/components/ui/lower-title"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LowerTitle> = {
  title: "UI/LowerTitle",
  component: LowerTitle,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      description: "タイトル",
    },
    enTitle: {
      description: "英語のタイトル",
    },
  },
}

export default meta
type Story = StoryObj<typeof LowerTitle>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Common: Story = {
  args: {
    title: "タイトル",
    enTitle: "title",
  },
}
