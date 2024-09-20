'use client'
import PortfolioItem from '../../components/Components/ui/PortfolioItem'
import Head from 'next/head'
import React from 'react'
import { PortfolioProps } from '../../utils/type'

const fetchPortfolios = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
  const data = await response.json()
  return data
}

export default async function Portfolio() {
  const portfolios = await fetchPortfolios()

  return (
    <>
      <Head>
        <title>To You Design - Portfolio</title>
      </Head>

      <div>
        <div className='max_width'>
          <h2 className='main__title' data-ja='制作物'>
            Portfolio
          </h2>
          <div className='flx padding'>
            {portfolios &&
              portfolios.portfolio.map((portfolio, index) => (
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

// // サーバーサイドでデータを取得する
// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
//   const portfolios = await res.json()

//   return {
//     props: {
//       portfolios,
//     },
//     revalidate: 60, // 60秒ごとに再生成
//   }
// }
