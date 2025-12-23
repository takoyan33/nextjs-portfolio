import About from "@/app/about/page"
import { render } from "@testing-library/react"
import { test, vitest } from "vitest"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("Aboutが表示されるか", async () => {
  // 子コンポーネントのmswが動かない
  const ui = await About()

  render(ui)
})
