import Timeline from '../../components/Components/ui/Timeline'
import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import { Timelines } from '../../components/Components/ui/Timelines'
import { HistoryTimelines } from '../../components/Components/ui/HistoryTimelines'
import { License } from '../../components/Components/ui/License'
import { Suspense } from 'react'

const About = () => {
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

        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <HistoryTimelines />
        </Suspense>
      </div>

      {/*ここから職歴*/}
      <div className='max_width'>
        <h3 className='portfolio__headTitle'>職歴</h3>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <Timelines />
        </Suspense>
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
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <License />
            </Suspense>
          </tbody>
        </table>
      </section>
    </>
  )
}

export default About
