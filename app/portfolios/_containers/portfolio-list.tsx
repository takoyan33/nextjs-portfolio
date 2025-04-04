"use client"

import type React from "react"
import { useEffect, useState } from "react"
// import { fetchPortfoliosFront } from "../../../hooks/fetch"
import portfoliosData from "../../../public/mock/api/portfolios/index.json"
import type { PortfolioType } from "../../../types"
import PortfolioItem from "../../components/ui/portfolio-item"

/**
 * ポートフォリオ一覧
 */
export const PortfolioList = () => {
	// const portfolios = await fetchPortfolios()

	const [portfolios, setPortfolios] = useState<PortfolioType[]>()

	useEffect(() => {
		// const fetchData = async () => {
		// 	const data = await fetchPortfoliosFront()
		// 	setPortfolios(data.data)
		// }
		// fetchData()
		portfoliosData?.sort((a, b) => {
			return new Date(b.date).getTime() + new Date(a.date).getTime()
		})
		setPortfolios(portfoliosData)
	}, [])

	/** ポートフォリオの絞り込み */
	const filterPortfolio = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value
		const sortedData = portfolios ? [...portfolios] : []

		if (value === "new-order") {
			sortedData.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
			)
		} else if (value === "old-order") {
			sortedData.sort(
				(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
			)
		}

		setPortfolios(sortedData)
	}
	return (
		<div className="max_width">
			<h2 className="lower__subTitle">
				全ての制作物
				<span className="lower__subTitle-span">{portfolios?.length}件</span>
			</h2>
			<div className="portfolio__filter">
				<label className="selectBox">
					<select name="orders" id="order-select" onChange={filterPortfolio}>
						<option value="new-order">並び替え</option>
						<option value="new-order">新しい順</option>
						<option value="old-order">古い順</option>
					</select>
				</label>
			</div>
			<div className="portfolio__List">
				{portfolios?.map((portfolio: PortfolioType) => (
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
