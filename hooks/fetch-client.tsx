import type { ResponsePortfolios } from "../types"

/**
 * フロントエンドのポートフォリオの取得
 * @return {fetchPortfoliosFront}
 */
export const fetchPortfoliosFront = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolios`)
  // console.log(response)
  return await response.json()
}

/**
 * ポートフォリオの取得
 * @return {ResponsePortfolios}
 */
export const fetchPortfolios = async (): Promise<ResponsePortfolios> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/v1/portfolios`)
  return await response.json()
}
