import { test } from "vitest"
import { render } from "vitest-browser-react"
import HelloWorld from "./HelloWorld"

test("renders name", async () => {
  render(<HelloWorld name="Vitest" />)
})
