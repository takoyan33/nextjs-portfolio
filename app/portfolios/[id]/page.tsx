import { notFound } from "next/navigation"

import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import { fetchPortfolio, fetchPortfoliosFront } from "@/hooks/fetch"
import "@/styles/page/_portfolioId.scss"
import { logger } from "@/utils/logger"

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const res = await fetchPortfoliosFront()

  return (res.data ?? []).map((portfolio) => ({
    id: String(portfolio.id),
  }))
}

export default async function PortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  let portfolio: Awaited<ReturnType<typeof fetchPortfolio>>
  try {
    portfolio = await fetchPortfolio(id)
  } catch {
    notFound()
  }

  logger.info({ data: portfolio?.data, status: portfolio?.status }, `/portfolios/${id}`)
  if (!portfolio.data || portfolio.status === 404) {
    notFound()
  }

  return <PortfolioDetail portfolio={portfolio.data} />
}
