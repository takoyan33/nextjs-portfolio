import { fetchPortfolio } from "../../../hooks/fetch"
import type { PortfolioType } from "../../../types"
import { PortfolioDetail } from "./portfolio-detail"

// 静的生成用の関数
export async function generateStaticParams() {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`,
		)
		if (!response.ok) {
			throw new Error("Failed to fetch portfolios")
		}
		const data = await response.json()
		const portfolios = data.data || []

		return portfolios.map((portfolio: PortfolioType) => ({
			id: portfolio.id.toString(),
		}))
	} catch (error) {
		console.error("Error in generateStaticParams:", error)
		return []
	}
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
