import type { ResponsePortfolios } from "../types"
import { CACHE_OPTIONS } from "../utils/data"

/**
 * フロントエンドのポートフォリオの取得
 * @returns {ResponsePortfolios}
 */
export const fetchPortfoliosFront = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`, CACHE_OPTIONS)
  return await response.json()
}
