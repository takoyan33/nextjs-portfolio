import { render } from "@testing-library/react"
import { test } from "vitest"
import { Timeline } from "../../app/components/ui/timeline"

test("Timelineが表示されるか", () => {
  render(<Timeline title="名前" date="name" body="aa" />)
})
