"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { A11y, Controller, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { PortfolioType } from "../../../../types"
import HomePortfolioSlideItem from "./home-portfolio-slide-item"

type Props = {
  portfolios: PortfolioType[]
}

export const HomePortfolioSlideClient = ({ portfolios }: Props) => {
  const BREAK_POINT = {
    0: { slidesPerView: 1.5 },
    768: { slidesPerView: 3.5 },
  }

  const [firstSwiper, setFirstSwiper] = useState<number>(0)

  return (
    <div className="portfolio-content">
      <div className="prev-button">{firstSwiper !== 0 && <ChevronLeft />}</div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        className="flx swiper"
        spaceBetween={30}
        slidesPerView={3.5}
        onSwiper={(swiper) => setFirstSwiper(swiper.activeIndex)}
        onSlideChange={(swiper) => setFirstSwiper(swiper.activeIndex)}
        breakpoints={BREAK_POINT}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
      >
        {portfolios.map((portfolio) => (
          <SwiperSlide key={portfolio.id + portfolio.name}>
            <HomePortfolioSlideItem
              portfolio_id={portfolio.id}
              portfolio_name={portfolio.name}
              portfolio_date={portfolio.date}
              portfolio_tag={portfolio.tag}
              portfolio_topImg={portfolio.topImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="next-button">{firstSwiper < 4 && <ChevronRight />}</div>
    </div>
  )
}
