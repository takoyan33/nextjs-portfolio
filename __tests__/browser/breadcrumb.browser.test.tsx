/**
 * Breadcrumb コンポーネントのビジュアルリグレッションテスト（VRT）。
 *
 * 実行例:
 *   npx vitest --project=browser __tests__/browser/breadcrumb.browser.test.tsx
 */
import type { ReactNode } from "react"
import { expect, test, vi } from "vitest"
import { page } from "vitest/browser"
import { render } from "vitest-browser-react"

// Next.js の App Router コンテキストに依存する TransitionLink をモックして、
// 単純な <a> 要素として振る舞わせる
vi.mock("@/components/ui/transition-link", () => ({
  TransitionLink: ({
    children,
    href,
    className,
    "aria-current": ariaCurrent,
  }: {
    children: ReactNode
    href: string
    className?: string
    "aria-current"?:
      | "page"
      | "step"
      | "location"
      | "date"
      | "time"
      | "true"
      | "false"
  }) => (
    <a href={href} className={className} aria-current={ariaCurrent}>
      {children}
    </a>
  ),
}))

import { Breadcrumb } from "@/components/ui/breadcrumb"

test("Breadcrumb - 単一アイテムの見た目が崩れていないこと", async () => {
  render(<Breadcrumb items={{ name: "About", link: "/about" }} />)

  await expect(page.getByTestId("breadcrumb-root")).toMatchScreenshot(
    "breadcrumb-single",
  )
})

test("Breadcrumb - 複数アイテムの見た目が崩れていないこと", async () => {
  render(
    <Breadcrumb
      items={[
        { name: "Portfolios", link: "/portfolios" },
        { name: "Detail", link: "/portfolios/1" },
      ]}
    />,
  )

  await expect(page.getByTestId("breadcrumb-root")).toMatchScreenshot(
    "breadcrumb-multiple",
  )
})

