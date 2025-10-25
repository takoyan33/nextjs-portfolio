"use client"

/**
 * モーダルを開く
 * @param setIsOpen
 */
export const OpenModal = (setIsOpen: (isOpen: boolean) => void): void => {
  setIsOpen(true)
  if (typeof document !== "undefined") {
    document.body.classList.add("modal-open")
  }
}

/**
 * モーダルを閉じる
 * @param setIsOpen
 */
export const CloseModal = (setIsOpen: (isOpen: boolean) => void): void => {
  setIsOpen(false)
  if (typeof document !== "undefined") {
    document.body.classList.remove("modal-open")
  }
}
