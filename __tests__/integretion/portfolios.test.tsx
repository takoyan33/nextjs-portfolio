import { render } from "@testing-library/react"
import { test, vitest } from "vitest"
import Portfolios from "../../app/portfolios/page"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Portfoliosが表示されるか", () => {
  render(<Portfolios />)
})
