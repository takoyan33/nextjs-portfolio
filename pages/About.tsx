import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import Timeline from '../components/Components/ui/Timeline'
import Tabs from '../components/Components/ui/Tabs'
import { JOB_LIST, LICENSE_LIST } from '../components/Components/data/data'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'

export default function History() {
  const [jobs, setJobs] = useState(null)
  const [histories, setHistories] = useState(null)
  const [licenses, setLicenses] = useState(null)
  const url = 'https://nextjs-portfolio-puce.vercel.app/'
  const fetchHistory = async () => {
    const response = await fetch(`${url}api/history`)
    const data = await response.json()
    await setHistories(data)
  }

  const fetchJob = async () => {
    const response = await fetch(`${url}api/job`)
    const data = await response.json()
    await setJobs(data)
  }

  const fetchLicenses = async () => {
    const response = await fetch(`${url}api/license`)
    const data = await response.json()
    await setLicenses(data)
  }

  useEffect(() => {
    fetchHistory()
    fetchJob()
    fetchLicenses()
  }, [])
  return (
    <>
      <Head>
        <title>To You Design - About</title>
      </Head>
      <Header />
      <nav className='container'>
        <div style={{ textAlign: 'center', padding: 50 }}></div>

        {/*ここから学歴*/}
        <div className='padding'>
          <div className='max_width'>
            <div className='flx'>
              <div className='flx_el'>
                <h2 className='main__title' data-ja='過去の経歴'>
                  History
                </h2>
                {/* <Tabs tabs={['Tab1', 'Tab2', 'Tab3']} /> */}
              </div>
              <dl>
                {histories &&
                  histories.history.map((history, index) => (
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
                {jobs &&
                  jobs.job.map((job, index) => (
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
              {licenses &&
                licenses.license.map((license, index) => (
                  <tr key={index} className='license__table__tr'>
                    <td className='license__table__td'>{license.date}</td>
                    <td className='license__table__td'>{license.title}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      </nav>
      <Footer />
    </>
  )
}
