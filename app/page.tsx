"use client"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import React, { useState, useEffect } from "react"
import { Suspense } from "react"
import ScrollComponent from "../hooks/useFadeIn"
import { socialLinks } from "../utils/data"
import { PATH } from "../utils/path"
import ThreeModel from "./components/parts/ThreeModel"
import { CommonHead } from "./components/ui/CommonHead"
import WaveBgBottom from "./components/ui/WaveBgBottom"
import WaveBgTop from "./components/ui/WaveBgTop"
import { BackSkills } from "./components/ui/rsc/BackSkills"
import { FrontSkills } from "./components/ui/rsc/FrontSkills"
import { HistoryTimelines } from "./components/ui/rsc/HistoryTimelines"
import { InfraSkills } from "./components/ui/rsc/InfraSkills"
import { OtherSkills } from "./components/ui/rsc/OtherSkills"
import { TopPortfolioSlide } from "./components/ui/rsc/TopPortfolioSlide"
// import { TopZennArticle } from "./components/ui/rsc/TopZennArticle"
//import { FadeUpTitle } from '../components/Components/parts/FadeUpTitle'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import { todoState } from '../atoms/todoState'

const Home = () => {
	const [showBackButton, setShowBackButton] = useState(false)

	const handleScroll = () => {
		setShowBackButton(window.scrollY > 150)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div>
			<CommonHead />
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
								<Suspense fallback={<div>Loading...</div>}>
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
											{socialLinks.map((link) => (
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
											大学在学中に、プログラミングに興味を持ち、html,cssから学習を始めました。
											<br />
											文系大学を卒業後、フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
											<br />
											現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
										</p>
										<p className="about__text">
											<span className="about__text-span">趣味：</span>
											旅行、ギター
										</p>
										<p className="about__text">
											<span className="about__text-span">資格：</span>
											基本情報技術者試験
										</p>
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
							<Link href={PATH.PORTFOLIO} className="contact__btn">
								ポートフォリオをさらに見る
							</Link>
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
					<Link href={PATH.ABOUT} className="contact__btn padding-bottom">
						経歴をさらに見る
					</Link>
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
								<Link
									href={PATH.CONTACT}
									className="contact__btn padding-bottom"
								>
									お問い合せフォームへ
								</Link>
							</div>
						</ScrollComponent>
					</div>
				</section>
			</main>
			{showBackButton && (
				<button
					type="button"
					className="back__btn"
					onClick={() => {
						window.scrollTo(0, 0)
					}}
				>
					<Image
						src="/images/top-arrow.svg"
						height={30}
						width={30}
						alt="arrow"
					/>
				</button>
			)}
		</div>
	)
}

export default Home
