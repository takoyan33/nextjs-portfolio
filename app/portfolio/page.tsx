'use client'
import PortfolioItem from '../../components/Components/ui/PortfolioItem'
import React from 'react'
import { PortfolioProps } from '../../utils/type'
import { fetchPortfolios } from '../../hooks/fetch'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import type { NextPage } from 'next'

const Portfolio = async () => {
  const portfolios = await fetchPortfolios()

  return (
    <>
      <div>
        <div className=''>
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
          <div className='max_width'>
            <h3 className='portfolio__headTitle'>
              全ての制作物<span> {portfolios.length}件</span>
            </h3>
            <div className='portfolioFlx'>
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
      </div>
    </>
  )
}

export default Portfolio
