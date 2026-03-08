import Link from "next/link"

const BLOG_PAGINATION_CLASS = "blog-pagination"

interface BlogPaginationProps {
  /** 現在のページ番号（1始まり） */
  currentPage: number
  /** 総ページ数 */
  totalPages: number
  /** ベースパス（例: /blog） */
  basePath: string
}

/**
 * ブログ一覧のページネーション（サーバーコンポーネント）
 * 前へ/次へボタンとページ番号リンクを表示する
 */
export default function BlogPagination({ currentPage, totalPages, basePath }: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const getPageHref = (page: number) => {
    if (page <= 1) return basePath
    return `${basePath}?page=${page}`
  }

  return (
    <nav className={BLOG_PAGINATION_CLASS} aria-label="記事一覧のページネーション">
      <ul className={`${BLOG_PAGINATION_CLASS}__list`}>
        <li className={`${BLOG_PAGINATION_CLASS}__item`}>
          {currentPage <= 1 ? (
            <span className={`${BLOG_PAGINATION_CLASS}__link--disabled`}>前へ</span>
          ) : (
            <Link href={getPageHref(currentPage - 1)} className={`${BLOG_PAGINATION_CLASS}__link`}>
              前へ
            </Link>
          )}
        </li>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page} className={`${BLOG_PAGINATION_CLASS}__item`}>
            {page === currentPage ? (
              <span className={`${BLOG_PAGINATION_CLASS}__link--current`} aria-current="page">
                {page}
              </span>
            ) : (
              <Link href={getPageHref(page)} className={`${BLOG_PAGINATION_CLASS}__link`}>
                {page}
              </Link>
            )}
          </li>
        ))}

        <li className={`${BLOG_PAGINATION_CLASS}__item`}>
          {currentPage >= totalPages ? (
            <span className={`${BLOG_PAGINATION_CLASS}__link--disabled`}>次へ</span>
          ) : (
            <Link href={getPageHref(currentPage + 1)} className={`${BLOG_PAGINATION_CLASS}__link`}>
              次へ
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
