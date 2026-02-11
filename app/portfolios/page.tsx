import { PortfolioList } from "@/app/portfolios/_containers/portfolio-list"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import { fetchPortfoliosFront } from "@/hooks/fetch"
import "@/styles/page/_portfolio.scss"
import { PATH } from "@/utils/path"
import type { Metadata } from "next"
import { PortfolioType } from "../types"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "To You Design - Portfolio",
}

const Portfolio = async ({ searchParams }: { searchParams: { order?: "new" | "old" } }) => {
  const res = await fetchPortfoliosFront()
  const portfolios: PortfolioType[] = res.data ?? []

  const sorted = [...portfolios]

  if (searchParams.order === "new") {
    sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  if (searchParams.order === "old") {
    sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  return (
    <main>
      <div className="max_width">
        <Breadcrumb items={[{ name: "Portfolio", link: PATH.PORTFOLIO }]} />
      </div>

      <LowerTitle title="Portfolio" enTitle="制作物" />

      <PortfolioList portfolios={sorted} />
    </main>
  )
}

export default Portfolio
