import Image from 'next/image'
import Portfolio from './Components/ui/PortfolioItem'
import Skill from './Components/ui/Skill'
import Timeline from './Components/ui/Timeline'
import {
  FRONT_SKILL_LIST,
  BACK_SKILL_LIST,
  INFRA_SKILL_LIST,
  OTHER_SKILL_LIST,
} from './Components/data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ScrollComponent from './hooks/useFadeIn'
import Link from 'next/link'
import WaveBgTop from './Components/ui/WaveBgTop'
import WaveBgBottom from './Components/ui/WaveBgBottom'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
  const breakpoints = {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3.5,
    },
  }

  const [portfolios, setPortfolios] = useState(null)
  const [histories, setHistories] = useState(null)
  const [frontSkills, setFrontSkills] = useState(null)
  const [backSkills, setBackSkills] = useState(null)
  const [infraSkills, setInfraSkills] = useState(null)
  const [otherSkills, setOtherSkills] = useState(null)

  const fetchPortfolios = async () => {
    const response = await fetch('http://localhost:3000/api/portfolio')
    const data = await response.json()
    await setPortfolios(data)
  }

  const fetchHistory = async () => {
    const response = await fetch('http://localhost:3000/api/history')
    const data = await response.json()
    await setHistories(data)
  }

  const fetchFrontSkills = async () => {
    const response = await fetch('http://localhost:3000/api/skill/front')
    const data = await response.json()
    await setFrontSkills(data)
  }

  const fetchBackSkills = async () => {
    const response = await fetch('http://localhost:3000/api/skill/back')
    const data = await response.json()
    await setBackSkills(data)
  }

  const fetchInfraSkills = async () => {
    const response = await fetch('http://localhost:3000/api/skill/infra')
    const data = await response.json()
    await setInfraSkills(data)
  }

  const fetchOtherSkills = async () => {
    const response = await fetch('http://localhost:3000/api/skill/other')
    const data = await response.json()
    await setOtherSkills(data)
  }
  useEffect(() => {
    fetchPortfolios()
    fetchHistory()
    fetchFrontSkills()
    fetchBackSkills()
    fetchInfraSkills()
    fetchOtherSkills()
  }, [])

  return (
    <nav className='container'>
      {/* ここからfv */}
      <div className='fv'>
        <div className='max_width'>
          <h2 className='fv__title slide__in__right'>To You Design</h2>
          <div className='content'>
            <div className='content__container'>
              <ul className='content__container__list'>
                <li className='content__container__list__item slide__in__right'>Portfolio</li>
                <li className='content__container__list__item'>Frontend</li>
                <li className='content__container__list__item'>Shumpei abe</li>
                <li className='content__container__list__item'>Hello world</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='wave__bg__bottom'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#13b0df'
            fill-opacity='1'
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
                  <Link href='https://github.com/takoyan33' target='_blank'>
                    <Image
                      src='/images/github-logo.png'
                      className='about_snsLogo'
                      alt='sns'
                      height={30}
                      width={30}
                    />
                  </Link>

                  <Link href='https://qiita.com/harrier2070' target='_blank'>
                    <Image
                      src='/images/qiita-logo.png'
                      className='about_snsLogo'
                      alt='sns'
                      height={30}
                      width={30}
                    />
                  </Link>

                  <Link href='https://zenn.dev/643866 ' target='_blank'>
                    <Image
                      src='/images/logo-only.svg'
                      className='about_snsLogo'
                      alt='sns'
                      height={30}
                      width={30}
                    />
                  </Link>
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
          <ScrollComponent>
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
                portfolios.portfolio.map((portfolio, index) => (
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
          </ScrollComponent>
          <div className='navigation-container'>
            <div className='prev-button'>
              <Image
                src='/images/prev-arrow.svg'
                width={50}
                height={50}
                alt='スライドショーのナビゲーション'
              />
            </div>
            <div className='next-button'>
              <Image
                src='/images/next-arrow.svg'
                width={50}
                height={50}
                alt='スライドショーのナビゲーション'
              />
            </div>
          </div>
          <Link href='Portfolio' className='main__btn'>
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
              histories.history.map((history, index) => (
                <Timeline
                  key={index}
                  title={history.title}
                  date={history.date}
                  body={history.body}
                />
              ))}
          </dl>
        </div>
        <Link href='About' className='main__btn'>
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
              frontSkills.skill.map((skill, index) => (
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
              backSkills.skill.map((skill, index) => (
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
              infraSkills.skill.map((skill, index) => (
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
              otherSkills.skill.map((skill, index) => (
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
          <p className='contact__text'>
            お問い合わせの方は、下記のメールアドレスからお願いします。
          </p>
          <ScrollComponent>
            <Link
              href='mailto:harrier2070%40gmail.com'
              target='_blank'
              className='main__btn__long padding-bottom'
            >
              お問い合わせ
            </Link>
          </ScrollComponent>
        </div>
      </div>
    </nav>
  )
}
