import { PortfolioList } from "@/app/portfolios/_containers/portfolio-list"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import "@/styles/page/_portfolio.scss"
import { PATH } from "@/utils/path"
import type { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "To You Design - Portfolio",
}

const Portfolio = () => {
  return (
    <main>
      <div className="max_width">
        <Breadcrumb items={[{ name: "Portfolio", link: PATH.PORTFOLIO }]} />
      </div>
      <LowerTitle title="Portfolio" enTitle="制作物" />
      <PortfolioList />
    </main>
  )
}

export default Portfolio
