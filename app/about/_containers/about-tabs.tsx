"use client"
import { Suspense } from "react"
import { useTabStore } from "../../stores/tabStore"

type AboutTabsProps = {
  historyContent: React.ReactNode
  careerContent: React.ReactNode
}
/**
 * Aboutのタブ
 */
export const AboutTabs = ({ historyContent, careerContent }: AboutTabsProps) => {
  const { activeTab, changeActiveTab } = useTabStore()

  return (
    <div>
      {/* タブボタン */}
      <div className="tab-1" role="tablist">
        <label className={activeTab === "history" ? "active" : ""}>
          <input
            type="radio"
            name="tab-1"
            role="tab"
            id="tabA"
            aria-controls="panelB"
            aria-selected={activeTab === "history"}
            onClick={() => changeActiveTab("history")}
          />
          経歴
        </label>
        <label className={activeTab === "career" ? "active" : ""}>
          <input
            type="radio"
            name="tab-1"
            role="tab"
            id="tabB"
            aria-controls="panelB"
            aria-selected={activeTab === "career"}
            onClick={() => changeActiveTab("career")}
          />
          職歴
        </label>
      </div>

      {/* タブコンテンツ */}
      <div className="tab-content max_width">
        {activeTab === "history" && (
          <div aria-labelledby="tabA">
            <Suspense fallback={<div>読み込み中...</div>}>{historyContent}</Suspense>
          </div>
        )}
        {activeTab === "career" && (
          <div aria-labelledby="tabB">
            <Suspense fallback={<div>読み込み中...</div>}>{careerContent}</Suspense>
          </div>
        )}
      </div>
    </div>
  )
}
