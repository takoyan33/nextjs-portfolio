import type { Metadata } from "next"
import { PATH } from "../../utils/path"
import BreadList from "../components/ui/BreadList"
import { LowerTitle } from "../components/ui/LowerTitle"
import { PortfolioElement } from "../components/ui/rsc/PortfolioElement"

export const metadata: Metadata = {
	title: "To You Design - Portfolio",
	description: "Generated by Next.js",
}

const Portfolio = async () => {
	return (
		<main>
			<div className="max_width">
				<BreadList name="Portfolio" link={PATH.PORTFOLIO} />
			</div>
			<LowerTitle title="Portfolio" enTitle="制作物" />
			<PortfolioElement />
		</main>
	)
}

export default Portfolio
