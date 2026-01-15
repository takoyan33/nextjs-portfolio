"use client"
import { useTabStore } from "@/stores/tabStore"
import React from "react"

type AboutTabsProps = {
  children: React.ReactNode
}
/**
 * Aboutのタブ
 */
export const AboutTabs = ({ children }: AboutTabsProps) => {
  const { activeTab, changeActiveTab } = useTabStore()
  const [historyContent, careerContent] = React.Children.toArray(children)

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
            aria-controls="panelA"
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
          <div aria-labelledby="tabA" role="tabpanel">
            {historyContent}
          </div>
        )}
        {activeTab === "career" && (
          <div aria-labelledby="tabB" role="tabpanel">
            {careerContent}
          </div>
        )}
      </div>
    </div>
  )
}
