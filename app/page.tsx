'use client'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import PortfolioItemTop from '../components/Components/ui/PortfolioItemTop'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import { Controller } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// import ScrollComponent from '../hooks/useFadeIn'
import Link from 'next/link'
import WaveBgTop from '../components/Components/ui/WaveBgTop'
import WaveBgBottom from '../components/Components/ui/WaveBgBottom'
import React, { useState, useEffect } from 'react'
import { portfolioType } from '../utils/type'
import { CommonButton } from '../components/Components/ui/CommonButton'
import { HistoryTimelines } from '../components/Components/ui/rsc/HistoryTimelines'
import { Suspense } from 'react'
import { PATH } from '../utils/path'
import { socialLinks, FVSUBTITLE } from '../utils/data'
import { FrontSkills } from '../components/Components/ui/rsc/FrontSkills'
import { BackSkills } from '../components/Components/ui/rsc/BackSkills'
import { InfraSkills } from '../components/Components/ui/rsc/InfraSkills'
import { OtherSkills } from '../components/Components/ui/rsc/OtherSkills'
import ThreeModel from '../components/Components/parts/ThreeModel'
//import { FadeUpTitle } from '../components/Components/parts/FadeUpTitle'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import { todoState } from '../atoms/todoState'

const Home = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3.5,
    },
  }

  // const [portfolios, setPortfolios] = useState<portfolioType[]>()

  // // const data = useRecoilValue(portfolioState)
  // const fetchPortfolios = async () => {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
  //   const data = await response.json()
  //   await setPortfolios(data)
  // }

  // useEffect(() => {
  //   fetchPortfolios()
  // }, [])

  // const todos = useRecoilValue(todoState)

  // const [showBackButton, setShowBackButton] = useState(false)

  // const handleScroll = () => {
  //   setShowBackButton(window.scrollY > 150)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // const [firstSwiper, setFirstSwiper] = useState(0)

  return (
    <div>
      <Head>
        <title>To You Design</title>
        <link rel='icon' href='/favicon.ico' />
        <Script
          src='https://kit.fontawesome.com/bb61864944.js'
          crossOrigin='anonymous'
          strategy='afterInteractive'
        />
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <main aria-label='本文'>
        {/* ここからfv */}
        <div className='fv'>
          <div className='max_width fv_flx'>
            <div className='fv_flx_el'>
              <h2 className='fv__title slide__in__right'>To You Design</h2>
              <li className='fv__title slide__in__right'>Portfolio</li>
              <div className='content'>
                <div className='content__container fv_flx_el'>
                  {/* <ul className='content__container__list'>
                    <li className='content__container__list__item slide__in__right'>Portfolio</li>
                    {FVSUBTITLE.map((title, index) => (
                      <li key={index} className='content__container__list__item'>
                        {title.text}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='fv_flx_el'>
              {/* <ScrollComponent> */}
              <ThreeModel />
              {/* </ScrollComponent> */}
            </div>
          </div>
        </div>
        {/* <div className='wave__bg__bottom'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#6499ff'
              fillOpacity='1'
              d='M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
        </div> */}
        {/* ここからabout */}
        <div className='about'>
          <div className='max_width'>
            {/* <ScrollComponent> */}
            <h2 className='main__title' data-ja='To You Designについて'>
              About
            </h2>
            {/* </ScrollComponent> */}
            {/* <ScrollComponent> */}
            <div className='aboutTop_flx'>
              <div className='aboutTop_flx_el'>
                <div className='about_img'>
                  <Image
                    src='/images/myphoto.png'
                    className=''
                    alt='プロフィール画像'
                    fill
                    priority
                    sizes='(min-width: 768px) 50vw, 100vw'
                  />
                </div>
              </div>
              <div className='aboutTop_flx_el'>
                <h4 className='about__title'>阿部 舜平</h4>
                <div className='about__flx'>
                  {socialLinks.map((link) => (
                    <Link key={link.href} href={link.href} target='_blank'>
                      <Image
                        src={link.src}
                        className='about_snsLogo'
                        alt={link.alt}
                        height={link.height}
                        width={link.width}
                      />
                    </Link>
                  ))}
                </div>
                <p className='about__text'>
                  北海道在住の社会人1年目のエンジニア。<br></br>
                  大学在学中に、プログラミングに興味を持ち、html,cssから学習を始めました。
                  <br></br>
                  文系大学を卒業後、フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
                  <br></br>
                  現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
                </p>
                <p className='about__text'>趣味：旅行、ギター</p>
                <p className='about__text'>資格：基本情報技術者試験</p>
              </div>
            </div>
            {/* </ScrollComponent> */}
          </div>
        </div>
        {/*  ここからポートフォリオ*/}
        <WaveBgTop />
        <div className='portfolio'>
          <div className='max_width'>
            {/* <ScrollComponent> */}
            <h2 className='main__title' data-ja='ポートフォリオ'>
              Portfolio
            </h2>
            {/* </ScrollComponent> */}
            {/* <FadeUpTitle /> */}
            <div className='portfolio-content'>
              <div className='prev-button'>
                {/* {firstSwiper !== 0 && (
                  <Image
                    src='/images/prev-arrow.svg'
                    width={50}
                    height={50}
                    alt='スライドショーのナビゲーション'
                  />
                )} */}
              </div>
              {/* 
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
              > */}
              {/* {portfolios &&
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
                  ))} */}
              {/* </Swiper> */}
              <div className='next-button'>
                {/* {firstSwiper < 3 && (
                  <Image
                    src='/images/next-arrow.svg'
                    width={50}
                    height={50}
                    alt='スライドショーのナビゲーション'
                  />
                )} */}
              </div>
            </div>
            <CommonButton text='more' link={PATH.PORTFOLIO} />
          </div>
        </div>
        <WaveBgBottom />
        {/*ここから学歴*/}
        <div className='max_width'>
          {/* <ScrollComponent> */}
          <h2 className='main__title' data-ja='過去の経歴'>
            History
          </h2>
          {/* </ScrollComponent> */}
          <dl>
            {/* <ScrollComponent> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <HistoryTimelines />
            </Suspense>
            {/* </ScrollComponent> */}
          </dl>
          <CommonButton text='more' link={PATH.ABOUT} />
        </div>
        {/* ここからSKill*/}
        <WaveBgTop />

        <div className='skill'>
          <div className='max_width'>
            {/* <ScrollComponent> */}
            <h2 className='main__title' data-ja='スキルセット'>
              Skill
            </h2>
            {/* </ScrollComponent> */}

            <h4 className='skill__title'>Frontend</h4>
            {/* <ScrollComponent> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <FrontSkills />
            </Suspense>
            {/* </ScrollComponent> */}
            {/* </div> */}
            <h4 className='skill__title'>Backend</h4>
            {/* <ScrollComponent> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <BackSkills />
            </Suspense>
            {/* // </ScrollComponent> */}
            <h4 className='skill__title'>Infra</h4>
            {/* <ScrollComponent> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <InfraSkills />
            </Suspense>
            {/* // </ScrollComponent> */}
            <h4 className='skill__title'>Other</h4>
            {/* <ScrollComponent> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Server Component */}
              <OtherSkills />
            </Suspense>
            {/* // </ScrollComponent> */}
          </div>
        </div>
        <WaveBgBottom />
        {/* ここからcontact*/}
        <div className='contact'>
          <div className='max_width'>
            {/* <ScrollComponent> */}
            <h2 className='main__title__white' data-ja='お問い合わせ'>
              Contact
            </h2>
            {/* </ScrollComponent> */}
            {/* <ScrollComponent> */}
            <div className='contact__box'>
              <h3 className='contact__box__title'>CONTACT</h3>
              <p className='contact__box__text'>お問い合わせ</p>
              <Link href={PATH.CONTACT} className='contact__btn padding-bottom'>
                お問い合せフォームへ
              </Link>
            </div>
            {/* </ScrollComponent> */}
          </div>
        </div>
      </main>
      {/* {showBackButton && (
        <button
          className='back__btn'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <Image src='/images/top-arrow.svg' height={30} width={30} alt='arrow' />
        </button>
      )} */}
    </div>
  )
}

export default Home
