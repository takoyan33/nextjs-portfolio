import { act, render } from "@testing-library/react"
import React from "react"
import { test, vitest } from "vitest"
import About from "../../app/about/page"

vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

test("About", async () => {
  let AboutComponent: React.ReactElement

  // Aboutコンポーネントは非同期なので、actでラップしてawaitで待つ
  await act(async () => {
    AboutComponent = await About()
  })

  render(AboutComponent!)
})
