"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import portfoliosData from "../../../api/portfolio/index.json"
import { PATH } from "../../../utils/path"
import type { portfolioType } from "../../../utils/type"
import { LowerTitle } from "../../components/ui/LowerTitle"

const Post = () => {
	const params = useParams()
	const id = params?.id

	const [portfolios, setPortfolios] = useState<any>(
		undefined,
	)

	const fetchPortfolios = async (id) => {
		try {
			const filteredPortfolio = portfoliosData.find(
				(portfolio) => portfolio.id.toString() === id,
			)
			setPortfolios(filteredPortfolio)
		} catch (error) {
			console.error("Error fetching portfolios:", error)
		}
	}

	useEffect(() => {
		if (id) {
			fetchPortfolios(id)
		}
	}, [id])

	return (
		<main>
			{portfolios ? (
				<article>
					<p className="bread__title max_width">
						<Link href="/">トップ </Link> ＞
						<Link href={PATH.PORTFOLIO}>　Portfolio ＞ {portfolios.name}</Link>
					</p>
					<LowerTitle title="Portfolio" enTitle="制作物" />
					<section className="portfolioDetail max_width">
						<p className="portfolioDetail__element__date">{portfolios.date}</p>
						<h2 className="portfolioDetail__element__title">
							{portfolios.name}
						</h2>
						<ul className="portfolioDetail__element__tagList">
							{portfolios.tag.map((skill, index) => (
								<li className="portfolioDetail__element__tag" key={index}>
									#{skill}
								</li>
							))}
						</ul>
						<div className="portfolioDetail__element__topImg">
							{portfolios.topImg && (
								<Image
									src={portfolios.topImg}
									fill
									sizes="(min-width: 768px) 50vw"
									priority
									alt="ポートフォリオ画像"
								/>
							)}
						</div>
						<h3 className="portfolioDetail__element__subtitle">About</h3>
						<div className="portfolioDetail__element__img">
							{portfolios.aboutImg && (
								<Image
									src={portfolios.aboutImg}
									className="portfolioDetail__element__img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<div
							className="portfolioDetail__element__text"
							dangerouslySetInnerHTML={{
								__html: portfolios?.about,
							}}
						></div>
						<h3 className="portfolioDetail__element__subtitle">機能一覧</h3>
						<div className="portfolioDetail__element__img">
							{portfolios?.functionImg && (
								<Image
									src={portfolios.functionImg}
									className="portfolioDetail__element__img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<div
							className="portfolioDetail__element__text"
							dangerouslySetInnerHTML={{
								__html: portfolios.function,
							}}
						></div>
						<h3 className="portfolioDetail__element__subtitle">アピール</h3>
						<div className="portfolioDetail__element__img">
							{portfolios?.appealImg && (
								<Image
									src={portfolios.appealImg}
									className="portfolioDetail__element__img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<div
							className="portfolioDetail__element__text"
							dangerouslySetInnerHTML={{
								__html: portfolios.appeal,
							}}
						></div>

						<div className="portfolioDetail__element__text">
							<h3 className="portfolioDetail__element__subtitle">制作期間</h3>
							{portfolios.time}
						</div>
						<div className="portfolioDetail__element__text">
							<h3 className="portfolioDetail__element__subtitle">使用技術</h3>
							<h4>フロントエンド</h4>
							<ul className="portfolioDetail__element__tagList">
								{portfolios.front_skill.map((skill, index) => (
									<li className="portfolioDetail__element__tag" key={index}>
										{skill}
									</li>
								))}
							</ul>
							{portfolios.back_skill && portfolios.back_skill.length > 0 && (
								<div>
									<h4>バックエンド</h4>
									<ul className="portfolioDetail__element__tagList">
										{portfolios.back_skill.map((skill, index) => (
											<li className="portfolioDetail__element__tag" key={index}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
							{portfolios.infra_skill && portfolios.infra_skill.length > 0 && (
								<div>
									<h4>インフラ</h4>
									<ul className="portfolioDetail__element__tagList">
										{portfolios.infra_skill.map((skill, index) => (
											<li className="portfolioDetail__element__tag" key={index}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
						{portfolios.front_url && (
							<div className="portfolioDetail__element__text">
								<h3 className="portfolioDetail__element__subtitle">URL</h3>
								<Link
									href={portfolios.front_url}
									className="portfolioDetail__element__link"
									target="_blank"
								>
									{portfolios.front_url}
								</Link>
							</div>
						)}
						{portfolios.front_github && (
							<div className="portfolioDetail__element__text">
								<h3 className="portfolioDetail__element__subtitle">Github</h3>
								<Link
									href={portfolios.front_github}
									className="portfolioDetail__element__link"
									target="_blank"
								>
									{portfolios.front_github}
								</Link>
							</div>
						)}
						{portfolios.back_url && (
							<div className="portfolioDetail__element__text">
								<h3 className="portfolioDetail__element__subtitle">
									バックエンドURL
								</h3>
								<Link
									href={portfolios.back_url}
									className="portfolioDetail__element__link"
									target="_blank"
								>
									{portfolios.back_url}
								</Link>
							</div>
						)}
						{portfolios.back_github && (
							<div className="portfolioDetail__element__text">
								<h3 className="portfolioDetail__element__subtitle">
									バックエンドGithub
								</h3>
								<Link
									href={portfolios.back_github}
									className="portfolioDetail__element__link"
									target="_blank"
								>
									{portfolios.back_github}
								</Link>
							</div>
						)}
					</section>
				</article>
			) : (
				<div className="loading-body">
					<p className="bread__title max_width">
						<Link href="/">トップ </Link> ＞
						<Link href={PATH.PORTFOLIO}> Portfolio </Link>
					</p>
					<LowerTitle title="Portfolio" enTitle="制作物" />
					<div className="loading">
						<div className="spinner-box">
							<div className="circle-border">
								<div className="circle-core" />
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}

export default Post
