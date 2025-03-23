import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { CommonLabel } from "../app/components/ui/common-label"

test("CommonLabel", () => {
	render(<CommonLabel text="名前" id="name" />)
})
