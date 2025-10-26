import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { LowerTitle } from "../../components/ui/lower-title"

test("LowerTitleが表示されるか", () => {
  render(<LowerTitle title="名前" enTitle="name" />)
  expect(screen.getByText("名前")).toBeVisible()
})
