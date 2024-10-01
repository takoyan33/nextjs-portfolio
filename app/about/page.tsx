'use client'
import Timeline from '../../components/Components/ui/Timeline'
import React from 'react'
import { licenseProps, jobProps, historyProps } from '../../utils/type'
import { fetchHistory, fetchJob, fetchLicenses } from '../../hooks/fetch'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import type { NextPage } from 'next'

const About = async () => {
  const jobs = await fetchJob()
  const histories = await fetchHistory()
  const licenses = await fetchLicenses()
  return (
    <>
      <div className='max_width'>
        <BreadList name='About' link={PATH.ABOUT} />
      </div>
      <div className='lower_bg'>
        <div className='max_width'>
          <h2 className='lower__title' data-ja='プロフィール'>
            About
          </h2>
        </div>
      </div>
      <div className='max_width'>
        <h3 className='portfolio__headTitle'>経歴</h3>

        <dl>
          {Array.isArray(histories) &&
            histories.map((history, index) => (
              <Timeline key={index} title={history.title} date={history.date} body={history.body} />
            ))}
        </dl>
      </div>

      {/*ここから職歴*/}
      <div className='max_width'>
        <h3 className='portfolio__headTitle'>職歴</h3>
        <dl>
          {Array.isArray(jobs) &&
            jobs.map((job, index) => (
              <Timeline key={index} title={job.title} date={job.date} body={job.body} />
            ))}
        </dl>
      </div>

      {/* ここからLicense*/}
      <section className='license max_width'>
        <h3 className='portfolio__headTitle'>資格</h3>
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
    </>
  )
}

export default About
