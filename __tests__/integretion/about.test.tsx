import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test, vitest } from "vitest"
import About from "../../app/about/page"

vitest.mock("next/navigation", () => ({
	useRouter: () => ({
		query: { id: "test-post-id" },
		push: vitest.fn(),
	}),
}))

test("About", () => {
	render(<About />)
})
