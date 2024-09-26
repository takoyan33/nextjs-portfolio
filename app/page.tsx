'use client'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Portfolio from '../components/Components/ui/PortfolioItem'
import Skill from '../components/Components/ui/Skill'
import Timeline from '../components/Components/ui/Timeline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ScrollComponent from '../hooks/useFadeIn'
import Link from 'next/link'
import WaveBgTop from '../components/Components/ui/WaveBgTop'
import WaveBgBottom from '../components/Components/ui/WaveBgBottom'
import React, { useState, useEffect } from 'react'
import { portfolioType, history, skill } from '../utils/type'
// import {
//   fetchPortfolios,
//   fetchHistory,
//   fetchFrontSkills,
//   fetchBackSkills,
//   fetchInfraSkills,
//   fetchOtherSkills,
// } from '../hooks/fetch'
import { PATH } from '../utils/path'
import { socialLinks, FVSUBTITLE } from '../utils/data'

// import { useRecoilValue, useRecoilState } from 'recoil'
// import { todoState } from '../atoms/todoState'

export default function Home() {
  const breakpoints = {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3.5,
    },
  }

  // const portfolios = await fetchPortfolios()
  // const histories = await fetchHistory()
  // const frontSkills = await fetchFrontSkills()
  // const backSkills = await fetchBackSkills()
  // const infraSkills = await fetchInfraSkills()
  // const otherSkills = await fetchOtherSkills()

  const [portfolios, setPortfolios] = useState<portfolioType[]>()
  const [histories, setHistories] = useState<history[]>()
  const [frontSkills, setFrontSkills] = useState<skill[]>()
  const [backSkills, setBackSkills] = useState<skill[]>()
  const [infraSkills, setInfraSkills] = useState<skill[]>()
  const [otherSkills, setOtherSkills] = useState<skill[]>()

  // const data = useRecoilValue(portfolioState)
  const fetchPortfolios = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
    const data = await response.json()
    await setPortfolios(data)
  }

  const fetchHistory = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/history`)
    const data = await response.json()
    await setHistories(data)
  }

  const fetchFrontSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/front`)
    const data = await response.json()
    await setFrontSkills(data)
  }

  const fetchBackSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/back`)
    const data = await response.json()
    await setBackSkills(data)
  }

  const fetchInfraSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/infra`)
    const data = await response.json()
    await setInfraSkills(data)
  }

  const fetchOtherSkills = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/skill/other`)
    const data = await response.json()
    await setOtherSkills(data)
  }
  useEffect(() => {
    fetchPortfolios()
    //setPortfolios(data)
    fetchHistory()
    fetchFrontSkills()
    fetchBackSkills()
    fetchInfraSkills()
    fetchOtherSkills()
  }, [])

  // const todos = useRecoilValue(todoState)

  const [showBackButton, setShowBackButton] = useState(false)
  const handleScroll = () => {
    setShowBackButton(window.scrollY > 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='container'>
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
      {/* <MoonLoader /> */}
      <nav className='container'>
        {/* ここからfv */}
        <div className='fv'>
          <div className='max_width'>
            <h2 className='fv__title slide__in__right'>To You Design</h2>
            <div className='content'>
              <div className='content__container'>
                <ul className='content__container__list'>
                  <li className='content__container__list__item slide__in__right'>Portfolio</li>
                  {FVSUBTITLE.map((title, index) => (
                    <li key={index} className='content__container__list__item'>
                      {title.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='wave__bg__bottom'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#13b0df'
              fillOpacity='1'
              d='M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
            ></path>
          </svg>
        </div>
        {/* ここからabout */}
        <div className='about'>
          <div className='max_width'>
            <ScrollComponent>
              <h2 className='main__title' data-ja='To You Designについて'>
                About
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <div className='flx'>
                <div className='flx_el'>
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
                <div className='flx_el'>
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
                    フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
                    現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
                  </p>
                  <p className='about__text'>趣味：旅行、ギター</p>
                  <p className='about__text'>資格：基本情報技術者試験</p>
                </div>
              </div>
            </ScrollComponent>
          </div>
        </div>
        {/*  ここからポートフォリオ*/}
        <WaveBgTop />
        <div className='portfolio'>
          <div className='max_width'>
            <ScrollComponent>
              <h2 className='main__title' data-ja='ポートフォリオ'>
                Portfolio
              </h2>
            </ScrollComponent>
            <div className='portfolio-content'>
              <div className='prev-button'>
                <Image
                  src='/images/prev-arrow.svg'
                  width={50}
                  height={50}
                  alt='スライドショーのナビゲーション'
                />
              </div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className='flx swiper'
                spaceBetween={30}
                slidesPerView={3.5}
                breakpoints={breakpoints}
                navigation={{
                  nextEl: '.next-button',
                  prevEl: '.prev-button',
                }}
              >
                {portfolios &&
                  portfolios.map((portfolio, index) => (
                    <SwiperSlide key={index}>
                      <Portfolio
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
                <Image
                  src='/images/next-arrow.svg'
                  width={50}
                  height={50}
                  alt='スライドショーのナビゲーション'
                />
              </div>
            </div>
            <Link href={PATH.PORTFOLIO} className='main__btn'>
              more
            </Link>
          </div>
        </div>
        <WaveBgBottom />
        {/*ここから学歴*/}
        <div className='max_width'>
          <div className='flx'>
            <div className='flx_el'>
              <ScrollComponent>
                <h2 className='main__title' data-ja='過去の経歴'>
                  History
                </h2>
              </ScrollComponent>
            </div>
            <dl>
              {histories &&
                histories.map((history, index) => (
                  <Timeline
                    key={index}
                    title={history.title}
                    date={history.date}
                    body={history.body}
                  />
                ))}
            </dl>
          </div>
          <Link href={PATH.ABOUT} className='main__btn'>
            more
          </Link>
        </div>
        {/* ここからSKill*/}
        <WaveBgTop />
        <div className='skill'>
          <div className='max_width'>
            <ScrollComponent>
              <h2 className='main__title' data-ja='スキルセット'>
                Skill
              </h2>
            </ScrollComponent>

            <h4 className='skill__title'>Frontend</h4>
            <div className='skill__flx'>
              {frontSkills &&
                frontSkills.map((skill, index) => (
                  <Skill
                    key={index}
                    name={skill.name}
                    rank={skill.rank}
                    tag={skill.tag}
                    icon={skill.icon}
                    about={skill.about}
                  />
                ))}
            </div>
            <h4 className='skill__title'>Backend</h4>
            <div className='skill__flx'>
              {backSkills &&
                backSkills.map((skill, index) => (
                  <Skill
                    key={index}
                    name={skill.name}
                    rank={skill.rank}
                    tag={skill.tag}
                    icon={skill.icon}
                    about={skill.about}
                  />
                ))}
            </div>
            <h4 className='skill__title'>Infra</h4>
            <div className='skill__flx'>
              {infraSkills &&
                infraSkills.map((skill, index) => (
                  <Skill
                    key={index}
                    name={skill.name}
                    rank={skill.rank}
                    tag={skill.tag}
                    icon={skill.icon}
                    about={skill.about}
                  />
                ))}
            </div>
            <h4 className='skill__title'>Other</h4>
            <div className='skill__flx'>
              {otherSkills &&
                otherSkills.map((skill, index) => (
                  <Skill
                    key={index}
                    name={skill.name}
                    rank={skill.rank}
                    tag={skill.tag}
                    icon={skill.icon}
                    about={skill.about}
                  />
                ))}
            </div>
          </div>
        </div>
        <WaveBgBottom />
        {/* ここからcontact*/}
        <div className='contact max_width'>
          <div>
            <ScrollComponent>
              <h2 className='main__title' data-ja='お問い合わせ'>
                Contact
              </h2>
            </ScrollComponent>
            <p className='contact__text'>お問い合わせの方は、フォームを記入してください。</p>
            <ScrollComponent>
              <Link href={PATH.CONTACT} className='main__btn__long padding-bottom'>
                お問い合わせ
              </Link>
            </ScrollComponent>
          </div>
        </div>
      </nav>
      {showBackButton && (
        <button
          className='back__btn'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <Image src='/images/top-arrow.svg' height={30} width={30} alt='arrow' />
        </button>
      )}
    </div>
  )
}
