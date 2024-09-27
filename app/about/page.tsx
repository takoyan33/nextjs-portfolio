'use client'
import Timeline from '../../components/Components/ui/Timeline'
import React from 'react'
import { licenseProps, jobProps, historyProps } from '../../utils/type'
import { fetchHistory, fetchJob, fetchLicenses } from '../../hooks/fetch'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'

export default async function About() {
  const jobs = await fetchJob()
  const histories = await fetchHistory()
  const licenses = await fetchLicenses()
  console.log(jobs)
  return (
    <>
      <nav className='container'>
        <div style={{ textAlign: 'center', padding: 50 }}></div>

        {/*ここから学歴*/}
        <div className='padding'>
          <div className='max_width'>
            <BreadList name='About' link={PATH.ABOUT} />
            <h2 className='main__title' data-ja='過去の経歴'>
              About
            </h2>
            <dl>
              {Array.isArray(histories) &&
                histories.map((history, index) => (
                  <Timeline
                    key={index}
                    title={history.title}
                    date={history.date}
                    body={history.body}
                  />
                ))}
            </dl>
          </div>
        </div>

        {/*ここから職歴*/}
        <div className='padding'>
          <div className='max_width'>
            <div className='flx'>
              <div className='flx_el'>
                <h2 className='main__title' data-ja='過去の職歴'>
                  Job
                </h2>
              </div>
              <dl>
                {Array.isArray(jobs) &&
                  jobs.map((job, index) => (
                    <Timeline key={index} title={job.title} date={job.date} body={job.body} />
                  ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ここからLicense*/}
        <section className='license padding max_width'>
          <h2 className='main__title' data-ja='資格'>
            License
          </h2>
          <table className='license__table'>
            <tbody>
              <tr>
                <th className='license__table__th'>日付</th>
                <th className='license__table__th'>資格名</th>
              </tr>
              {Array.isArray(licenses) &&
                licenses.map((license, index) => (
                  <tr key={index} className='license__table__tr'>
                    <td className='license__table__td'>{license.date}</td>
                    <td className='license__table__td'>{license.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </nav>
    </>
  )
}
