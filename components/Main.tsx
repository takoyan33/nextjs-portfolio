import Image from 'next/image'
import Portfolio from './Components/ui/PortfolioItem'
import Skill from './Components/ui/Skill'
import Timeline from './Components/ui/Timeline'
import {
  PORTFOLIO_LIST,
  FRONT_SKILL_LIST,
  BACK_SKILL_LIST,
  INFRA_SKILL_LIST,
  OTHER_SKILL_LIST,
  HISTORY_LIST,
  LICENSE_LIST,
} from './Components/data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Main() {
  const breakpoints = {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3.5,
    },
  }

  return (
    <nav className='container'>
      {/* ここからfv */}
      <div className='fv'>
        <div className='max_width'>
          <h2 className='fv__title'>To You Design</h2>
          <h3 className='fv__subtitle'>ポートフォリオサイト</h3>
        </div>
      </div>

      {/* ここからabout */}
      <div className='about padding'>
        <div className='max_width'>
          <h2 className='main__title'>About</h2>
          <h3 className='main__subtitle'>To You Designについて</h3>
          <div className='flx'>
            <div className='flx_el'>
              <div className='tac'>
                <img src='/images/myphoto.png' className='about_img' alt='プロフィール画像' />
              </div>
            </div>
            <div className='flx_el'>
              <h4 className='about__title'>阿部 舜平</h4>
              <div className='about__flx'>
                <a href='https://qiita.com/harrier2070' target='_blank'>
                  <img src='/images/github-logo.png' className='about_snsLogo' alt='sns' />
                </a>

                <a href='https://zenn.dev/643866' target='_blank'>
                  <img src='/images/qiita-logo.png' className='about_snsLogo' alt='sns' />
                </a>

                <a href='https://github.com/takoyan33' target='_blank'>
                  <img src='/images/logo-only.svg' className='about_snsLogo' alt='sns' />
                </a>
              </div>
              <p className='about__text'>
                フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。
                現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
              </p>
              <p className='about__text'>趣味：旅行、ギター</p>
              <p className='about__text'>資格：基本情報技術者試験</p>
            </div>
          </div>
        </div>
      </div>

      {/*  ここからポートフォリオ*/}
      <div className='portfolio'>
        <div className='max_width'>
          <h2 className='main__title'>Portfolio</h2>
          <h3 className='main__subtitle'>ポートフォリオ</h3>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className='flx padding swiper'
            spaceBetween={30}
            slidesPerView={3.5}
            breakpoints={breakpoints}
            navigation={{
              nextEl: '.next-button',
              prevEl: '.prev-button',
            }}
          >
            {PORTFOLIO_LIST.map((portfolio, index) => (
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
          <div className='navigation-container'>
            <div className='prev-button'>
              <img src='/images/prev-arrow.svg' className='' alt='スライドショーのナビゲーション' />
            </div>
            <div className='next-button'>
              <img src='/images/next-arrow.svg' className='' alt='スライドショーのナビゲーション' />
            </div>
          </div>
          <a href='Portfolio' className='main__btn'>
            more
          </a>
        </div>
      </div>

      {/*ここから学歴*/}
      <div className='padding'>
        <div className='max_width'>
          <div className='flx'>
            <div className='flx_el'>
              <h2 className='main__title'>History</h2>
              <h3 className='main__subtitle'>過去の経歴</h3>
            </div>
            <dl>
              {HISTORY_LIST.map((history, index) => (
                <Timeline
                  key={index}
                  title={history.title}
                  date={history.date}
                  body={history.body}
                />
              ))}
            </dl>
          </div>
          <a href='About' className='main__btn'>
            more
          </a>
        </div>
      </div>

      {/* ここからSKill*/}
      <div className='skill padding'>
        <div className='max_width'>
          <h2 className='main__title'>Skill</h2>
          <h3 className='main__subtitle'>スキルセット</h3>

          <h4 className='skill__title'>Frontend</h4>
          <div className='skill__flx'>
            {FRONT_SKILL_LIST.map((skill, index) => (
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
            {BACK_SKILL_LIST.map((skill, index) => (
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
            {INFRA_SKILL_LIST.map((skill, index) => (
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
            {OTHER_SKILL_LIST.map((skill, index) => (
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

      {/* ここからcontact*/}
      <div className='contact padding'>
        <div className='max_width'>
          <div className='padding'>
            <h2 className='main__title'>Contact</h2>
            <h3 className='main__subtitle'>お問い合わせ</h3>
            <br></br>
            <p className='contact__text'>
              お問い合わせの方は、下記のメールアドレスからお願いします。
            </p>
            <a href='mailto:harrier2070@gmail.com' target='_blank' className='main__btn__long'>
              harrier2070@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
