import { ZustandExampleComponent } from "@/components/ui/zustand-example"
import "@testing-library/jest-dom/vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("ZustandExampleComponent", () => {
  it("初期状態でモーダルが閉じていることを表示する", () => {
    render(<ZustandExampleComponent />)
    expect(screen.getByText(/モーダル状態: 閉じている/)).toBeInTheDocument()
    expect(screen.getByText(/isOpen: false/)).toBeInTheDocument()
  })

  it("ボタンをクリックするとモーダルが開く状態になる", () => {
    render(<ZustandExampleComponent />)
    const button = screen.getByRole("button", { name: /モーダルを開く/ })
    fireEvent.click(button)
    expect(screen.getByText(/モーダル状態: 開いている/)).toBeInTheDocument()
    expect(screen.getByText(/isOpen: true/)).toBeInTheDocument()
  })
})
