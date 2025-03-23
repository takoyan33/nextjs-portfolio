import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { LowerTitle } from "../../app/components/ui/lower-title"

test("LowerTitle", () => {
	render(<LowerTitle title="名前" enTitle="name" />)
})
