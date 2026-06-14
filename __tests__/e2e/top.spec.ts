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

test.describe("本番環境でのトラッキングタグ", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://to-you-design.vercel.app/")
  })

  test("Google AnalyticsとMicrosoft Clarityが適切に設定されている（本番環境のみ）", async ({
    page,
  }) => {
    // Google Analytics のスクリプトタグ (gtag.js) が G-R47KRGK42T で読み込まれていること
    const gaScript = page.locator("script[src*='googletagmanager.com/gtag/js?id=G-R47KRGK42T']")
    await expect(gaScript).toBeAttached()

    // window.dataLayer が定義されていること
    const dataLayer = await page.evaluate(() => (window as any).dataLayer)
    expect(dataLayer).toBeDefined()
    expect(Array.isArray(dataLayer)).toBe(true)

    // Microsoft Clarity のインラインスクリプトにプロジェクトID (pbadl6xwcf) が含まれていること
    const clarityScript = page.locator("script#clarity-tag")
    await expect(clarityScript).toBeAttached()

    // Microsoft Clarity の動的スクリプトが読み込まれていること
    const clarityRuntimeScript = page.locator('script[src*="clarity.ms/tag/pbadl6xwcf"]')
    await expect(clarityRuntimeScript).toBeAttached()

    // window.clarity が定義されていること
    const clarityFunction = await page.evaluate(() => typeof (window as any).clarity)
    expect(clarityFunction).toBe("function")
  })
})
