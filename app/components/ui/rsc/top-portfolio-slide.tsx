"use client"

import React, { useEffect, useState, useMemo } from "react"
import "swiper/css"
import { Controller } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchPortfoliosFront } from "../../../../hooks/fetch"
import portfoliosData from "../../../../public/mock/api/portfolios/index.json"
import type { portfolioType } from "../../../../types"
import TopPortfolioItem from "../top-portfolio-item"

export const TopPortfolioSlide = () => {
	const BREAK_POINT = {
		0: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 3.5,
		},
	}

	const [firstSwiper, setFirstSwiper] = useState<number>(0)

	const [portfolios, setPortfolios] = useState<portfolioType[]>([])

	useEffect(() => {
		const fetchData = async () => {
			// const data = await fetchPortfoliosFront()
			// data.data.sort((a, b) => {
			// 	return new Date(b.date).getTime() - new Date(a.date).getTime()
			// })
			// setPortfolios(data.data)
			portfoliosData?.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			})
		}
		setPortfolios(portfoliosData)
		fetchData()
	}, [])

	// ポートフォリオの中身が変わる場合のみ再計算
	const slides = useMemo(() => {
		return portfolios?.map((portfolio) => (
			<SwiperSlide key={portfolio.id}>
				<TopPortfolioItem
					portfolio_id={portfolio.id}
					portfolio_name={portfolio.name}
					portfolio_date={portfolio.date}
					portfolio_tag={portfolio.tag}
					portfolio_topImg={portfolio.topImg}
				/>
			</SwiperSlide>
		))
	}, [portfolios])

	return (
		<div className="portfolio-content">
			<div className="prev-button">
				{firstSwiper !== 0 && (
					<Image
						src="/images/prev-arrow.svg"
						width={50}
						height={50}
						style={{
							width: "100%",
							height: "auto",
						}}
						alt="スライドショーのナビゲーション"
					/>
				)}
			</div>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
				className="flx swiper"
				spaceBetween={30}
				slidesPerView={3.5}
				onSwiper={(swiper) => {
					setFirstSwiper(swiper.activeIndex)
				}}
				onSlideChange={(swiper) => {
					setFirstSwiper(swiper.activeIndex)
				}}
				breakpoints={BREAK_POINT}
				navigation={{
					nextEl: ".next-button",
					prevEl: ".prev-button",
				}}
			>
				{slides}
			</Swiper>
			<div className="next-button">
				{firstSwiper < 4 && (
					<Image
						src="/images/next-arrow.svg"
						width={50}
						height={50}
						style={{
							width: "100%",
							height: "auto",
						}}
						alt="スライドショーのナビゲーション"
					/>
				)}
			</div>
		</div>
	)
}
