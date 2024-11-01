'use client'
import React, { useState, useEffect } from 'react'
import 'swiper/css'
import { Controller } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { portfolioType } from '../../../../utils/type'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import PortfolioItemTop from '../../../../components/Components/ui/PortfolioItemTop'
import Image from 'next/image'
import portfolios from '../../../../api/portfolio/index.json'

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

  return (
    <div className='portfolio-content'>
      <div className='prev-button'>
        {firstSwiper !== 0 && (
          <Image
            src='/images/prev-arrow.svg'
            width={50}
            height={50}
            alt='スライドショーのナビゲーション'
          />
        )}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        className='flx swiper'
        spaceBetween={30}
        slidesPerView={3.5}
        onSwiper={(swiper: any) => {
          setFirstSwiper(swiper.activeIndex)
        }}
        onSlideChange={(swiper: any) => {
          setFirstSwiper(swiper.activeIndex)
        }}
        breakpoints={breakpoints}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
      >
        {portfolios &&
          portfolios.map((portfolio, index) => (
            <SwiperSlide key={index}>
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
            alt='スライドショーのナビゲーション'
          />
        )}
      </div>
    </div>
  )
}
