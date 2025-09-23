import { fetchPortfolio } from "../../../hooks/fetch"
import { PortfolioDetail } from "./portfolio-detail"

// ページコンポーネント
export default async function PortfolioPage({ params }) {
  console.log("PortfolioPage params:", params)

  try {
    const portfolio = await fetchPortfolio(params.id)
    return <PortfolioDetail portfolio={portfolio.data} />
  } catch (error) {
    console.error("Error fetching portfolio:", error)
    return <div>データ取得に失敗しました。</div>
  }
}
