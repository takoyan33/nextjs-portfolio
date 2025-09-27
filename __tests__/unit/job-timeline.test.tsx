import { render, screen } from "@testing-library/react"
import { test } from "vitest"
import { JobTimeline } from "../../app/components/ui/rsc/job-timeline"

test("JobTimelineが表示されるか", async () => {
  const ui = await JobTimeline()

  render(ui)

  expect(await screen.findByText("フロントエンドエンジニア")).toBeVisible()
  expect(await screen.findByText("フルスタックエンジニア")).toBeVisible()

  //screen.debug()
})
