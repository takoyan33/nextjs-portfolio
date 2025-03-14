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
	<ul className="SlideItem__container">
		{tags.map((tag) => (
			<li className="SlideItem__tag" key={tag}>
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
		<div>
			<TransitionLink href={`portfolios/${portfolio_id}`}>
				<div className="SlideItem__img">
					<Image
						src={portfolio_topImg}
						alt="ポートフォリオ画像"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="SlideItem__img-item"
					/>
				</div>
				<div className="SlideItem__content">
					<p className="SlideItem__date">{portfolio_date}</p>
					<h3 className="SlideItem__title">{parse(portfolio_name)}</h3>
					<PortfolioTags tags={portfolio_tag} />
				</div>
			</TransitionLink>
		</div>
	),
)

export default HomePortfolioSlideItem
