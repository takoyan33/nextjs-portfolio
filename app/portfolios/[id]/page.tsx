"use client"
import parse from "html-react-parser"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import portfoliosData from "../../../api/portfolios/index.json"
import { PATH } from "../../../utils/path"
import type { portfolioType } from "../../../utils/type"
import { CommonModal } from "../../components/ui/CommonModal"
import { LowerTitle } from "../../components/ui/LowerTitle"
import { PostNavigation } from "../../components/ui/PostNavigation"

const Post = () => {
	const params = useParams()
	const id = params?.id

	const [portfolio, setPortfolio] = useState<portfolioType>()

	const fetchPortfolios = async (id) => {
		try {
			// １つ取得する
			const filteredPortfolio = portfoliosData.find(
				(portfolio) => portfolio.id.toString() === id,
			)
			setPortfolio(filteredPortfolio)
		} catch (error) {
			console.error("Error fetching portfolio:", error)
		}
	}
	//サムネイル
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => {
		setIsOpen(true)
		document.body.classList.add("modal-open")
	}

	const closeModal = () => {
		setIsOpen(false)
		document.body.classList.remove("modal-open")
	}

	//About
	const [isOpen2, setIsOpen2] = useState(false)

	const openModal2 = () => {
		setIsOpen2(true)
		document.body.classList.add("modal-open")
	}

	const closeModal2 = () => {
		setIsOpen2(false)
		document.body.classList.remove("modal-open")
	}

	//function
	const [isOpen4, setIsOpen4] = useState(false)

	const openModal4 = () => {
		setIsOpen4(true)
		document.body.classList.add("modal-open")
	}

	const closeModal4 = () => {
		setIsOpen4(false)
		document.body.classList.remove("modal-open")
	}

	//appeal
	const [isOpen3, setIsOpen3] = useState(false)

	const openModal3 = () => {
		setIsOpen3(true)
		document.body.classList.add("modal-open")
	}

	const closeModal3 = () => {
		setIsOpen3(false)
		document.body.classList.remove("modal-open")
	}

	useEffect(() => {
		if (id) {
			fetchPortfolios(id)
		}
	}, [id])

	return (
		<main>
			<title>To You Design - ポートフォリオ</title>
			<meta name="description" content="Generated by Next.js" />
			{portfolio ? (
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
						<span className="bread__title-span">{portfolio.name}</span>
					</div>
					<LowerTitle title="Portfolio" enTitle="制作物" />
					<section className="portfolioDetail max_width">
						<p className="portfolioDetail__element-date">{portfolio.date}</p>
						<h2 className="portfolioDetail__element-title">{portfolio.name}</h2>
						<ul className="portfolioDetail__element-tagList">
							{portfolio.tag.map((skill) => (
								<li className="portfolioDetail__element-tag" key={skill}>
									#{skill}
								</li>
							))}
						</ul>

						<div className="portfolioDetail__element-topImg">
							<button onClick={openModal} type="button">
								{portfolio.topImg && (
									<Image
										src={portfolio.topImg}
										fill
										sizes="(min-width: 768px) 50vw"
										priority
										alt="ポートフォリオのトップ画像"
									/>
								)}
							</button>
						</div>
						<CommonModal
							isOpen={isOpen}
							closeModal={closeModal}
							img={portfolio.topImg}
						/>
						<h3 className="portfolioDetail__element-subtitle">About</h3>
						<div className="portfolioDetail__element-img">
							<button onClick={openModal2} type="button">
								{portfolio.aboutImg && (
									<Image
										src={portfolio.aboutImg}
										className="portfolioDetail__element-img"
										alt="ポートフォリオの概要画像"
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
									/>
								)}
							</button>
						</div>
						<CommonModal
							isOpen={isOpen2}
							closeModal={closeModal2}
							img={portfolio.aboutImg}
						/>
						<p className="portfolioDetail__element-text">
							{parse(portfolio?.about)}
						</p>
						<h3 className="portfolioDetail__element-subtitle">機能一覧</h3>
						<div className="portfolioDetail__element-img">
							<button onClick={openModal3} type="button">
								{portfolio?.functionImg && (
									<Image
										src={portfolio.functionImg}
										className="portfolioDetail__element-img"
										alt="ポートフォリオの機能一覧画像"
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
									/>
								)}
							</button>
						</div>
						<CommonModal
							isOpen={isOpen3}
							closeModal={closeModal3}
							img={portfolio.functionImg}
						/>
						<p className="portfolioDetail__element-text">
							{parse(portfolio?.function)}
						</p>
						<h3 className="portfolioDetail__element-subtitle">アピール</h3>
						<div className="portfolioDetail__element-img">
							<button onClick={openModal4} type="button">
								{portfolio?.appealImg && (
									<Image
										src={portfolio.appealImg}
										className="portfolioDetail__element-img"
										alt="ポートフォリオのアピール画像"
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
									/>
								)}
							</button>
						</div>
						<CommonModal
							isOpen={isOpen4}
							closeModal={closeModal4}
							img={portfolio.appealImg}
						/>
						<p className="portfolioDetail__element-text">
							{parse(portfolio?.appeal)}
						</p>

						<div className="portfolioDetail__element-text">
							<h3 className="portfolioDetail__element-subtitle">制作期間</h3>
							{portfolio.time}
						</div>
						<div className="portfolioDetail__element-text">
							<h3 className="portfolioDetail__element-subtitle">使用技術</h3>
							<h4>フロントエンド</h4>
							<ul className="portfolioDetail__element-tagList">
								{portfolio.front_skill.map((skill) => (
									<li className="portfolioDetail__element-tag" key={skill}>
										{skill}
									</li>
								))}
							</ul>
							{portfolio.back_skill && portfolio.back_skill.length > 0 && (
								<div>
									<h4>バックエンド</h4>
									<ul className="portfolioDetail__element-tagList">
										{portfolio.back_skill.map((skill) => (
											<li className="portfolioDetail__element-tag" key={skill}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
							{portfolio.infra_skill && portfolio.infra_skill.length > 0 && (
								<div>
									<h4>インフラ</h4>
									<ul className="portfolioDetail__element-tagList">
										{portfolio.infra_skill.map((skill) => (
											<li className="portfolioDetail__element-tag" key={skill}>
												{skill}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
						{portfolio.front_url && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">URL</h3>
								<Link
									href={portfolio.front_url}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolio.front_url}
								</Link>
							</div>
						)}
						{portfolio.front_github && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">Github</h3>
								<Link
									href={portfolio.front_github}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolio.front_github}
								</Link>
							</div>
						)}
						{portfolio.back_url && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">
									バックエンドURL
								</h3>
								<Link
									href={portfolio.back_url}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolio.back_url}
								</Link>
							</div>
						)}
						{portfolio.back_github && (
							<div className="portfolioDetail__element-text">
								<h3 className="portfolioDetail__element-subtitle">
									バックエンドGithub
								</h3>
								<Link
									href={portfolio.back_github}
									className="portfolioDetail__element-link"
									target="_blank"
								>
									{portfolio.back_github}
								</Link>
							</div>
						)}
					</section>
					<PostNavigation
						next_title={portfolio.next_title}
						next_article_id={portfolio.next_article_id}
						prev_title={portfolio.prev_title}
						prev_article_id={portfolio.prev_article_id}
					/>
				</article>
			) : (
				<article className="portfolioDetail__top">
					<div className="loading-body">
						<p className="bread__title max_width">
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
				</article>
			)}
		</main>
	)
}

export default Post
