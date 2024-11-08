import React from "react";
import portfolios from "../../../../api/portfolio/index.json";
import PortfolioItem from "../PortfolioItem";

export const PortfolioElement = () => {
	return (
		<div className="max_width">
			<h3 className="portfolio__headTitle">
				全ての制作物
				<span className="portfolio__headTitle_span">
					{" "}
					{portfolios.length}件
				</span>
			</h3>
			<div className="portfolioFlx padding">
				{Array.isArray(portfolios) &&
					portfolios.map((portfolio, index) => (
						<PortfolioItem
							key={index}
							portfolio_id={portfolio.id}
							portfolio_name={portfolio.name}
							portfolio_date={portfolio.date}
							portfolio_tag={portfolio.tag}
							portfolio_topImg={portfolio.topImg}
						/>
					))}
			</div>
		</div>
	);
};
