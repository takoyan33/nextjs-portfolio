import { render } from "@testing-library/react"
import { test, vitest } from "vitest"
import Blog from "../../app/blog/page"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Blogが表示されるか", () => {
  render(<Blog />)
})
