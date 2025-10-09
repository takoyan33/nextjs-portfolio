import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { type ReactNode } from "react"
import { describe, expect, test, vitest } from "vitest"
import { Breadcrumb } from "../../app/_components/ui/breadcrumb"

// TransitionLinkコンポーネントのモック
vitest.mock("../../app/_components/ui", () => ({
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

// next/navigationのモック
vitest.mock("next/navigation", () => ({
  useRouter: () => ({
    query: { id: "test-post-id" },
    push: vitest.fn(),
  }),
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

  // test("複数のアイテムを正しく表示する", () => {
  //   const items = [
  //     { name: "Portfolio", link: "/portfolio" },
  //     { name: "Project A", link: "/portfolio/project-a" },
  //   ]

  //   render(<Breadcrumb items={items} />)

  //   // すべてのアイテムが表示されることを確認
  //   expect(screen.getByText("トップ")).toBeInTheDocument()
  //   expect(screen.getByText("Portfolio")).toBeInTheDocument()
  //   expect(screen.getByText("Project A")).toBeInTheDocument()
  // })

  // test("リンクなしのアイテムを正しく表示する", () => {
  //   const items = [
  //     { name: "Portfolio", link: "/portfolio" },
  //     { name: "Project A" }, // リンクなし
  //   ]

  //   render(<Breadcrumb items={items} />)

  //   // リンクなしのアイテムがspan要素として表示されることを確認
  //   const currentPageItem = screen.getByText("Project A")
  //   expect(currentPageItem).toBeInTheDocument()
  //   expect(currentPageItem.closest("span")).toHaveAttribute("aria-current", "page")
  // })

  // test("配列形式のアイテムを正しく処理する", () => {
  //   const itemsArray = [
  //     { name: "Blog", link: "/blog" },
  //     { name: "Article", link: "/blog/article" },
  //     { name: "Current Page" },
  //   ]

  //   render(<Breadcrumb items={itemsArray} />)

  //   // すべてのアイテムが表示されることを確認
  //   expect(screen.getByText("トップ")).toBeInTheDocument()
  //   expect(screen.getByText("Blog")).toBeInTheDocument()
  //   expect(screen.getByText("Article")).toBeInTheDocument()
  //   expect(screen.getByText("Current Page")).toBeInTheDocument()
  // })

  // test("アクセシビリティ属性が正しく設定される", () => {
  //   const items = [{ name: "Portfolio", link: "/portfolio" }, { name: "Current Page" }]

  //   render(<Breadcrumb items={items} />)

  //   // nav要素にaria-labelが設定されていることを確認
  //   const nav = screen.getByLabelText("パンくずリスト")
  //   expect(nav).toBeInTheDocument()

  //   // 最後のアイテムにaria-current="page"が設定されていることを確認
  //   const currentPageItem = screen.getByText("Current Page")
  //   expect(currentPageItem.closest("span")).toHaveAttribute("aria-current", "page")
  // })
})
