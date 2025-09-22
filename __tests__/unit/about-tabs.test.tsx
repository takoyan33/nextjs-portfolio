import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import { AboutTabs } from "../../app/about/_containers/about-tabs"

vi.mock("../../components/ui/rsc", () => ({
  CareerHistoryTimeline: () => <div>📄 Career History Timeline Mock</div>,
  JobTimeline: () => <div>💼 Job Timeline Mock</div>,
}))

// tabStoreのモック
vi.mock("../../stores/tabStore", () => {
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
    render(<AboutTabs careerContent={"aaa"} historyContent={"bbb"} />)

    // 経歴タブの見出しが表示される
    expect(screen.getByText("経歴")).toBeVisible()

    // タブの選択状態を確認
    const tabs = screen.getAllByRole("tab")
    expect(tabs[0]).toHaveAttribute("aria-selected", "true")
    expect(tabs[1]).toHaveAttribute("aria-selected", "false")
  })

  // test("職歴タブをクリックすると切り替わる", async () => {
  //   render(<AboutTabs careerContent={"aaa"} historyContent={"bbb"} />)

  //   // 職歴タブをクリック
  //   const tabs = screen.getAllByRole("tab")
  //   const careerTab = tabs[1]
  //   await userEvent.click(careerTab)

  //   // fallback の「読み込み中...」が表示されるのを確認
  //   await waitFor(() => {
  //     expect(screen.getByText("読み込み中...")).toBeVisible()
  //   })
  // })
})
