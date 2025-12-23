import { test } from "@playwright/test"

test("お問い合わせの実行", async ({ page }) => {
  await page.goto("http://localhost:3000/contact")
  await page.getByRole("textbox", { name: "名前" }).click()
  await page.getByRole("textbox", { name: "名前" }).fill("test 太郎")
  await page.getByRole("textbox", { name: "メールアドレス" }).click()
  await page.getByRole("textbox", { name: "メールアドレス" }).fill("samplep@gmail.com")
  await page.getByRole("textbox", { name: "メッセージ" }).click()
  await page.getByRole("textbox", { name: "メッセージ" }).fill("test お問い合わせ")
  await page.getByRole("button", { name: "確認画面へ" }).click()
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
  await page.getByRole("button", { name: "送信する" }).click()
  await page.getByRole("heading", { name: "To You Design", exact: true }).click()
  await page.getByRole("heading", { name: "Portfolio", exact: true }).click()
})
