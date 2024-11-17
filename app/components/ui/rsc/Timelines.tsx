import React, { useEffect, useState } from "react"
import jobs from "../../../../api/jobs/index.json"
import { fetchJobs } from "../../../../hooks/fetch"
import Timeline from "../Timeline"

export const Timelines = () => {
	const [jobs, setJobs] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchJobs()
				setJobs(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])
	return (
		<dl>
			{Array.isArray(jobs) &&
				jobs.map((job, index) => (
					<Timeline
						key={index}
						title={job.title}
						date={job.date}
						body={job.body}
					/>
				))}
		</dl>
	)
}
