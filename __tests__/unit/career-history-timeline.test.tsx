import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { CareerHistoryTimeline } from "../../app/components/ui/rsc/career-history-timeline"

test("CareerHistoryTimelineが表示されるか", async () => {
  const ui = await CareerHistoryTimeline()

  render(ui)

  expect(screen.getByText("大学卒業")).toBeVisible()
  expect(screen.getByText("IT企業入社")).toBeVisible()

  //screen.debug()
})
