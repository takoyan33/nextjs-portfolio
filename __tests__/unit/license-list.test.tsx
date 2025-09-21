import { render } from "@testing-library/react"
import { test } from "vitest"
import { LicenseList } from "../../app/components/ui/rsc/license-list"

test("LicenseListが表示されるか", () => {
  render(LicenseList())
})
