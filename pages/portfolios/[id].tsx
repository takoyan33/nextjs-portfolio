import Header from '../../components/Components/ui/Header'
import Footer from '../../components/Components/ui/Footer'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PORTFOLIO_LIST } from '../../components/Components/data/data'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  // const matchPortfolio = PORTFOLIO_LIST.find((portfolioItem) => portfolioItem.id === id)
  return (
    <>
      <Head>
        <title>To You Design - ポートフォリオ</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://kit.fontawesome.com/bb61864944.js' crossOrigin='anonymous'></script>
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <Header />
      <nav className='container max_width'>
        <div style={{ textAlign: 'center', padding: 50 }}>
          <section className='portfolioDetail'>
            <img
              src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].topImg}
              className='portfolioDetail__element__img'
              alt='ポートフォリオ画像'
            />

            <h2 className='portfolioDetail__element__title'>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].name}
            </h2>
            <h3 className='portfolioDetail__element__subtitle'>About</h3>
            <img
              src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].topImg}
              className='portfolioDetail__element__img'
              alt='ポートフォリオ画像'
            />
            <p className='portfolioDetail__element__text'>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].about}
            </p>
            <h3 className='portfolioDetail__element__subtitle'>機能一覧</h3>
            <img
              src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].topImg}
              className='portfolioDetail__element__img'
              alt='ポートフォリオ画像'
            />
            <p className='portfolioDetail__element__text'>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].function}
            </p>
            <h3 className='portfolioDetail__element__subtitle'>アピール</h3>
            <img
              src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].topImg}
              className='portfolioDetail__element__img'
              alt='ポートフォリオ画像'
            />
            <p className='portfolioDetail__element__text'>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].appeal}
            </p>

            <p className='portfolioDetail__element__text'>
              制作期間<br></br>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].time}
            </p>
            <div className='portfolioDetail__element__text'>
              使用技術<br></br>
              <p>フロントエンド</p>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].front_skill.map((skill, index) => (
                  <li className={PORTFOLIO_LIST[id - 1].color} key={index}>
                    {skill}
                  </li>
                ))}
              <p>バックエンド</p>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].back_skill.map((skill, index) => (
                  <li className={PORTFOLIO_LIST[id - 1].color} key={index}>
                    {skill}
                  </li>
                ))}
              <p>インフラ</p>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].infra_skill.map((skill, index) => (
                  <li
                    className={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].color}
                    key={index}
                  >
                    {skill}
                  </li>
                ))}
            </div>
            <p className='portfolioDetail__element__text'>
              概要<br></br>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].about}
            </p>
            <p className='portfolioDetail__element__text'>
              URL
              <a
                href={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].url}
                className='portfolioDetail__element__link'
                target='_blank'
              >
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].url}
              </a>
            </p>
            <p className='portfolioDetail__element__text'>
              Github
              <a
                href={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].github}
                className='portfolioDetail__element__link'
                target='_blank'
              >
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].github}
              </a>
            </p>
          </section>
        </div>
      </nav>
      <Footer />
    </>
  )
}

export default Post
