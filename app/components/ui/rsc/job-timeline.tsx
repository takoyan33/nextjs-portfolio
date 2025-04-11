"use client"

import React, { useEffect, useState } from "react"
import { Timeline } from ".."
import { fetchJobs } from "../../../../hooks/fetch"
import jobs from "../../../../public/mock/api/jobs/index.json"
import type { Job } from "../../../../types"
import styles from "../css/timeline.module.scss"

/**
 * 職歴のタイムライン
 */
export const JobTimeline = () => {
	const [jobs, setJobs] = useState<Job[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchJobs()
			setJobs(data.data)
		}

		fetchData()
	}, [])
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
