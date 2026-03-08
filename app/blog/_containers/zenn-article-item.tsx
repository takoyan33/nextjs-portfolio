import { formatDate } from "@/hooks/date"
import Link from "next/link"

interface ZennArticleItemProps {
  id: number
  title: string
  published_at: Date
  article_type: string
  emoji: string
  path: string
  liked_count: number
}

/**
 * Zennの記事
 */
export default function ZennArticleItem({
  id,
  title,
  published_at,
  article_type,
  emoji,
  path,
  liked_count,
}: ZennArticleItemProps) {
  return (
    <article className="zennArticle" key={id}>
      <Link href={`https://zenn.dev${path}`} target="_blank">
        <div className="zennArticle__emoji">{emoji}</div>
        <div className="zennArticle__content">
          <p className="zennArticle__date">{formatDate(published_at)}</p>
          <h3 className="zennArticle__title"> {title} </h3>
          <ul className="zennArticle__container">
            <li className="zennArticle__tag">{article_type}</li>
            <p>♡{liked_count}</p>
          </ul>
        </div>
      </Link>
    </article>
  )
}
