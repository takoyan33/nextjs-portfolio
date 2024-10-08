import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import { PortfolioElement } from '../../components/Components/ui/PortfolioElement'
import { Suspense } from 'react'

const Portfolio = async () => {
  return (
    <>
      <div>
        <div className='max_width'>
          <BreadList name='Portfolio' link={PATH.PORTFOLIO} />
        </div>
        <div className='lower_bg'>
          <div className='max_width'>
            <h2 className='lower__title' data-ja='制作物'>
              Portfolio
            </h2>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <PortfolioElement />
        </Suspense>
      </div>
    </>
  )
}

export default Portfolio
