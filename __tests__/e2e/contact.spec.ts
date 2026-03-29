import { test } from "@playwright/test"

test("ローカル お問い合わせの実行", async ({ page }) => {
  await page.goto("http://localhost:3000")
  await page.getByRole("button", { name: "お問い合わせフォームへ" }).click()
  await page.waitForTimeout(1000)
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
  // mockのため送信確認まで行わない
})

test("本番環境 お問い合わせの実行", async ({ page }) => {
  await page.goto("https://to-you-design.vercel.app")
  await page.waitForTimeout(5000)
  await page.getByRole("button", { name: "お問い合わせ" }).click()
  await page.waitForTimeout(1000)
  await page.getByRole("textbox", { name: "名前" }).click()
  await page.getByRole("textbox", { name: "名前" }).fill("test 太郎")
  await page.getByRole("textbox", { name: "メールアドレス" }).click()
  await page.getByRole("textbox", { name: "メールアドレス" }).fill("samplep@gmail.com")
  await page.getByRole("textbox", { name: "メッセージ" }).click()
  await page.getByRole("textbox", { name: "メッセージ" }).fill("test お問い合わせ")
  await page.getByRole("button", { name: "確認画面へ" }).click()
  await page.waitForTimeout(2000)
  await page.getByRole("button", { name: "送信する" }).click()
  await page.waitForTimeout(5000)
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
  await page.waitForURL("https://to-you-design.vercel.app/");
})
