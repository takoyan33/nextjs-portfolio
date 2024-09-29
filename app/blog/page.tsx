import ZennArticleItem from '../../components/Components/ui/ZennArticleItem'
import Link from 'next/link'
import { PATH } from '../../utils/path'
import React from 'react'
import BreadList from '../../components/Components/ui/BreadList'

export const metadata = {
  title: 'To You Design - Blog',
  description: 'Generated by Next.js',
}

const Blog = async () => {
  let zennArticles: any
  let error = ''

  try {
    const response = await fetch('https://zenn.dev/api/articles?username=643866')
    if (!response.ok) {
      throw new Error(`Failed to fetch Zenn articles: ${response.status}`)
    }
    zennArticles = await response.json()
  } catch (err) {
    error = 'Failed to fetch articles'
  }

  if (error) {
    return <div>Error fetching articles: {error}</div>
  }

  return (
    <div className=''>
      <div className='max_width'>
        <BreadList name='Blog' link={PATH.BLOG} />
      </div>
      <div className='lower_bg'>
        <div className='max_width'>
          <h2 className='lower__title' data-ja='ブログ'>
            Blog
          </h2>
        </div>
      </div>
      <div className='max_width'>
        <h2>Zenn</h2>
        <div className='flx padding'>
          {zennArticles?.articles.map((article, index) => (
            <ZennArticleItem
              key={index}
              zenn_id={article.id}
              zenn_title={article.title}
              zenn_published_at={article.published_at}
              zenn_article_type={article.article_type}
              zenn_emoji={article.emoji}
              zenn_path={article.path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
