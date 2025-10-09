import type { Meta, StoryObj } from "@storybook/react"
import { SkillElement } from "./skill-element"

const meta: Meta<typeof SkillElement> = {
  title: "UI/SkillElement",
  component: SkillElement,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { description: "スキル名 (string)" },
    rank: { description: "スキルランク (string)" },
    icon: { description: "スキルアイコン画像パス (string)" },
    about: { description: "スキルの説明 (string)" },
  },
}

export default meta

type Story = StoryObj<typeof SkillElement>

export const Default: Story = {
  args: {
    name: "TypeScript",
    rank: "⭐️",
    icon: "/images/myphoto.png",
    about: "型安全な開発ができるようになりました。React/Next.jsで実務経験あり。",
  },
}

export const Opened: Story = {
  args: {
    name: "React",
    rank: "⭐️⭐️",
    icon: "/images/myphoto.png",
    about: "SPA開発やHooksの活用が得意です。",
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector(".skill__element") as HTMLButtonElement
    if (button) button.click()
  },
}
