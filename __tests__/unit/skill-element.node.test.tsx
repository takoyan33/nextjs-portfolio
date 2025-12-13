import { SkillElement } from "@/components/ui/skill-element"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"

test("SkillElementが表示される", () => {
  render(
    <SkillElement
      name="JavaScript"
      rank="⭐️"
      icon="/images/skill/html5.svg"
      about="JavaScriptdescription"
    />,
  )
  expect(screen.getByText("JavaScript")).toBeVisible()
  expect(screen.getByText("⭐️")).toBeVisible()
})

test("SkillElementのアコーディオンが表示される", async () => {
  render(
    <SkillElement
      name="JavaScript"
      rank="⭐️"
      icon="/images/skill/html5.svg"
      about="JavaScriptdescription"
    />,
  )

  const label = screen.getByText("JavaScript")
  //親の <summary> を取得
  const summary = label.closest("summary")

  if (!summary) throw new Error("summary not found")

  await userEvent.click(summary)

  expect(screen.getByText("JavaScriptdescription")).toBeVisible()
})
