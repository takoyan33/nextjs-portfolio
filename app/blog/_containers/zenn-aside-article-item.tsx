import { formatDate } from "@/hooks/date"
import Link from "next/link"

interface ZennArticleItemProps {
  id: number
  title: string
  published_at: Date
  article_type: string
  path: string
  liked_count: number
}

/**
 * Zennの記事
 */
export default function ZennAsideArticleItem({
  id,
  title,
  published_at,
  path,
  liked_count,
}: ZennArticleItemProps) {
  return (
    <article className="zennAsideArticle" key={id}>
      <Link href={`https://zenn.dev${path}`} target="_blank">
        <div className="zennAsideArticle__content">
          <p className="zennAsideArticle__date">{formatDate(published_at)}</p>
          <h3 className="zennAsideArticle__title"> {title} </h3>
          <p className="zennAsideArticle__date">♡ {liked_count}</p>
        </div>
      </Link>
    </article>
  )
}
