import styles from "@/components/ui/css/post-navigation.module.scss"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PostNavigationProps {
  next_title?: string
  next_article_id?: string
  prev_title?: string
  prev_article_id?: string
}

/**
 * ポストナビゲーション
 */
export const PostNavigation = ({
  next_title = "",
  next_article_id = "",
  prev_title = "",
  prev_article_id = "",
}: PostNavigationProps) => {
  return (
    <div className="max_width">
      <div className={styles.PostNavigation}>
        <div className={styles.PostNavigation__item}>
          {prev_title && (
            <Link href={`/portfolios/${prev_article_id}`}>
              <div className={styles.PostNavigation__container}>
                <span className={styles.PostNavigation__arrow}>
                  <ChevronLeft />
                </span>
                {prev_title}
              </div>
            </Link>
          )}
        </div>

        <div className={styles.PostNavigation__item}>
          {next_title && (
            <Link href={`/portfolios/${next_article_id}`}>
              <div className={styles.PostNavigation__container}>
                {next_title}
                <span className={styles.PostNavigation__arrow}>
                  <ChevronRight />
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
