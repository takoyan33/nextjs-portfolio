import parse from "html-react-parser"
import Image from "next/image"
import React from "react"
import { TransitionLink } from "../../../components/ui"

interface PortfolioItemProps {
	portfolio_id: number
	portfolio_name: string
	portfolio_date: string
	portfolio_tag: string[]
	portfolio_topImg: string
}

const PortfolioTags: React.FC<{ tags: string[] }> = ({ tags }) => (
	<ul className="portfolio__flex">
		{tags.map((tag) => (
			<li className="portfolio__tag" key={tag}>
				#{tag}
			</li>
		))}
	</ul>
)

const HomePortfolioSlideItem: React.FC<PortfolioItemProps> = React.memo(
	({
		portfolio_id,
		portfolio_name,
		portfolio_date,
		portfolio_tag,
		portfolio_topImg,
	}) => (
		<div className="flx_el portfolio_flx_el">
			<TransitionLink href={`portfolios/${portfolio_id}`}>
				<div className="portfolio__img">
					<Image
						src={portfolio_topImg}
						alt="ポートフォリオ画像"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="portfolio__img-item"
					/>
				</div>
				<p className="portfolio__date">{portfolio_date}</p>
				<h3 className="portfolio__title">{parse(portfolio_name)}</h3>
				<PortfolioTags tags={portfolio_tag} />
			</TransitionLink>
		</div>
	),
)

export default HomePortfolioSlideItem
