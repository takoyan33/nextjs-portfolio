import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"

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
		<div className="portfolioFlx_el portfolioItem">
			<Link href={`portfolios/${portfolio_id}`} className="portfolioItem__link">
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
				<div className="portfolioItem__flex">
					{portfolio_tag.map((tag, index) => (
						<li className="portfolioItem__tag" key={index}>
							#{tag}
						</li>
					))}
				</div>
			</Link>
		</div>
	)
}
