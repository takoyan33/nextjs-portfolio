import { render } from "@testing-library/react"
import React from "react"
import { test, vitest } from "vitest"
import Blog from "../../app/blog/page"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Blog", () => {
  render(<Blog />)
})
