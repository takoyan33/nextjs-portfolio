import Header from '../../components/Components/ui/Header'
import Footer from '../../components/Components/ui/Footer'
import PortfolioItem from '../../components/Components/ui/PortfolioItem'
import ZennArticleItem from '../../components/Components/ui/ZennArticleItem'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { API_URL } from '../../utils/data'

// zenn
export async function getServerSideProps() {
  const res = await fetch('https://zenn.dev/api/articles?username=643866')
  const zennArticles = await res.json()

  return {
    props: {
      zennArticles,
    },
  }
}

export default function Blog({ zennArticles }) {
  const [qiitaArticles, setQiitaArticles] = useState(null)

  // qiita
  const fetchQiita = async () => {
    const response = await fetch(``)
    const data = await response.json()
    await setQiitaArticles(data)
  }

  useEffect(() => {
    //fetchZenn()
    //fetchQiita()
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
                  zenn_id={articles.id}
                  zenn_title={articles.title}
                  zenn_published_at={articles.published_at}
                  zenn_article_type={articles.article_type}
                  zenn_emoji={articles.emoji}
                  zenn_path={articles.path}
                />
              ))}
          </div>
          {/* <h2>Qiita</h2>
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
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  )
}
