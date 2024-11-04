'use client'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import ScrollComponent from '../hooks/useFadeIn'
import Link from 'next/link'
import WaveBgTop from '../components/Components/ui/WaveBgTop'
import WaveBgBottom from '../components/Components/ui/WaveBgBottom'
import React, { useState, useEffect } from 'react'
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
import { TopPortfolioSlide } from '../components/Components/ui/rsc/TopPortfolioSlide'
//import { FadeUpTitle } from '../components/Components/parts/FadeUpTitle'
// import { useRecoilValue, useRecoilState } from 'recoil'
// import { todoState } from '../atoms/todoState'

const Home = () => {
  const [showBackButton, setShowBackButton] = useState(false)

  const handleScroll = () => {
    setShowBackButton(window.scrollY > 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <div className='max_width fv__container'>
            <div className='fv__element'>
              <h2 className='fv__title slide__in__right'>To You Design</h2>
              <h3 className='fv__subtitle slide__in__right'>Portfolio</h3>
            </div>
            <div className='fv__element'>
              <ScrollComponent>
                <Suspense fallback={<div>Loading...</div>}>
                  <ThreeModel />
                </Suspense>
              </ScrollComponent>
            </div>
          </div>
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
              <div className='aboutTop__flx'>
                <div className='aboutTop__flx-item'>
                  <ScrollComponent>
                    <div className='about_img'>
                      <Image
                        src='/images/myphoto.png'
                        alt='プロフィール画像'
                        fill
                        priority
                        sizes='(min-width: 768px) 50vw, 100vw'
                      />
                    </div>
                  </ScrollComponent>
                </div>
                <div className='aboutTop__flx-item'>
                  <ScrollComponent>
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
                    <p className='about__text'>
                      <span className='about__text__span'>趣味：</span>旅行、ギター
                    </p>
                    <p className='about__text'>
                      <span className='about__text__span'>資格：</span>基本情報技術者試験
                    </p>
                  </ScrollComponent>
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
            {/* <FadeUpTitle /> */}
            <ScrollComponent>
              <TopPortfolioSlide />
              <Link href={PATH.PORTFOLIO} className='contact__btn'>
                more
              </Link>
            </ScrollComponent>
          </div>
        </div>
        <WaveBgBottom />
        {/*ここから学歴*/}
        <div className='max_width'>
          <ScrollComponent>
            <h2 className='main__title' data-ja='過去の経歴'>
              History
            </h2>
          </ScrollComponent>
          <dl>
            <ScrollComponent>
              <HistoryTimelines />
            </ScrollComponent>
          </dl>
          <Link href={PATH.ABOUT} className='contact__btn padding-bottom'>
            more
          </Link>
        </div>
        <WaveBgTop />
        {/* ここからSKill*/}
        <div className='skill'>
          <div className='max_width'>
            <ScrollComponent>
              <h2 className='main__title' data-ja='スキルセット'>
                Skill
              </h2>
            </ScrollComponent>

            <h4 className='skill__title'>Frontend</h4>
            <ScrollComponent>
              <FrontSkills />
            </ScrollComponent>
            <h4 className='skill__title'>Backend</h4>
            <ScrollComponent>
              <BackSkills />
            </ScrollComponent>
            <h4 className='skill__title'>Infra</h4>
            <ScrollComponent>
              <InfraSkills />
            </ScrollComponent>
            <h4 className='skill__title'>Other</h4>
            <ScrollComponent>
              <OtherSkills />
            </ScrollComponent>
          </div>
        </div>
        <WaveBgBottom />
        {/* ここからcontact*/}
        <div className='contact'>
          <div className='max_width'>
            <ScrollComponent>
              <h2 className='main__title-white' data-ja='お問い合わせ'>
                Contact
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <div className='contact__box'>
                <h3 className='contact__box-title'>CONTACT</h3>
                <p className='contact__box-text'>お問い合わせ</p>
                <Link href={PATH.CONTACT} className='contact__btn padding-bottom'>
                  お問い合せフォームへ
                </Link>
              </div>
            </ScrollComponent>
          </div>
        </div>
      </main>
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

export default Home
