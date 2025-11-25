import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { HomePortfolioSlide } from "../../app/(home)/_containers/home-portfolio-slide"

test.skip("HomePortfolioSlideが表示されるか", async () => {
  const ui = await HomePortfolioSlide()

  render(ui)

  expect(await screen.findByText("To You Design(ポートフォリオサイト)1")).toBeVisible()
  expect(await screen.findByText("To You Design(ポートフォリオサイト)2")).toBeVisible()

  //screen.debug()
})
