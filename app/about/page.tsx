"use client"
import { useState } from "react"
import { PATH } from "../../utils/path"
import { BreadList, LowerTitle } from "../components/ui/"
import { HistoryTimelines, JobTimelines, License } from "../components/ui/rsc/"

const About = () => {
	const [activeTab, setActiveTab] = useState<"history" | "career">("history")

	return (
		<main className="padding">
			<title>To You Design - About</title>
			<meta name="description" content="Generated by Next.js" />
			<div className="max_width">
				<BreadList name="About" link={PATH.ABOUT} />
			</div>
			<LowerTitle title="About" enTitle="プロフィール" />

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

			{/* ここからLicense*/}
			<section className="license max_width">
				<h3 className="portfolio__headTitle">資格</h3>
				<table className="license__table">
					<tbody>
						<tr>
							<th className="license__table-th">日付</th>
							<th className="license__table-th">資格名</th>
						</tr>
						<License />
					</tbody>
				</table>
			</section>
		</main>
	)
}

export default About
