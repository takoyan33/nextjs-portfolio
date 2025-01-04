import { PATH } from "../../utils/path"
import { AboutTabs, BreadList, LowerTitle } from "../components/ui/"
import { License } from "../components/ui/rsc/"

const About = () => {
	return (
		<main className="padding">
			<title>To You Design - About</title>
			<meta name="description" content="Generated by Next.js" />
			<div className="max_width">
				<BreadList name="About" link={PATH.ABOUT} />
			</div>
			<LowerTitle title="About" enTitle="プロフィール" />
			<AboutTabs />
			{/* ここからLicense*/}
			<section className="license max_width">
				<h3 className="portfolio__headTitle">資格</h3>
				<table className="license__table">
					<tbody>
						<tr>
							<th className="license__table-th">日付</th>
							<th className="license__table-th">資格名</th>
						</tr>
						{/* @ts-expect-error Server Component */}
						<License />
					</tbody>
				</table>
			</section>
		</main>
	)
}

export default About
