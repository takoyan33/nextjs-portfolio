import parse from "html-react-parser"
import Image from "next/image"
import React from "react"
import { TransitionLink } from "."

interface PortfolioItemProps {
	portfolio_id: number
	portfolio_name: string
	portfolio_date: string
	portfolio_tag: string[]
	portfolio_topImg: string
}

const PortfolioItem = React.memo(function PortfolioItem({
	portfolio_id,
	portfolio_name,
	portfolio_date,
	portfolio_tag,
	portfolio_topImg,
}: PortfolioItemProps) {
	return (
		<article className="portfolioFlx_el portfolioItem">
			<TransitionLink
				href={`portfolios/${portfolio_id}`}
				className="portfolioItem__link"
			>
				<div className="portfolioItem__img">
					<Image
						src={portfolio_topImg}
						alt="ポートフォリオ画像"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="portfolioItem__img-item"
					/>
				</div>
				<p className="portfolioItem__date">{portfolio_date}</p>
				<h3 className="portfolioItem__title">{parse(portfolio_name)}</h3>
				<ul className="portfolioItem__flex">
					{portfolio_tag.map((tag) => (
						<li className="portfolioItem__tag" key={tag}>
							#{tag}
						</li>
					))}
				</ul>
			</TransitionLink>
		</article>
	)
})

export default PortfolioItem
