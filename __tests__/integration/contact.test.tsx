import { render } from "@testing-library/react"
import { test, vitest } from "vitest"
import Contact from "../../app/contact/page"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Contactが表示されるか", () => {
  render(<Contact />)
})
