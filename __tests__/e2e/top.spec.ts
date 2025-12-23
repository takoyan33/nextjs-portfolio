import { expect, test } from "@playwright/test"

test("タイトルが表示される", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await expect(page).toHaveTitle(/To You Design/)
})

test("PC版だとハンバーガメニューが表示されない", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await expect(page.getByRole("button", { name: "btn-trigger" })).toBeHidden()
})

test.describe("SP", () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test("ハンバーガメニューが表示される", async ({ page }) => {
    await page.goto("http://localhost:3000/")
    await expect(page.locator(".btn-trigger")).toBeVisible()
  })
})
