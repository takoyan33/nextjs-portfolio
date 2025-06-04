import React from "react"
import styles from "../css/timeline.module.scss"
import { Timeline } from "../timeline"

/**
 * 経歴のタイムライン
 */
export const CareerHistoryTimeline = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/jobs`, {
		cache: "no-store",
	})
	const { data: histories } = await response.json()

	return (
		<div className={styles.timeline}>
			<dl>
				{Array.isArray(histories) &&
					histories.map((history) => (
						<Timeline
							key={history.id}
							title={history.title}
							date={history.date}
							body={history.body}
						/>
					))}
			</dl>
		</div>
	)
}
