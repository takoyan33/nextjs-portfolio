import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test, vitest } from "vitest"
import { Breadcrumb } from "../app/components/ui/bread-crumb"

vitest.mock("next/navigation", () => ({
	useRouter: () => ({
		query: { id: "test-post-id" },
		push: vitest.fn(),
	}),
}))

test("Breadcrumb", () => {
	render(<Breadcrumb name="aaa" link="aaa" />)
})
