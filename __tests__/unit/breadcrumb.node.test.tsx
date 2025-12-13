import { Breadcrumb } from "@/components/ui/breadcrumb"
import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { type ReactNode } from "react"
import { describe, expect, test, vitest } from "vitest"

// TransitionLinkコンポーネントのモック
vitest.mock("@/components/ui", () => ({
  TransitionLink: ({
    children,
    href,
    className,
    "aria-current": ariaCurrent,
  }: {
    children: ReactNode
    href: string
    className?: string
    "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false"
  }) => (
    <a href={href} className={className} aria-current={ariaCurrent}>
      {children}
    </a>
  ),
}))

describe("Breadcrumb", () => {
  test("単一のアイテムを正しく表示する", () => {
    const singleItem = {
      name: "About",
      link: "/about",
    }

    render(<Breadcrumb items={singleItem} />)

    // ホームアイテムが表示されることを確認
    expect(screen.getByText("トップ")).toBeVisible()
    // 指定したアイテムが表示されることを確認
    expect(screen.getByText("About")).toBeVisible()
    // セパレーターが表示されることを確認
    expect(screen.getByLabelText("パンくずリスト")).toBeVisible()
  })
})
