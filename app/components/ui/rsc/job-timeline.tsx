import React from "react"
import { Timeline } from ".."
import styles from "../css/timeline.module.scss"

/**
 * 職歴のタイムライン
 */
export const JobTimeline = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}api/histories`,
		{
			cache: "no-store",
		},
	)
	const { data: jobs } = await response.json()

	return (
		<div className={styles.timeline}>
			<dl>
				{Array.isArray(jobs) &&
					jobs.map((job) => (
						<Timeline
							key={job.id}
							title={job.title}
							date={job.date}
							body={job.body}
						/>
					))}
			</dl>
		</div>
	)
}
