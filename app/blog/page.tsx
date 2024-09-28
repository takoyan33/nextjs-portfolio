import ZennArticleItem from '../../components/Components/ui/ZennArticleItem'
import Link from 'next/link'
import { PATH } from '../../utils/path'
import React from 'react'
import BreadList from '../../components/Components/ui/BreadList'

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
    <div className='max_width'>
      <BreadList name='Blog' link={PATH.BLOG} />
      <h2 className='main__title' data-ja='ブログ'>
        Blog
      </h2>
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
  )
}

export default Blog
