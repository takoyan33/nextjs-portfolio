import { formatDate } from "@/hooks/date"
import Link from "next/link"
import styles from "./home-blog.module.scss"

interface HomeBlogItemProps {
  id: number
  title: string
  published_at: Date
  path: string
}

/**
 * トップページ用のニュース風ブログ記事
 */
export const HomeBlogItem = ({ id, title, published_at, path }: HomeBlogItemProps) => {
  return (
    <article className={styles.homeBlog__item} key={id}>
      <Link href={`https://zenn.dev${path}`} target="_blank" className={styles.homeBlog__link}>
        <time className={styles.homeBlog__date} dateTime={new Date(published_at).toISOString()}>
          {formatDate(published_at)}
        </time>
        <h3 className={styles.homeBlog__title}>{title}</h3>
      </Link>
    </article>
  )
}
