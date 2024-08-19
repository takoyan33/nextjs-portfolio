import Header from '../../components/Components/ui/Header'
import Footer from '../../components/Components/ui/Footer'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PORTFOLIO_LIST } from '../../components/Components/data/data'

const Post = () => {
  const router = useRouter()
  const { id }: any = router.query

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
            <div className='portfolioDetail__element__text'>
              <h2 className='portfolioDetail__element__title'>
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].name}
              </h2>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].front_skill.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
            </div>
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
            <div className='portfolioDetail__element__text'>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].appeal}
            </div>

            <div className='portfolioDetail__element__text'>
              <h3 className='portfolioDetail__element__subtitle'>制作期間</h3>
              {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].time}
            </div>
            <div className='portfolioDetail__element__text'>
              <h3 className='portfolioDetail__element__subtitle'>使用技術</h3>
              <h4>フロントエンド</h4>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].front_skill.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
              <h4>バックエンド</h4>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].back_skill.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
              <h4>インフラ</h4>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].infra_skill.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
            </div>
            <div className='portfolioDetail__element__text'>
              <h3 className='portfolioDetail__element__subtitle'>URL</h3>
              <a
                href={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].url}
                className='portfolioDetail__element__link'
                target='_blank'
              >
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].url}
              </a>
            </div>
            <div className='portfolioDetail__element__text'>
              <h3 className='portfolioDetail__element__subtitle'>Github</h3>
              <a
                href={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].github}
                className='portfolioDetail__element__link'
                target='_blank'
              >
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].github}
              </a>
            </div>
          </section>
        </div>
      </nav>
      <Footer />
    </>
  )
}

export default Post
