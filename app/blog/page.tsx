import BlogPagination from "@/app/blog/_containers/blog-pagination"
import ZennArticleItem from "@/app/blog/_containers/zenn-article-item"
import ZennAsideArticleItem from "@/app/blog/_containers/zenn-aside-article-item"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import { LowerSubTitle } from "@/components/ui/lower-sub-title"
import "@/styles/page/_blog.scss"
import type { ZennProps } from "@/types"
import { logger } from "@/utils/logger"
import { PATH } from "@/utils/path"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "To You Design - Blog",
}

/** 1ページあたりの記事数 */
const ARTICLES_PER_PAGE = 10

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

const Blog = async ({ searchParams }: BlogPageProps) => {
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(String(pageParam || "1"), 10) || 1)
  let zennArticles: ZennProps | null = null

  // zennの記事をfetch
  try {
    logger.info("Fetching Zenn articles")
    const response = await fetch("https://zenn.dev/api/articles?username=643866", {
      next: { revalidate: 60 * 60 * 24 * 30 }, // 30日間キャッシュ
    })
    zennArticles = await response.json()
    logger.info(
      {
        length: zennArticles?.articles.length,
        data: zennArticles?.articles[0],
      },
      "https://zenn.dev/api/articles?username=643866",
    )
  } catch (err) {
    logger.error(err, "Failed to fetch Zenn articles")
  }
  //zennの記事を新しい順にsort
  zennArticles?.articles.sort((a, b) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  })

  const articles = zennArticles?.articles ?? []
  const totalPages = Math.max(1, Math.ceil(articles.length / ARTICLES_PER_PAGE))
  const validPage = Math.min(currentPage, totalPages)
  const paginatedArticles = articles.slice(
    (validPage - 1) * ARTICLES_PER_PAGE,
    validPage * ARTICLES_PER_PAGE,
  )

  return (
    <main>
      <div className="max_width">
        <Breadcrumb items={[{ name: "Blog", link: PATH.BLOG }]} />
      </div>
      <LowerTitle title="Blog" enTitle="ブログ" />
      <div className="blog__layout max_width">
        <div>
          <LowerSubTitle title="Zenn" count={articles.length} />

          <div className="blog__List">
            {paginatedArticles.map((article) => (
              <ZennArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                published_at={article.published_at}
                article_type={article.article_type}
                emoji={article.emoji}
                path={article.path}
                liked_count={article.liked_count}
              />
            ))}
          </div>

          <BlogPagination currentPage={validPage} totalPages={totalPages} basePath={PATH.BLOG} />
        </div>
        <div className="blog__aside">
          <h2>おすすめ記事</h2>
          <div className="blog__aside__List">
            {articles.slice(0, 4).map((article) => (
              <ZennAsideArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                published_at={article.published_at}
                article_type={article.article_type}
                path={article.path}
                liked_count={article.liked_count}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blog
