/**
 * AboutTabs のビジュアルリグレッションテスト
 */

import { AboutTabs } from "@/app/about/_containers/about-tabs"
import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import { page } from "vitest/browser"

// storeモック（browser環境でも必要）
import { vi } from "vitest"

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

test("AboutTabsの初期表示VRT", async () => {
  await render(
    <AboutTabs>
      <div>aaa</div>
      <div>bbb</div>
    </AboutTabs>,
  )

  // スクリーンショット比較
  await expect(page.getByTestId("about-tabs-root")).toMatchScreenshot("about-tabs-single")
})
