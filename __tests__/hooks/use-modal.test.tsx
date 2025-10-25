import { describe, expect, test, vi } from "vitest"
import { CloseModal, OpenModal } from "../../hooks/use-modal"

describe("use-modal hooks", () => {
  test("OpenModal sets open state and adds body class", () => {
    const setIsOpen = vi.fn()
    // JSDOM document body classList available
    document.body.className = ""

    OpenModal(setIsOpen)

    expect(setIsOpen).toHaveBeenCalledWith(true)
    expect(document.body.classList.contains("modal-open")).toBe(true)
  })

  test("CloseModal unsets open state and removes body class", () => {
    const setIsOpen = vi.fn()
    document.body.className = "modal-open"

    CloseModal(setIsOpen)

    expect(setIsOpen).toHaveBeenCalledWith(false)
    expect(document.body.classList.contains("modal-open")).toBe(false)
  })
})
