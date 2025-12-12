import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import { fetchPortfolio } from "@/hooks/fetch"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

export default async function PortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const portfolio = await fetchPortfolio(id)
  if (portfolio.status == 404 || !portfolio.data) {
    notFound()
  }

  return <PortfolioDetail portfolio={portfolio.data} />
}
