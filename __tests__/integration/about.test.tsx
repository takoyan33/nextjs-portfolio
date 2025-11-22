import { render } from "@testing-library/react"
import { test, vitest } from "vitest"
import About from "../../app/about/page"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Aboutが表示されるか", async () => {
  const ui = await About()

  render(ui)

  // expect(await screen.findByText("経歴")).toBeInTheDocument()

  //screen.debug()
})
