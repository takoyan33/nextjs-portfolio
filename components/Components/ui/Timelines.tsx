import Timeline from './Timeline'
import React from 'react'
// import { fetchJob } from '../../../hooks/fetch'
import jobs from '../../../api/job/index.json'

export const Timelines = async () => {
  //const jobs = await fetchJob()
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/job`)
  // const jobs = await response.json()
  return (
    <dl>
      {Array.isArray(jobs) &&
        jobs.map((job, index) => (
          <Timeline key={index} title={job.title} date={job.date} body={job.body} />
        ))}
    </dl>
  )
}
