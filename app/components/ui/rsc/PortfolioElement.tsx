"use client"
import React, { useEffect, useState } from "react"
import { fetchPortfolios } from "../../../../hooks/fetch"
import type { portfolioType } from "../../../../utils/type"
// import portfolios from "../../../../api/portfolios/index.json"
import PortfolioItem from "../PortfolioItem"

export const PortfolioElement = () => {
	const [portfolios, setPortfolios] = useState<portfolioType[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchPortfolios()
			setPortfolios(data)
		}

		fetchData()
	}, [])
	return (
		<div className="max_width">
			<h3 className="portfolio__headTitle">
				全ての制作物
				<span className="portfolio__headTitle-span">{portfolios.length}件</span>
			</h3>
			<div className="portfolioFlx padding">
				{Array.isArray(portfolios) &&
					portfolios.map((portfolio) => (
						<PortfolioItem
							key={portfolio.id}
							portfolio_id={portfolio.id}
							portfolio_name={portfolio.name}
							portfolio_date={portfolio.date}
							portfolio_tag={portfolio.tag}
							portfolio_topImg={portfolio.topImg}
						/>
					))}
			</div>
		</div>
	)
}
