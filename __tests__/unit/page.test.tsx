import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import Page from "../../app/test/page"

test("Pageが表示されるか", () => {
  render(<Page />)
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined()
})
