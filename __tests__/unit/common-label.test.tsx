import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { CommonLabel } from "../../app/components/ui/common-label"

test("CommonLabel renders with text", () => {
  render(<CommonLabel text="名前" id="name" />)
  expect(screen.getByText("名前")).toBeVisible()
})

// test("CommonLabel assigns correct htmlFor attribute", () => {
// 	render(<CommonLabel text="名前" id="name" />)
// 	const label = screen.getByText("名前").closest("label")
// 	expect(label).toHaveAttribute("for", "name")
// })

test("CommonLabel displays the required mark", () => {
  render(<CommonLabel text="名前" id="name" />)
  const requiredMarks = screen.getAllByText("必須")
  expect(requiredMarks.length).toBeGreaterThan(0)
})
