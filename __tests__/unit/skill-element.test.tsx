import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { SkillElement } from "../../app/components/ui/skill-element"

test("SkillElementが表示されるか", () => {
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
  expect(screen.getByText("JavaScriptdescription")).toBeVisible()
  //screen.debug()
})
