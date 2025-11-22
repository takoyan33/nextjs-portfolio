import { fetchPortfoliosFront } from "../../../../hooks/fetch"
import portfoliosData from "../../../../public/mock/api/portfolios/index.json"
import type { PortfolioType } from "../../../../types"
import { HomePortfolioSlideClient } from "./home-portfolio-slide-client"

/**
 * トップページのスライドショー（サーバー側でデータを取得）
 */
export const HomePortfolioSlide = async () => {
  // 本番用のAPIから取得
  const res = await fetchPortfoliosFront()
  let portfolios: PortfolioType[] = res?.data || []

  // モックがある場合は fallback
  if (!portfolios?.length) {
    portfolios = portfoliosData
  }

  // 日付でソート
  portfolios.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return <HomePortfolioSlideClient portfolios={portfolios} />
}
