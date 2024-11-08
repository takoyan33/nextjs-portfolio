import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type PortfolioItemProps = {
	portfolio_id: number
	portfolio_name: string
	portfolio_date: string
	portfolio_tag: string[]
	portfolio_topImg: string
}

export default function PortfolioItem({
	portfolio_id,
	portfolio_name,
	portfolio_date,
	portfolio_tag,
	portfolio_topImg,
}: PortfolioItemProps) {
	return (
		<div className="flx_el portfolio_flx_el">
			<Link href={`portfolios/${portfolio_id}`}>
				<div className="portfolio__img">
					<Image
						src={portfolio_topImg}
						alt="ポートフォリオ画像"
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="portfolio__img__item"
					/>
				</div>
				<p className="portfolio__date">{portfolio_date}</p>
				<h2 className="portfolio__title">{parse(portfolio_name)}</h2>
				<ul className="portfolio__flex">
					{portfolio_tag.map((tag, index) => (
						<li className="portfolio__tag" key={index}>
							#{tag}
						</li>
					))}
				</ul>
			</Link>
		</div>
	)
}
