import "@testing-library/jest-dom/vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { afterEach, describe, expect, test, vi, vitest } from "vitest"
import { Header } from "../../components/layout/header"

// Mocks for next/image and internal link/button components to keep the test focused
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) =>
    React.createElement("img", props as unknown as React.ImgHTMLAttributes<HTMLImageElement>),
}))
vi.mock("components/ui/button/common-button", () => ({
  LinkButton: ({ text, link }: { text: string; link: string }) => <a href={link}>{text}</a>,
}))
vi.mock("components/ui", () => ({
  TransitionLink: ({
    children,
    href,
    setOpenMenu,
  }: {
    children: React.ReactNode
    href?: string
    setOpenMenu?: (v: boolean) => void
  }) => (
    <a href={href} onClick={() => setOpenMenu?.(false)}>
      {children}
    </a>
  ),
}))

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
}))

describe("Header component", () => {
  afterEach(() => {
    vi.restoreAllMocks()
    // clean up any style set on body
    document.body.style.overflow = ""
  })

  test("正常系: 初期状態: メニューは閉じている", () => {
    render(<Header />)

    const toggle = screen.getByRole("button", { name: /メニューを開く/i })
    expect(toggle).toHaveAttribute("aria-expanded", "false")
  })

  test("正常系: メニューを開くと aria-expanded と body overflow が更新される", () => {
    render(<Header />)

    const toggle = screen.getByRole("button", { name: /メニューを開く/i })
    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(document.body.style.overflow).toBe("hidden")

    // 閉じる
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    expect(document.body.style.overflow).toBe("")
  })

  test("正常系: フォーカストラップにフォーカスするとハンバーガーメニューにフォーカスが移る", () => {
    render(<Header />)

    const focusTrap = document.getElementById("js-focus-trap") as HTMLElement
    const hamburger = document.getElementById("btn01") as HTMLElement

    // sanity checks
    expect(focusTrap).toBeTruthy()
    expect(hamburger).toBeTruthy()

    // focus をトラップ要素に与えると、handleFocus によりハンバーガーにフォーカスされる
    focusTrap.focus()
    expect(document.activeElement).toBe(hamburger)
  })
})
