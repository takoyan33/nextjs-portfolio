import { AboutTabs } from "@/app/about/_containers/about-tabs"
import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

// tabStoreのモック
vi.mock("@/stores/tabStore", () => {
  let activeTab = "history"
  return {
    useTabStore: () => ({
      activeTab,
      changeActiveTab: (tab: string) => {
        activeTab = tab
      },
    }),
  }
})

describe("AboutTabs", () => {
  test("初期表示は経歴タブが選択されている", async () => {
    render(
      <AboutTabs>
        <div>aaa</div>
        <div>bbb</div>
      </AboutTabs>,
    )

    // 経歴タブの見出しが表示される
    expect(screen.getByText("経歴")).toBeVisible()

    // タブの選択状態を確認
    const tabs = screen.getAllByRole("tab")
    expect(tabs[0]).toHaveAttribute("aria-selected", "true")
    expect(tabs[1]).toHaveAttribute("aria-selected", "false")
  })
})
