import { render, screen } from "@testing-library/react"
import { test } from "vitest"
import { LowerTitle } from "../../app/components/ui/lower-title"

test("LowerTitleが表示されるか", () => {
  render(<LowerTitle title="名前" enTitle="name" />)
  expect(screen.getByText("名前")).toBeVisible()
})
