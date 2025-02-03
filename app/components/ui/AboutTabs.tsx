"use client"

import { useState } from "react"
import React from "react"
import { HistoryTimelines, JobTimelines } from "./rsc/"

export const AboutTabs = () => {
	const [activeTab, setActiveTab] = useState<"history" | "career">("history")

	return (
		<div>
			{/* タブボタン */}
			{/* <div className="tab-buttons" role="tablist">
				<button
					role="tab"
					className={activeTab === "history" ? "active" : ""}
					onClick={() => setActiveTab("history")}
					type="button"
					aria-controls="panelA"
					aria-selected="true"
				>
					<input type="radio" name="tab-1" checked />
					経歴
				</button>
				<button
					role="tab"
					className={activeTab === "career" ? "active" : ""}
					onClick={() => setActiveTab("career")}
					type="button"
					aria-controls="panelB"
					aria-selected="true"
				>
					職歴
				</button>
			</div> */}

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
						<h3 className="portfolio__headTitle">経歴</h3>
						<HistoryTimelines />
					</div>
				)}
				{activeTab === "career" && (
					<div aria-labelledby="tabB">
						<h3 className="portfolio__headTitle">職歴</h3>
						<JobTimelines />
					</div>
				)}
			</div>
		</div>
	)
}
