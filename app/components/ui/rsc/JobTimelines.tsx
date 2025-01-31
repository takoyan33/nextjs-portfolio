// "use client"

import jobs from "public/mock/api/jobs/index.json"
import React, { useEffect, useState } from "react"
import { Timeline } from "../"
import { fetchJobs } from "../../../../hooks/fetch"
import type { job } from "../../../../utils/type"

export const JobTimelines = () => {
	// const [jobs, setJobs] = useState<job[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchJobs()
	// 		setJobs(data.data)
	// 	}

	// 	fetchData()
	// }, [])
	return (
		<div className="timeline">
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
