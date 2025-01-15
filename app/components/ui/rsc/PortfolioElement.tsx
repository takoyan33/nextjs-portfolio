"use client"

import React, { useEffect, useState } from "react"
import { fetchPortfoliosFront } from "../../../../hooks/fetch"
import portfoliosData from "../../../../public/mock/api/portfolios/index.json"
import type { portfolioType } from "../../../../utils/type"
import PortfolioItem from "../PortfolioItem"

export const PortfolioElement = async () => {
	// const portfolios = await fetchPortfolios()

	const [portfolios, setPortfolios] = useState<portfolioType[]>()

	useEffect(() => {
		// const fetchData = async () => {
		// 	const data = await fetchPortfoliosFront()
		// 	setPortfolios(data.data)
		// }
		portfoliosData?.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime()
		})
		setPortfolios(portfoliosData)

		// fetchData()
	}, [])

	return (
		<div className="max_width">
			<h3 className="portfolio__headTitle">
				全ての制作物
				<span className="portfolio__headTitle-span">
					{portfolios?.length}件
				</span>
			</h3>
			<div className="portfolioFlx padding">
				{portfolios?.map((portfolio: portfolioType) => (
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
