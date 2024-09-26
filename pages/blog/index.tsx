import ZennArticleItem from '../../components/Components/ui/ZennArticleItem'
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Components/ui/Header'
import Footer from '../../components/Components/ui/Footer'
import Link from 'next/link'
import { PATH } from '../../utils/path'

export async function getServerSideProps() {
  try {
    const response = await fetch('https://zenn.dev/api/articles?username=643866')
    if (!response.ok) {
      throw new Error(`Failed to fetch Zenn articles: ${response.status}`)
    }
    const zennArticles = await response.json()

    // Optional: Fetch Qiita articles here (if applicable)

    return {
      props: {
        zennArticles,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch articles',
      },
    }
  }
}

export default function Blog({ zennArticles, error }) {
  if (error) {
    return <div>Error fetching articles: {error}</div>
  }

  return (
    <>
      <Head>
        <title>To You Design - Blog</title>
      </Head>
      <Header />
      <div>
        <div className='max_width'>
          <p className='bread__title'>
            <Link href='/'>トップ</Link> ＞ <Link href={PATH.BLOG}>ブログ</Link>
          </p>
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
        </div>
        <Footer />
      </div>
    </>
  )
}
