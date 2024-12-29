import React, { useEffect, useState } from "react"
import { fetchJobs } from "../../../../hooks/fetch"
import type { job } from "../../../../utils/type"
import { Timeline } from "../Timeline"

export const JobTimelines = () => {
	const [jobs, setJobs] = useState<job[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchJobs()
			setJobs(data)
		}

		fetchData()
	}, [])
	return (
		<dl>
			{Array.isArray(jobs) &&
				jobs.map((job) => (
					<div key={job.id}>
						<Timeline title={job.title} date={job.date} body={job.body} />
					</div>
				))}
		</dl>
	)
}
