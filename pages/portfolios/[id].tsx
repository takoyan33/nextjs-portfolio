import Header from '../../components/Components/ui/Header'
import Footer from '../../components/Components/ui/Footer'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PORTFOLIO_LIST } from '../../components/Components/data/data'
import Image from 'next/image'

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
            <div className='portfolioDetail__element__topImg'>
              <Image
                src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].topImg}
                fill
                alt='ポートフォリオ画像'
              />
            </div>
            <div className='portfolioDetail__element__text'>
              <h2 className='portfolioDetail__element__title'>
                {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].name}
              </h2>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].tag.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
            </div>
            <h3 className='portfolioDetail__element__subtitle'>About</h3>
            <div className='portfolioDetail__element__img'>
              <Image
                src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].aboutImg}
                className='portfolioDetail__element__img'
                alt='ポートフォリオ画像'
                fill
              />
            </div>
            <div
              className='portfolioDetail__element__text'
              dangerouslySetInnerHTML={{
                __html: PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].about,
              }}
            ></div>
            <h3 className='portfolioDetail__element__subtitle'>機能一覧</h3>
            <div className='portfolioDetail__element__img'>
              <Image
                src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].functionImg}
                className='portfolioDetail__element__img'
                alt='ポートフォリオ画像'
                fill
              />
            </div>
            <div
              className='portfolioDetail__element__text'
              dangerouslySetInnerHTML={{
                __html: PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].function,
              }}
            ></div>
            <h3 className='portfolioDetail__element__subtitle'>アピール</h3>
            <div className='portfolioDetail__element__img'>
              <Image
                src={PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].appealImg}
                className='portfolioDetail__element__img'
                alt='ポートフォリオ画像'
                fill
              />
            </div>
            <div
              className='portfolioDetail__element__text'
              dangerouslySetInnerHTML={{
                __html: PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].appeal,
              }}
            ></div>

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
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].back_skill &&
                PORTFOLIO_LIST[id - 1].back_skill.length > 0 && (
                  <div>
                    <h4>バックエンド</h4>
                    <ul className='portfolioDetail__element__tagList'>
                      {PORTFOLIO_LIST[id - 1].back_skill.map((skill, index) => (
                        <li className='portfolioDetail__element__tag' key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              <h4>インフラ</h4>
              {PORTFOLIO_LIST[id - 1] &&
                PORTFOLIO_LIST[id - 1].infra_skill.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
            </div>
            {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].url.length > 0 && (
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
            )}
            {PORTFOLIO_LIST[id - 1] && PORTFOLIO_LIST[id - 1].github.length > 0 && (
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
            )}
          </section>
        </div>
      </nav>
      <Footer />
    </>
  )
}

export default Post
