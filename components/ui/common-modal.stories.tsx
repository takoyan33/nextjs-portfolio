import { CommonModal } from "@/components/ui/common-modal"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

const meta: Meta<typeof CommonModal> = {
  title: "UI/CommonModal",
  component: CommonModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { description: "モーダルの表示状態 (boolean)" },
    img: { description: "表示する画像のパス (string)" },
    closeModal: { description: "モーダルを閉じる関数 (() => void)" },
    title: { description: "モーダルのタイトル (string)" },
  },
}

export default meta

type Story = StoryObj<typeof CommonModal>

export const Closed: Story = {
  args: {
    isOpen: false,
    img: "/images/portfolio/portfolio_appeal3.png",
    closeModal: () => {},
    title: "ポートフォリオ画像",
  },
}

export const Opened: Story = {
  args: {
    isOpen: true,
    img: "/images/portfolio/portfolio_appeal3.png",
    closeModal: () => {},
    title: "ポートフォリオ画像",
  },
}
