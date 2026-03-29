import { test } from "@playwright/test"

test("ローカル ログインの実行", async ({ page }) => {
  await page.goto("http://localhost:3000/admin")
  await page.waitForTimeout(1000)
  await page.getByRole("textbox", { name: "メールアドレス" }).click()
  await page.getByRole("textbox", { name: "メールアドレス" }).fill("user@example.com")
  await page.getByLabel("パスワード").click()
  await page.getByLabel("パスワード").fill("password")
  await page.getByRole("button", { name: "ログイン" }).click()
  // mockのため送信確認まで行わない
})

test("本番環境 ログインの実行", async ({ page }) => {
  await page.goto("https://to-you-design.vercel.app/admin")
  await page.waitForTimeout(1000)
  await page.getByRole("textbox", { name: "email" }).click()
  await page.getByRole("textbox", { name: "email" }).fill("user@example.com")
  await page.getByLabel("パスワード").click()
  await page.getByLabel("パスワード").fill("password")
  await page.getByRole("button", { name: "ログイン" }).click()
  await page.waitForTimeout(3000)
  await page.waitForURL("https://to-you-design.vercel.app/admin/dashboard")
  await page.getByRole("button", { name: "ログアウト" }).click()
  await page.waitForTimeout(3000)
  await page.waitForURL("https://to-you-design.vercel.app")
})
