import { HomeBlogItem } from "@/app/(home)/_containers/home-blog/home-blog-item"
import styles from "@/app/(home)/_containers/home-blog/home-blog.module.scss"
import { fetchZennArticles } from "@/utils/zenn"

const HOME_BLOG_COUNT = 3

/**
 * トップページのブログプレビュー（ニュース風・縦並び）
 */
export const HomeBlog = async () => {
  const articles = await fetchZennArticles()

  if (articles.length === 0) {
    return null
  }

  const previewArticles = articles.slice(0, HOME_BLOG_COUNT)

  return (
    <div className={styles.homeBlog__list}>
      {previewArticles.map((article) => (
        <HomeBlogItem
          key={article.id}
          id={article.id}
          title={article.title}
          published_at={article.published_at}
          path={article.path}
        />
      ))}
    </div>
  )
}
