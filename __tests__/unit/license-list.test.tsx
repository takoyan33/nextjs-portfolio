import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { LicenseList } from "../../app/components/ui/rsc/license-list"

test("LicenseListが表示されるか", async () => {
  const ui = await LicenseList()

  render(ui)

  expect(await screen.findByText("AWS認定デベロッパー")).toBeVisible()
  expect(await screen.findByText("AWS認定SysOpsアドミニストレーター")).toBeVisible()

  //screen.debug()
})
