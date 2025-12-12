import Contact from "@/app/contact/page"
import { render } from "@testing-library/react"
import { test, vitest } from "vitest"

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
