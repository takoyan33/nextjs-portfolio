"use client"

import { Suspense, useState } from "react"
import React from "react"
import { CareerHistoryTimeline, JobTimeline } from "../../components/ui/rsc"

/**
 * Aboutのタブ
 */
export const AboutTabs = () => {
	const [activeTab, setActiveTab] = useState<"history" | "career">("history")

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
						onClick={() => setActiveTab("history")}
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
						onClick={() => setActiveTab("career")}
					/>
					職歴
				</label>
			</div>

			{/* タブコンテンツ */}
			<div className="tab-content max_width">
				{activeTab === "history" && (
					<div aria-labelledby="tabA">
						<h2 className="lower__subTitle">経歴</h2>
						<Suspense fallback={<div>読み込み中...</div>}>
							{CareerHistoryTimeline()}
						</Suspense>
					</div>
				)}
				{activeTab === "career" && (
					<div aria-labelledby="tabB">
						<h2 className="lower__subTitle">職歴</h2>
						<Suspense fallback={<div>読み込み中...</div>}>
							{JobTimeline()}
						</Suspense>
					</div>
				)}
			</div>
		</div>
	)
}
