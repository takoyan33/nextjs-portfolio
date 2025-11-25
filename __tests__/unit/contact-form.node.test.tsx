import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vi } from "vitest"
import { ContactForm } from "../../app/contact/_containers/contact-form"

vi.mock("@emailjs/browser", () => ({
  send: vi.fn().mockResolvedValue({}),
}))

describe("ContactFormの表示とバリデーション", () => {
  test("フォームの各項目が画面に表示される", () => {
    render(<ContactForm />)
    expect(screen.getByText("名前")).toBeVisible()
    expect(screen.getByText("メールアドレス")).toBeVisible()
    expect(screen.getByText("メッセージ")).toBeVisible()
    expect(screen.getByRole("button", { name: "確認画面へ" })).toBeVisible()
  })

  test("必須項目が空の場合はエラーメッセージが表示される", async () => {
    render(<ContactForm />)
    const button = screen.getByRole("button", { name: "確認画面へ" })
    await userEvent.click(button)
    expect(await screen.findByText("名前は入力必須です")).toBeVisible()
    expect(await screen.findByText("正しいメールアドレスを入力してください")).toBeVisible()
    expect(await screen.findByText("問い合わせ内容は5文字以上必要です")).toBeVisible()
  })
})
