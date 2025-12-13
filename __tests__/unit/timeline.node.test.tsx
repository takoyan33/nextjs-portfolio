import { Timeline } from "@/components/ui/timeline"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

test("Timelineが表示されるか", () => {
  render(<Timeline title="高校入学" date="2024-01-01" body="高校入学の説明" />)

  expect(screen.getByText("高校入学")).toBeVisible()
  expect(screen.getByText("2024-01-01")).toBeVisible()
  expect(screen.getByText("高校入学の説明")).toBeVisible()
})

test("htmlタグが正しく描画されるか", () => {
  const { container } = render(
    <Timeline title="高校入学" date="2024-01-01" body="<p>高校入学<br>の説明</p>" />,
  )

  expect(container.querySelector("p")).toBeVisible()
  expect(container.querySelector("br")).toBeVisible()
})
