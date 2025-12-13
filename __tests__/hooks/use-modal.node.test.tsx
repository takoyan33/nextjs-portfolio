import { CloseModal, OpenModal } from "@/hooks/use-modal"
import { describe, expect, test, vi } from "vitest"

describe("use-modal フックのテスト", () => {
  test("OpenModal が状態を開き、body にクラスを追加すること", () => {
    const setIsOpen = vi.fn()
    document.body.className = ""

    OpenModal(setIsOpen)

    expect(setIsOpen).toHaveBeenCalledWith(true)
    expect(document.body.classList.contains("modal-open")).toBe(true)
  })

  test("CloseModal が状態を閉じ、body からクラスを削除すること", () => {
    const setIsOpen = vi.fn()
    document.body.className = "modal-open"

    CloseModal(setIsOpen)

    expect(setIsOpen).toHaveBeenCalledWith(false)
    expect(document.body.classList.contains("modal-open")).toBe(false)
  })
})
