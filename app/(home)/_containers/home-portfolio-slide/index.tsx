"use client"

import React, { useEffect, useState } from "react"
import "swiper/css"
import { Controller } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchPortfoliosFront } from "../../../../hooks/fetch"
import portfoliosData from "../../../../public/mock/api/portfolios/index.json"
import type { PortfolioType } from "../../../../types"
import HomePortfolioSlideItem from "./home-portfolio-slide-item"

/**
 * トップページのスライドショー
 */
export const HomePortfolioSlide = () => {
	const BREAK_POINT = {
		0: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 3.5,
		},
	}

	const [firstSwiper, setFirstSwiper] = useState<number>(0)

	const [portfolios, setPortfolios] = useState<PortfolioType[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchPortfoliosFront()
			data.data.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			})
			setPortfolios(data.data)
			portfoliosData?.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			})
		}
		setPortfolios(portfoliosData)
		fetchData()
	}, [])

	const slides = portfolios?.map((portfolio) => (
		<SwiperSlide key={portfolio.id + portfolio.name}>
			<HomePortfolioSlideItem
				portfolio_id={portfolio.id}
				portfolio_name={portfolio.name}
				portfolio_date={portfolio.date}
				portfolio_tag={portfolio.tag}
				portfolio_topImg={portfolio.topImg}
			/>
		</SwiperSlide>
	))

	return (
		<div className="portfolio-content">
			<div className="prev-button">{firstSwiper !== 0 && <ChevronLeft />}</div>

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
			<div className="next-button">{firstSwiper < 4 && <ChevronRight />}</div>
		</div>
	)
}
