import { render } from "@testing-library/react"
import { test } from "vitest"
import { SkillElement } from "../../app/components/ui/skill-element"

test("SkillElementが表示されるか", () => {
  render(
    <SkillElement name="aaa" rank="aaa" tag="aaa" icon="/images/skill/html5.svg" about="aaaa" />,
  )
  //screen.debug()
})
