import React, { useEffect, useState } from "react"
import "swiper/css"
import { Controller } from "swiper/modules"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { fetchPortfolios } from "../../../../hooks/fetch"
// import portfolios from "../../../../api/portfolios/index.json"
import PortfolioItemTop from "../../../components/ui/PortfolioItemTop"

export const TopPortfolioSlide = () => {
	const breakpoints = {
		0: {
			slidesPerView: 1.5,
		},
		768: {
			slidesPerView: 3.5,
		},
	}

	const [firstSwiper, setFirstSwiper] = useState(0)

	const [portfolios, setPortfolios] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchPortfolios()
				setPortfolios(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])

	return (
		<div className='portfolio-content'>
			<div className='prev-button'>
				{firstSwiper !== 0 && (
					<Image
						src='/images/prev-arrow.svg'
						width={50}
						height={50}
						style={{
							width: "100%",
							height: "auto",
						}}
						alt='スライドショーのナビゲーション'
					/>
				)}
			</div>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
				className='flx swiper'
				spaceBetween={30}
				slidesPerView={3.5}
				onSwiper={(swiper) => {
					setFirstSwiper(swiper.activeIndex)
				}}
				onSlideChange={(swiper) => {
					setFirstSwiper(swiper.activeIndex)
				}}
				breakpoints={breakpoints}
				navigation={{
					nextEl: ".next-button",
					prevEl: ".prev-button",
				}}
			>
				{portfolios?.map((portfolio) => (
					<SwiperSlide key={portfolio.id}>
						<PortfolioItemTop
							portfolio_id={portfolio.id}
							portfolio_name={portfolio.name}
							portfolio_date={portfolio.date}
							portfolio_tag={portfolio.tag}
							portfolio_topImg={portfolio.topImg}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='next-button'>
				{firstSwiper < 3 && (
					<Image
						src='/images/next-arrow.svg'
						width={50}
						height={50}
						style={{
							width: "100%",
							height: "auto",
						}}
						alt='スライドショーのナビゲーション'
					/>
				)}
			</div>
		</div>
	)
}
