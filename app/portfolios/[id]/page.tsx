import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import { fetchPortfolio } from "@/hooks/fetch"
import { logger } from "@/utils/logger"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

export default async function PortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const portfolio = await fetchPortfolio(id)
  logger.info({ data: portfolio?.data, status: portfolio?.status }, `/portfolios/${id}`)
  if (portfolio.status == 404 || !portfolio.data) {
    notFound()
  }

  return <PortfolioDetail portfolio={portfolio.data} />
}
