import "@testing-library/jest-dom/vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { AboutTabs } from "../../app/about/_containers/about-tabs"

describe("AboutTabs", () => {
  test("初期表示は経歴タブが選択されている", () => {
    render(<AboutTabs />)

    // 経歴タブの見出しが表示される
    expect(screen.getByText("経歴")).toBeInTheDocument()
  })

  test("職歴タブをクリックすると切り替わる", () => {
    render(<AboutTabs />)

    // 職歴タブをクリック
    const careerTab = screen.getByRole("tab", { name: "職歴" })

    fireEvent.click(careerTab)

    expect(careerTab).toHaveAttribute("aria-selected", "true")
  })
})
