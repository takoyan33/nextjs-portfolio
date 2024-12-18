"use client"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import portfoliosData from "../../../api/portfolios/index.json"
import { PATH } from "../../../utils/path"
import type { portfolioType } from "../../../utils/type"
import { LowerTitle } from "../../components/ui/LowerTitle"
import { PostNavigation } from "../../components/ui/PostNavigation"

const Post = () => {
	const params = useParams()
	const id = params?.id

	const [portfolios, setPortfolios] = useState<any>()

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
	//サムネイル
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
		document.body.classList.add("modal-open") // Prevent background scroll
	}

	const closeModal = () => {
		setIsOpen(false)
		document.body.classList.remove("modal-open") // Re-enable background scroll
	}

	//About
	const [isOpen2, setIsOpen2] = useState(false)

	const openModal2 = () => {
		setIsOpen2(true)
		document.body.classList.add("modal-open") // Prevent background scroll
	}

	const closeModal2 = () => {
		setIsOpen2(false)
		document.body.classList.remove("modal-open") // Re-enable background scroll
	}

	//function
	const [isOpen4, setIsOpen4] = useState(false)

	const openModal4 = () => {
		setIsOpen4(true)
		document.body.classList.add("modal-open") // Prevent background scroll
	}

	const closeModal4 = () => {
		setIsOpen4(false)
		document.body.classList.remove("modal-open") // Re-enable background scroll
	}

	//appeal
	const [isOpen3, setIsOpen3] = useState(false)

	const openModal3 = () => {
		setIsOpen3(true)
		document.body.classList.add("modal-open") // Prevent background scroll
	}

	const closeModal3 = () => {
		setIsOpen3(false)
		document.body.classList.remove("modal-open") // Re-enable background scroll
	}

	useEffect(() => {
		if (id) {
			fetchPortfolios(id)
		}
	}, [id])

	return (
		<main>
			{portfolios ? (
				<article className="portfolioDetail__top">
					<div className="bread__title max_width">
						<Link href="/">トップ </Link>
						<span className="bread__arrow">
							<Image
								src="/images/next-arrow.svg"
								width={15}
								height={15}
								style={{
									width: "100%",
									height: "auto",
								}}
								alt="スライドショーのナビゲーション"
							/>
						</span>
						<Link href={PATH.PORTFOLIO}>Portfolio</Link>
						<span className="bread__arrow">
							<Image
								src="/images/next-arrow.svg"
								width={15}
								height={15}
								style={{
									width: "100%",
									height: "auto",
								}}
								alt="スライドショーのナビゲーション"
							/>
						</span>
						<span className="bread__title-span">{portfolios.name}</span>
					</div>
					<LowerTitle title="Portfolio" enTitle="制作物" />
					<section className="portfolioDetail max_width">
						<p className="portfolioDetail__element-date">{portfolios.date}</p>
						<h2 className="portfolioDetail__element-title">
							{portfolios.name}
						</h2>
						<ul className="portfolioDetail__element-tagList">
							{portfolios.tag.map((skill, index) => (
								<li className="portfolioDetail__element-tag" key={index}>
									#{skill}
								</li>
							))}
						</ul>

						<div className="portfolioDetail__element-topImg">
							<button onClick={openModal} type="button">
								{portfolios.topImg && (
									<Image
										src={portfolios.topImg}
										fill
										sizes="(min-width: 768px) 50vw"
										priority
										alt="ポートフォリオ画像"
									/>
								)}
							</button>
						</div>
						<Modal
							isOpen={isOpen}
							onRequestClose={closeModal}
							contentLabel="Portfolio Image Modal"
							className="modal"
							overlayClassName="overlay"
						>
							<button
								onClick={closeModal}
								className="modal-close"
								type="button"
							>
								&times;
							</button>
							<div className="modal-content">
								<Image
									src={portfolios.topImg}
									width={800}
									height={600}
									alt="ポートフォリオ画像"
								/>
							</div>
						</Modal>
						<h3 className="portfolioDetail__element-subtitle">About</h3>
						<div className="portfolioDetail__element-img">
							{portfolios.aboutImg && (
								<Image
									src={portfolios.aboutImg}
									className="portfolioDetail__element-img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<p className="portfolioDetail__element-text">
							{parse(portfolios?.about)}
						</p>
						<h3 className="portfolioDetail__element-subtitle">機能一覧</h3>
						<div className="portfolioDetail__element-img">
							{portfolios?.functionImg && (
								<Image
									src={portfolios.functionImg}
									className="portfolioDetail__element-img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<p className="portfolioDetail__element-text">
							{parse(portfolios?.function)}
						</p>
						<h3 className="portfolioDetail__element-subtitle">アピール</h3>
						<div className="portfolioDetail__element-img">
							{portfolios?.appealImg && (
								<Image
									src={portfolios.appealImg}
									className="portfolioDetail__element-img"
									alt="ポートフォリオ画像"
									fill
									sizes="(min-width: 768px) 50vw, 100vw"
								/>
							)}
						</div>
						<p className="portfolioDetail__element-text">
							{parse(portfolios?.appeal)}
						</p>

						<div className="portfolioDetail__element-text">
							<h3 className="portfolioDetail__element-subtitle">制作期間</h3>
							{portfolios.time}
						</div>
						<div className="portfolioDetail__element-text">
							<h3 className="portfolioDetail__element-subtitle">使用技術</h3>
							<h4>フロントエンド</h4>
							<ul className="portfolioDetail__element-tagList">
								{portfolios.front_skill.map((skill, index) => (
									<li className="portfolioDetail__element-tag" key={index}>
										{skill}
									</li>
								))}
							</ul>
							{portfolios.back_skill && portfolios.back_skill.length > 0 && (
								<div>
									<h4>バックエンド</h4>
									<ul className="portfolioDetail__element-tagList">
										{portfolios.back_skill.map((skill, index) => (
											<li className="portfolioDetail__element-tag" key={index}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
							{portfolios.infra_skill && portfolios.infra_skill.length > 0 && (
								<div>
									<h4>インフラ</h4>
									<ul className="portfolioDetail__element-tagList">
										{portfolios.infra_skill.map((skill, index) => (
											<li className="portfolioDetail__element-tag" key={index}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
						{portfolios.front_url && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">URL</h3>
								<Link
									href={portfolios.front_url}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolios.front_url}
								</Link>
							</div>
						)}
						{portfolios.front_github && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">Github</h3>
								<Link
									href={portfolios.front_github}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolios.front_github}
								</Link>
							</div>
						)}
						{portfolios.back_url && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">
									バックエンドURL
								</h3>
								<Link
									href={portfolios.back_url}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolios.back_url}
								</Link>
							</div>
						)}
						{portfolios.back_github && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">
									バックエンドGithub
								</h3>
								<Link
									href={portfolios.back_github}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolios.back_github}
								</Link>
							</div>
						)}
					</section>
					<PostNavigation
						next_title={portfolios.next_title}
						next_article_id={portfolios.next_article_id}
						prev_title={portfolios.prev_title}
						prev_article_id={portfolios.prev_article_id}
					/>
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
