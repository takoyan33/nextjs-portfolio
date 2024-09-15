import Header from '../components/Components/ui/Header'
import Footer from '../components/Components/ui/Footer'
import PortfolioItem from '../components/Components/ui/PortfolioItem'
import ZennArticleItem from '../components/Components/ui/ZennArticleItem'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { API_URL } from '../utils/data'

export default function Blog() {
  const [zennArticles, setZennArticles] = useState(null)
  const [qiitaArticles, setQiitaArticles] = useState(null)
  // zenn
  const fetchZenn = async () => {
    const response = await fetch('https://zenn.dev/api/articles?username=643866')
    console.log(response)
    const data = await response.json()
    await setZennArticles(data)
  }

  // qiita
  const fetchQiita = async () => {
    const response = await fetch(``)
    const data = await response.json()
    await setQiitaArticles(data)
  }

  useEffect(() => {
    fetchZenn()
    fetchQiita()
  }, [])

  return (
    <>
      <Head>
        <title>To You Design - Blog</title>
      </Head>
      <Header />
      <div className=''>
        <div className='max_width'>
          <h2 className='main__title' data-ja='ブログ'>
            Blog
          </h2>
          <h2>Zenn</h2>
          <div className='flx padding'>
            {zennArticles &&
              zennArticles.articles.map((articles, index) => (
                <ZennArticleItem
                  key={index}
                  portfolio_id={articles.id}
                  portfolio_name={articles.name}
                  portfolio_date={articles.date}
                  portfolio_tag={articles.tag}
                  portfolio_topImg={articles.topImg}
                />
              ))}
          </div>
          <h2>Qiita</h2>
          <div className='flx padding'>
            {qiitaArticles &&
              qiitaArticles.portfolio.map((portfolio, index) => (
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
