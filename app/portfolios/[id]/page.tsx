import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import { fetchPortfolio } from "@/hooks/fetch"
import "@/styles/page/_portfolioId.scss"
import { logger } from "@/utils/logger"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

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
