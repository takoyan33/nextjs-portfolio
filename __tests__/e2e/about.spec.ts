import { type Page, expect, test } from "@playwright/test"

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    // aboutページに遷移
    await page.goto("/about")
  })

  test("タブの切り替えが正常に動作すること", async ({ page }: { page: Page }) => {
    const historyTab = page.locator("#tabA")
    const careerTab = page.locator("#tabB")

    // 初期状態の確認（履歴タブがアクティブ）
    await expect(historyTab).toHaveAttribute("aria-selected", "true")
    await expect(careerTab).toHaveAttribute("aria-selected", "false")

    // 経歴コンテンツの確認（Mockデータの"大学卒業"が表示されているか）
    await expect(page.getByText("大学卒業")).toBeVisible()
    // 職歴コンテンツが非表示であることを確認（Mockデータの"フロントエンドエンジニア"が表示されていないか）
    await expect(page.getByText("フロントエンドエンジニア")).not.toBeVisible()

    // 職歴タブをクリック
    // inputタグ(#tabB)は display: none のため、直接クリックできません。
    // 代わりに親要素の label をクリックします。
    await page.locator("label").filter({ has: careerTab }).click()

    // クリック後の状態確認
    await expect(historyTab).toHaveAttribute("aria-selected", "false")
    await expect(careerTab).toHaveAttribute("aria-selected", "true")

    // コンテンツの切り替えを確認
    // 経歴コンテンツが非表示になったか
    await expect(page.getByText("大学卒業")).not.toBeVisible()
    // 職歴コンテンツが表示されたか
    await expect(page.getByText("フロントエンドエンジニア")).toBeVisible()
  })

  test("資格一覧が正常に表示されること", async ({ page }: { page: Page }) => {
    // 資格セクションの確認
    await expect(page.getByRole("heading", { name: "資格" })).toBeVisible()
    // Mockデータの確認
    await expect(
      page.getByRole("cell", { name: "AWS認定ソリューションアーキテクト" }),
    ).toBeVisible()
  })
})
