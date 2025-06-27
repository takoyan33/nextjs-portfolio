import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { Timeline } from "../../app/components/ui/timeline"

test("Timeline", () => {
	render(<Timeline title="名前" date="name" body="aa" />)
})
