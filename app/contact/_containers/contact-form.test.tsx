import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, test, vitest } from "vitest"
import { ContactForm } from "./contact-form"

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

describe("ContactForm", () => {
  test("正常系 inputに入力できる", async () => {
    render(<ContactForm />)

    // 名前ラベルが表示されることを確認
    const nameInput = screen.getByLabelText(/名前/)
    expect(nameInput).toBeVisible()

    // 名前input要素が表示され、入力の確認
    await userEvent.type(nameInput, "山田太郎")
    expect(nameInput).toHaveValue("山田太郎")
    // console.log("value:", (nameInput as HTMLInputElement).value)

    // メールアドレスラベルが表示されることを確認
    const emailInput = screen.getByLabelText(/メールアドレス/)
    expect(emailInput).toBeVisible()

    // メールアドレスinput要素が表示され、入力の確認
    await userEvent.type(emailInput, "test@example.com")
    expect(emailInput).toHaveValue("test@example.com")
    // console.log("value:", (emailInput as HTMLInputElement).value)

    // メッセージラベルが表示されることを確認
    const messageInput = screen.getByLabelText(/メッセージ/)
    expect(messageInput).toBeVisible()

    // メッセージinput要素が表示され、入力の確認
    await userEvent.type(messageInput, "テストメッセージ")
    expect(messageInput).toHaveValue("テストメッセージ")
    // console.log("value:", (messageInput as HTMLInputElement).value)
  })
})
