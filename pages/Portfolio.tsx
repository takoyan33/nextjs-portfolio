import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import PortfolioItem from '../components/Components/ui/PortfolioItem'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'

export default function Portfolio() {
  //const url = 'https://localhost:3000/'
  const url = 'https://nextjs-portfolio-puce.vercel.app/'
  const [portfolios, setPortfolios] = useState(null)
  const fetchPortfolios = async () => {
    const response = await fetch(`${url}api/portfolio`)
    const data = await response.json()
    await setPortfolios(data)
  }

  useEffect(() => {
    fetchPortfolios()
  }, [])

  return (
    <>
      <Head>
        <title>To You Design - Portfolio</title>
      </Head>
      <Header />
      <div className=''>
        <div className='max_width'>
          <h2 className='main__title'>Portfolio</h2>
          <h3 className='main__subtitle'>ポートフォリオ</h3>
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

      <Footer />
    </>
  )
}
