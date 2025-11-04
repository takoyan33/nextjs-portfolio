import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { CommonLabel } from "../../components/ui/common-label"

test("ラベルに名前が表示される", () => {
  render(<CommonLabel text="名前" id="name" />)
  expect(screen.getByText("名前")).toBeVisible()
})

test("ラベルに必須マークが表示される", () => {
  render(<CommonLabel text="名前" id="name" required />)
  const requiredMarks = screen.getAllByText("必須")
  expect(requiredMarks.length).toBeGreaterThan(0)
})
