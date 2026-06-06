import BlogPagination from "@/app/blog/_containers/blog-pagination"
import ZennArticleItem from "@/app/blog/_containers/zenn-article-item"
import ZennAsideArticleItem from "@/app/blog/_containers/zenn-aside-article-item"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import { LowerSubTitle } from "@/components/ui/lower-sub-title"
import "@/styles/page/_blog.scss"
import { PATH } from "@/utils/path"
import { fetchZennArticles, pickRandomArticles } from "@/utils/zenn"
import type { Metadata } from "next"
import { unstable_noStore as noStore } from "next/cache"

export const metadata: Metadata = {
  title: "To You Design - Blog",
}

/** リロードごとにおすすめ記事をランダム表示する */
export const dynamic = "force-dynamic"

/** 1ページあたりの記事数 */
const ARTICLES_PER_PAGE = 9

/** おすすめ記事の表示件数 */
const RECOMMENDED_COUNT = 4

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>
}

const Blog = async ({ searchParams }: BlogPageProps) => {
  noStore()

  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(String(pageParam || "1"), 10) || 1)
  const articles = await fetchZennArticles({ cache: "no-store" })
  const recommendedArticles = pickRandomArticles(articles, RECOMMENDED_COUNT)

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
            {recommendedArticles.map((article) => (
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
