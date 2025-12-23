import { HomePortfolioSlide } from "@/app/(home)/_containers/home-portfolio-slide"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test, vi } from "vitest"

const mockedHeaders = vi.hoisted(() => {
  return vi.fn()
})

test("HomePortfolioSlideで3つ表示されるか", async () => {
  mockedHeaders.mockReturnValue({
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    },
  })

  const ui = await HomePortfolioSlide()

  render(ui)

  expect(screen.getByText("To You Design(ポートフォリオサイト)1")).toBeVisible()
  expect(screen.getByText("To You Design(ポートフォリオサイト)2")).toBeVisible()
  expect(screen.getByText("To You Design(ポートフォリオサイト)3")).toBeVisible()
})
