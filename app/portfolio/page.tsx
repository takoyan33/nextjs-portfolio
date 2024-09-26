import PortfolioItem from '../../components/Components/ui/PortfolioItem'
import Head from 'next/head'
import React from 'react'
import { PortfolioProps } from '../../utils/type'
import { fetchPortfolios } from '../../hooks/fetch'
import Link from 'next/link'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'

export default async function Portfolio() {
  const portfolios = await fetchPortfolios()

  return (
    <>
      <Head>
        <title>To You Design - Portfolio</title>
      </Head>

      <div>
        <div className='max_width'>
          <BreadList name='Portfolio' link={PATH.PORTFOLIO} />
          <h2 className='main__title' data-ja='制作物'>
            Portfolio
          </h2>
          <div className='flx padding'>
            {Array.isArray(portfolios) &&
              portfolios.map((portfolio, index) => (
                <PortfolioItem
                  key={index}
                  portfolio_id={portfolio.id}
                  portfolio_name={portfolio.name}
                  portfolio_date={portfolio.date}
                  portfolio_tag={portfolio.tag}
                  portfolio_topImg={portfolio.topImg}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
