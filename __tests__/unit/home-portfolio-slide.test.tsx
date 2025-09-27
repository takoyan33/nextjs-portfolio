import { render, screen } from "@testing-library/react"
import { test, vitest } from "vitest"
import { HomePortfolioSlide } from "../../app/(home)/_containers/home-portfolio-slide"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("HomePortfolioSlideが表示されるか", async () => {
  const ui = await HomePortfolioSlide()

  render(ui)

  expect(await screen.findByText("To You Design(ポートフォリオサイト)1")).toBeVisible()
  expect(await screen.findByText("To You Design(ポートフォリオサイト)2")).toBeVisible()

  //screen.debug()
})
