import { fetchPortfolio, fetchPortfoliosFront } from "../../../hooks/fetch"
import type { PortfolioType } from "../../../types"
import { PortfolioDetail } from "./portfolio-detail"

// 静的生成用の関数
export async function generateStaticParams() {
	const portfolios = await fetchPortfoliosFront()

	return portfolios.data.map((portfolio: PortfolioType) => ({
		id: portfolio.id.toString(),
	}))
}

// メタデータの生成
export async function generateMetadata({ params }: { params: { id: string } }) {
	const portfolio = await fetchPortfolio(params.id)

	return {
		title: `${portfolio.data.name} - To You Design`,
		description: portfolio.data.about,
	}
}

export default async function PortfolioPage({
	params,
}: {
	params: { id: string }
}) {
	const portfolio = await fetchPortfolio(params.id)

	return <PortfolioDetail portfolio={portfolio.data} />
}
