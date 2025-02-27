import { TopBackButton, TransitionLink } from "app/components/ui"
import { HistoryTimeline } from "app/components/ui/rsc"
import ScrollComponent from "hooks/use-fadeIn"
import { PATH } from "utils/path"
import {
	HomePortfolioSlide,
	HomeSkills,
	HomeWaveBgBottom,
	HomeWaveBgTop,
} from "./_containers/"
import { HomeAboutSection, HomeFvSection } from "./sections"

const Home = () => {
	return (
		<div>
			<main aria-label="本文">
				<HomeFvSection />
				<HomeAboutSection />
				{/*  ここからポートフォリオ*/}
				<HomeWaveBgTop />
				<section className="portfolio">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title" data-ja="ポートフォリオ">
								Portfolio
							</h2>
						</ScrollComponent>
						<ScrollComponent>
							<HomePortfolioSlide />
							<TransitionLink href={PATH.PORTFOLIO} className="contact__btn">
								ポートフォリオをさらに見る
							</TransitionLink>
						</ScrollComponent>
					</div>
				</section>
				<HomeWaveBgBottom />
				{/*ここから学歴*/}
				<section className="max_width">
					<ScrollComponent>
						<h2 className="main__title" data-ja="過去の経歴">
							History
						</h2>
					</ScrollComponent>
					<div>
						<ScrollComponent>
							<HistoryTimeline />
						</ScrollComponent>
					</div>
					<TransitionLink
						href={PATH.ABOUT}
						className="contact__btn padding-bottom"
					>
						経歴をさらに見る
					</TransitionLink>
				</section>
				<HomeWaveBgTop />
				{/* ここからSKill*/}
				<section className="skill">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title" data-ja="スキルセット">
								Skill
							</h2>
						</ScrollComponent>
						<HomeSkills />
					</div>
				</section>
				<HomeWaveBgBottom />
				{/* ここからcontact*/}
				<section className="contact">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title-white" data-ja="お問い合わせ">
								Contact
							</h2>
						</ScrollComponent>
						<ScrollComponent>
							<div className="contact__box">
								<h3 className="contact__box-title">CONTACT</h3>
								<p className="contact__box-text">お問い合わせ</p>
								<TransitionLink
									href={PATH.CONTACT}
									className="contact__btn padding-bottom"
								>
									お問い合せフォームへ
								</TransitionLink>
							</div>
						</ScrollComponent>
					</div>
				</section>
			</main>
			<TopBackButton />
		</div>
	)
}

export default Home
