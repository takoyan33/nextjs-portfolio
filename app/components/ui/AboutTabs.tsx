"use client"

import { useState } from "react"
import React from "react"
import { HistoryTimelines, JobTimelines } from "./rsc/"

export const AboutTabs = () => {
	const [activeTab, setActiveTab] = useState<"history" | "career">("history")

	return (
		<div>
			{/* タブボタン */}
			<div className="tab-buttons">
				<button
					className={activeTab === "history" ? "active" : ""}
					onClick={() => setActiveTab("history")}
					type="button"
				>
					経歴
				</button>
				<button
					className={activeTab === "career" ? "active" : ""}
					onClick={() => setActiveTab("career")}
					type="button"
				>
					職歴
				</button>
			</div>

			{/* タブコンテンツ */}
			<div className="tab-content max_width">
				{activeTab === "history" && (
					<>
						<h3 className="portfolio__headTitle">経歴</h3>
						<HistoryTimelines />
					</>
				)}
				{activeTab === "career" && (
					<>
						<h3 className="portfolio__headTitle">職歴</h3>
						<JobTimelines />
					</>
				)}
			</div>
		</div>
	)
}
