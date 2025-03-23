import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test } from "vitest"
import { LicenseList } from "../app/components/ui/rsc/license-list"

test("LicenseList", () => {
	render(<LicenseList />)
})
