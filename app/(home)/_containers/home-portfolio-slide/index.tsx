import { HomePortfolioSlideClient } from "@/app/(home)/_containers/home-portfolio-slide/home-portfolio-slide-client"
import { fetchPortfoliosFront } from "@/hooks/fetch"
import portfoliosData from "@/public/mock/api/portfolios/index.json"
import type { PortfolioType } from "@/types"
import { logger } from "@/utils/logger"

/**
 * トップページのスライドショー（サーバー側でデータを取得）
 */
export const HomePortfolioSlide = async () => {
  let portfolios: PortfolioType[] = []

  try {
    // 本番用のAPIから取得
    const res = await fetchPortfoliosFront()
    logger.info(
      { length: res?.data?.length, data: res?.data?.[0], status: res?.status },
      "/home/portfolio-slide",
    )
    portfolios = res?.data || []
  } catch (error) {
    console.error("Failed to fetch portfolios from API, falling back to mock data:", error)
    // APIが失敗した場合はモックデータを使用
    portfolios = portfoliosData
  }

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
