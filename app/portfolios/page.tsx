import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import { PortfolioElement } from '../../components/Components/ui/rsc/PortfolioElement'
import { LowerTitle } from '../../components/Components/ui/LowerTitle'

export const metadata = {
  title: 'To You Design - Portfolio',
  description: 'Generated by Next.js',
}

const Portfolio = async () => {
  return (
    <main>
      <div className='max_width'>
        <BreadList name='Portfolio' link={PATH.PORTFOLIO} />
      </div>
      <LowerTitle title='Portfolio' enTitle='制作物' />

      <PortfolioElement />
    </main>
  )
}

export default Portfolio
