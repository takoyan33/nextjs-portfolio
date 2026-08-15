import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PortfolioDetail } from "@/app/portfolios/[id]/portfolio-detail"
import { fetchPortfolio, fetchPortfoliosFront } from "@/hooks/fetch"
import "@/styles/page/_portfolioId.scss"
import { logger } from "@/utils/logger"
import { siteConfig } from "@/utils/site"

export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const res = await fetchPortfoliosFront()

  return (res.data ?? []).map((portfolio) => ({
    id: String(portfolio.id),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params

  try {
    const portfolio = await fetchPortfolio(id)
    if (portfolio.data && portfolio.status !== 404) {
      return { title: `${siteConfig.name} - ${portfolio.data.name}` }
    }
  } catch {
    // The page component renders the 404 state for unavailable portfolios.
  }

  return { title: siteConfig.name }
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
