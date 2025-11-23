import React from "react"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import HelloWorld from "./HelloWorld"

test("renders name", async () => {
  render(<HelloWorld name="Vitest" />)

  const text = screen.getByText("Vitest")

  await expect(text).toHaveTextContent("Vitest")
})
