import { TransitionLink } from "@/components/ui/transition-link"
import { formatDate } from "@/hooks/date"
import parse from "html-react-parser"
import Image from "next/image"
import React from "react"

interface PortfolioItemProps {
  portfolio_id: number
  portfolio_name: string
  portfolio_date: string
  portfolio_tag: string[]
  portfolio_topImg: string
}

/**
 * ポートフォリオの記事カード
 * @param portfolio_id - ポートフォリオのID
 * @param portfolio_name - ポートフォリオのタイトル
 * @param portfolio_date - 作成日
 * @param portfolio_tag - タグ一覧
 * @param portfolio_topImg - サムネイル画像のパス
 */
const PortfolioItem = React.memo(function PortfolioItem({
  portfolio_id,
  portfolio_name,
  portfolio_date,
  portfolio_tag,
  portfolio_topImg,
}: PortfolioItemProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/dummy-image.jpg"
  }

  return (
    <article className="portfolio__List-item portfolioItem">
      <TransitionLink
        href={`portfolios/${portfolio_id}`}
        className="portfolioItem__link"
        aria-label={`${portfolio_name}の詳細を見る`}
      >
        <div className="portfolioItem__img">
          <Image
            src={portfolio_topImg}
            alt={`${portfolio_name}のサムネイル画像`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="portfolioItem__img-item"
            quality={40}
            onError={handleImageError}
            priority={false}
          />
        </div>
        <div className="portfolioItem__content">
          <time className="portfolioItem__date" dateTime={portfolio_date}>
            {formatDate(portfolio_date)}
          </time>
          <h3 className="portfolioItem__title">{parse(portfolio_name)}</h3>
          <ul className="portfolioItem__container">
            {portfolio_tag.map((tag) => (
              <li className="portfolioItem__tag" key={tag}>
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </TransitionLink>
    </article>
  )
})

PortfolioItem.displayName = "PortfolioItem"

export default PortfolioItem
