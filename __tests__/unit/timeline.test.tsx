import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { Timeline } from "../../app/_components/ui/timeline"

test("Timelineが表示されるか", () => {
  render(<Timeline title="高校入学" date="2024-01-01" body="高校入学の説明" />)

  expect(screen.getByText("高校入学")).toBeVisible()
  expect(screen.getByText("2024-01-01")).toBeVisible()
  expect(screen.getByText("高校入学の説明")).toBeVisible()
})
