import ThreeModel from "app/components/parts/three-model"
import {
	TopBackButton,
	TransitionLink,
	WaveBgBottom,
	WaveBgTop,
} from "app/components/ui"
import {
	BackSkills,
	FrontSkills,
	HistoryTimelines,
	InfraSkills,
	OtherSkills,
	TopPortfolioSlide,
} from "app/components/ui/rsc"
import ScrollComponent from "hooks/use-fadeIn"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { SOCIAL_LINKS } from "utils/data"
import { PATH } from "utils/path"
// import { TopZennArticle } from "./components/ui/rsc/TopZennArticle"
//import { FadeUpTitle } from '../components/Components/parts/FadeUpTitle'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import { todoState } from '../atoms/todoState'

const Home = () => {
	return (
		<div>
			<main aria-label="本文">
				{/* ここからfv */}
				<section className="fv">
					<div className="max_width fv__container">
						<div className="fv__element">
							<h2 className="fv__title slide__in__right">To You Design</h2>
							<h3 className="fv__subtitle slide__in__right">Portfolio</h3>
						</div>
						<div className="fv__element">
							<ScrollComponent>
								<Suspense fallback={<>.</>}>
									<ThreeModel />
								</Suspense>
							</ScrollComponent>
						</div>
					</div>
				</section>
				{/* ここからabout */}
				<section className="about">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title" data-ja="To You Designについて">
								About
							</h2>
						</ScrollComponent>
						<ScrollComponent>
							<div className="aboutTop_container">
								<div className="aboutTop_container-item">
									<ScrollComponent>
										<div className="about_img">
											<Image
												src="/images/myphoto.png"
												alt="プロフィール画像"
												fill
												priority
												sizes="(min-width: 768px) 50vw, 100vw"
											/>
										</div>
									</ScrollComponent>
								</div>
								<div className="aboutTop_container-item">
									<ScrollComponent>
										<p className="about__title">阿部 舜平</p>
										<div className="about__flx">
											{SOCIAL_LINKS.map((link) => (
												<Link key={link.href} href={link.href} target="_blank">
													<Image
														src={link.src}
														className="about_snsLogo"
														alt={link.alt}
														height={link.height}
														width={link.width}
													/>
												</Link>
											))}
										</div>
										<p className="about__text">
											北海道在住の社会人1年目のエンジニア。
											<br />
											大学在学中に、プログラミングに興味を持ち、HTML/CSSから学習を始めました。
											<br />
											文系大学を卒業後、フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
											<br />
											現在はReactやVueを中心に、更なるフロントエンド技術の向上を目指しています。
										</p>
										<dl className="about__text">
											<dt className="about__text">
												<strong>趣味：</strong>
											</dt>
											<dd>旅行、ギター</dd>
										</dl>
										<dl className="about__text">
											<dt className="about__text">
												<strong>資格：</strong>
											</dt>
											<dd>基本情報技術者試験</dd>
										</dl>
									</ScrollComponent>
								</div>
							</div>
						</ScrollComponent>
					</div>
				</section>
				{/*  ここからポートフォリオ*/}
				<WaveBgTop />
				<section className="portfolio">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title" data-ja="ポートフォリオ">
								Portfolio
							</h2>
						</ScrollComponent>
						{/* <FadeUpTitle /> */}
						<ScrollComponent>
							<TopPortfolioSlide />
							<TransitionLink href={PATH.PORTFOLIO} className="contact__btn">
								ポートフォリオをさらに見る
							</TransitionLink>
						</ScrollComponent>
					</div>
				</section>
				<WaveBgBottom />
				{/*ここから学歴*/}
				<section className="max_width">
					<ScrollComponent>
						<h2 className="main__title" data-ja="過去の経歴">
							History
						</h2>
					</ScrollComponent>
					<div>
						<ScrollComponent>
							<HistoryTimelines />
						</ScrollComponent>
					</div>
					<TransitionLink
						href={PATH.ABOUT}
						className="contact__btn padding-bottom"
					>
						経歴をさらに見る
					</TransitionLink>
				</section>
				<WaveBgTop />
				{/* ここからSKill*/}
				<section className="skill">
					<div className="max_width">
						<ScrollComponent>
							<h2 className="main__title" data-ja="スキルセット">
								Skill
							</h2>
						</ScrollComponent>

						<h3 className="skill__title">Frontend</h3>
						<ScrollComponent>
							<FrontSkills />
						</ScrollComponent>
						<h3 className="skill__title">Backend</h3>
						<ScrollComponent>
							<BackSkills />
						</ScrollComponent>
						<h3 className="skill__title">Infra</h3>
						<ScrollComponent>
							<InfraSkills />
						</ScrollComponent>
						<h3 className="skill__title">Other</h3>
						<ScrollComponent>
							<OtherSkills />
						</ScrollComponent>
					</div>
				</section>
				<WaveBgBottom />
				{/* <TopZennArticle /> */}
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
