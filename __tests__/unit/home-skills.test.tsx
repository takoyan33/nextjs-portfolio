import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { HomeSkills } from "../../app/(home)/_containers/home-skills"

test("HomeSkillsが表示されるか", async () => {
  const ui = await HomeSkills()

  render(ui)

  expect(await screen.findByText("HTML")).toBeVisible()
  expect(await screen.findByText("PHP")).toBeVisible()
  expect(await screen.findByText("AWS")).toBeVisible()
  expect(await screen.findByText("Figma")).toBeVisible()

  //screen.debug()
})
