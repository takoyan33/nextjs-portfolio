import styles from "@/components/ui/css/breadcrumb.module.scss"
import { TransitionLink } from "@/components/ui/transition-link"
import { PATH } from "@/utils/path"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  name: string
  link?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem | BreadcrumbItem[]
}

/**
 * パンくずリストコンポーネント
 * @param items - パンくずリストの項目（単一または配列）
 */
export const Breadcrumb = ({ items }: BreadcrumbProps): JSX.Element => {
  const homeItem: BreadcrumbItem = {
    name: "トップ",
    link: PATH.INDEX,
  }

  // itemsが配列でない場合は配列に変換
  const itemsArray = Array.isArray(items) ? items : [items]
  const allItems = [homeItem, ...itemsArray]

  return (
    <nav
      aria-label="パンくずリスト"
      className={styles.breadcrumb}
      data-testid="breadcrumb-root"
    >
      <ol className={styles.breadcrumb__list}>
        {allItems.map((item, index) => (
          <li key={item.name} className={styles.breadcrumb__item}>
            {item.link ? (
              <TransitionLink
                href={item.link}
                className={styles.breadcrumb__link}
                aria-current={index === allItems.length - 1 ? "page" : undefined}
              >
                {item.name}
              </TransitionLink>
            ) : (
              <span className={styles.breadcrumb__text} aria-current="page">
                {item.name}
              </span>
            )}
            {index < allItems.length - 1 && (
              <span className={styles.breadcrumb__separator} aria-hidden="true">
                <ChevronRight size={16} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = "Breadcrumb"
