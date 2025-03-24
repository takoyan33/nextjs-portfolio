import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { SkillElement } from "../../app/components/ui/skill-element"

test("SkillElement", () => {
	render(
		<SkillElement
			name="aaa"
			rank="aaa"
			tag="aaa"
			icon="/images/skill/html5.svg"
			about="aaaa"
		/>,
	)
})
