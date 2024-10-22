import Timeline from '../Timeline'
import React from 'react'
import jobs from '../../../../api/job/index.json'

export const Timelines = async () => {
  return (
    <dl>
      {Array.isArray(jobs) &&
        jobs.map((job, index) => (
          <Timeline key={index} title={job.title} date={job.date} body={job.body} />
        ))}
    </dl>
  )
}
