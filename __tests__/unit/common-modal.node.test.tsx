import { CommonModal } from "@/components/ui/common-modal"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"

describe("CommonModal", () => {
  test("モーダルが表示され画像が見える", () => {
    render(
      <CommonModal
        isOpen={true}
        img="/images/portfolio/portfolio_appeal3.png"
        closeModal={vi.fn()}
        title="テスト画像"
      />,
    )
    expect(screen.getByRole("img", { name: "テスト画像" })).toBeVisible()
    expect(screen.getByRole("button", { name: "モーダルを閉じる" })).toBeVisible()
  })

  test("閉じるボタンを押すとcloseModalが呼ばれる", async () => {
    const closeModal = vi.fn()
    render(
      <CommonModal
        isOpen={true}
        img="/images/portfolio/portfolio_appeal3.png"
        closeModal={closeModal}
        title="テスト画像"
      />,
    )
    await userEvent.click(screen.getByRole("button", { name: "モーダルを閉じる" }))
    expect(closeModal).toHaveBeenCalled()
  })
})
