import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"
import Portfolios from "../../app/portfolios/page"

// --- next/navigation のモック ---
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vi.fn(),
  }),
}))

test("Portfolios が表示されるか", async () => {
  render(<Portfolios />)

  expect(await screen.findByText("To You Design(ポートフォリオサイト)1")).toBeInTheDocument()
  expect(await screen.findByText("To You Design(ポートフォリオサイト)2")).toBeInTheDocument()
})
