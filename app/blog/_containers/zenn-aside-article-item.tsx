import dayjs from "dayjs"
import Link from "next/link"

interface ZennArticleItemProps {
  zenn_id: number
  zenn_title: string
  zenn_published_at: Date
  zenn_article_type: string
  zenn_emoji: string
  zenn_path: string
}

/**
 * Zennの記事
 */
export default function ZennAsideArticleItem({
  zenn_id,
  zenn_title,
  zenn_published_at,
  zenn_path,
}: ZennArticleItemProps) {
  //日付のフォーマット
  const formatDate = (date: Date): string => dayjs(date).format("YYYY-MM-DD")
  return (
    <article className="zennAsideArticle" key={zenn_id}>
      <Link href={`https://zenn.dev${zenn_path}`} target="_blank">
        <div className="zennAsideArticle__content">
          <p className="zennAsideArticle__date">{formatDate(zenn_published_at)}</p>
          <h3 className="zennAsideArticle__title"> {zenn_title} </h3>
        </div>
      </Link>
    </article>
  )
}
