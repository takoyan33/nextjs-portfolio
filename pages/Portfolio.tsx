import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import PortfolioItem from '../components/Components/ui/PortfolioItem'
import { PORTFOLIO_LIST } from '../components/Components/data/data'
import Head from 'next/head'
import React from 'react'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>To You Design - Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://kit.fontawesome.com/bb61864944.js' crossOrigin='anonymous'></script>
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <Header />
      <div className=''>
        <div className='max_width'>
          <h2 className='main__title'>Portfolio</h2>
          <h3 className='main__subtitle'>ポートフォリオ</h3>
          <div className='flx padding'>
            {/* {PORTFOLIO_LIST.map((portfolio, index) => (
              <PortfolioItem
                key={index}
                portfolio_name={portfolio.name}
                portfolio_date={portfolio.date}
                portfolio_tag={portfolio.tag}
                portfolio_img={portfolio.img}
                portfolio_url={portfolio.url}
                portfolio_color={portfolio.color}
                portfolio_time={portfolio.time}
                portfolio_about={portfolio.about}
                portfolio_skill={portfolio.skill}
                portfolio_github={portfolio.github}
              />
            ))} */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
