import { render, screen } from "@testing-library/react"
import React from "react"
import { expect, test, vitest } from "vitest"
import Contact from "../../app/contact/page"

vitest.mock("next/navigation", () => ({
	useRouter: () => ({
		query: { id: "test-post-id" },
		push: vitest.fn(),
	}),
}))

test("Contact", () => {
	render(<Contact />)
})
