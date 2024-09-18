'use client'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Portfolio } from '../../../utils/type'

const Post = () => {
  const params = useParams()
  const id: any | null = params?.id ?? params?.id

  const [portfolios, setPortfolios] = useState<Portfolio>()

  const fetchPortfolios = async (id) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/portfolio`)
      const data = await response.json()
      const filteredPortfolio = data.portfolio.find((portfolio) => portfolio.id == id)
      await setPortfolios(filteredPortfolio)
    } catch (error) {
      console.error('Error fetching portfolios:', error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchPortfolios(id)
    }
  }, [id])

  return (
    <>
      <Head>
        <title>To You Design - ポートフォリオ</title>
      </Head>
      {portfolios ? (
        <nav className='container max_width'>
          <div style={{ textAlign: 'center', padding: 50 }}>
            <section className='portfolioDetail'>
              <div className='portfolioDetail__element__topImg'>
                {portfolios.topImg && (
                  <Image
                    src={portfolios.topImg}
                    fill
                    sizes='(min-width: 768px) 50vw'
                    priority
                    alt='ポートフォリオ画像'
                  />
                )}
              </div>
              <div className='portfolioDetail__element__text'>
                <h2 className='portfolioDetail__element__title'>{portfolios.name}</h2>
                {portfolios.tag.map((skill, index) => (
                  <li className='portfolioDetail__element__tag' key={index}>
                    {skill}
                  </li>
                ))}
              </div>
              <h3 className='portfolioDetail__element__subtitle'>About</h3>
              <div className='portfolioDetail__element__img'>
                {portfolios.aboutImg && (
                  <Image
                    src={portfolios.aboutImg}
                    className='portfolioDetail__element__img'
                    alt='ポートフォリオ画像'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                  />
                )}
              </div>
              <div
                className='portfolioDetail__element__text'
                dangerouslySetInnerHTML={{
                  __html: portfolios?.about,
                }}
              ></div>
              <h3 className='portfolioDetail__element__subtitle'>機能一覧</h3>
              <div className='portfolioDetail__element__img'>
                {portfolios?.functionImg && (
                  <Image
                    src={portfolios.functionImg}
                    className='portfolioDetail__element__img'
                    alt='ポートフォリオ画像'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                  />
                )}
              </div>
              <div
                className='portfolioDetail__element__text'
                dangerouslySetInnerHTML={{
                  __html: portfolios.function,
                }}
              ></div>
              <h3 className='portfolioDetail__element__subtitle'>アピール</h3>
              <div className='portfolioDetail__element__img'>
                {portfolios?.appealImg && (
                  <Image
                    src={portfolios.appealImg}
                    className='portfolioDetail__element__img'
                    alt='ポートフォリオ画像'
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                  />
                )}
              </div>
              <div
                className='portfolioDetail__element__text'
                dangerouslySetInnerHTML={{
                  __html: portfolios.appeal,
                }}
              ></div>

              <div className='portfolioDetail__element__text'>
                <h3 className='portfolioDetail__element__subtitle'>制作期間</h3>
                {portfolios.time}
              </div>
              <div className='portfolioDetail__element__text'>
                <h3 className='portfolioDetail__element__subtitle'>使用技術</h3>
                <h4>フロントエンド</h4>
                <ul className='portfolioDetail__element__tagList'>
                  {portfolios.front_skill.map((skill, index) => (
                    <li className='portfolioDetail__element__tag' key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
                {portfolios.back_skill && portfolios.back_skill.length > 0 && (
                  <div>
                    <h4>バックエンド</h4>
                    <ul className='portfolioDetail__element__tagList'>
                      {portfolios.back_skill.map((skill, index) => (
                        <li className='portfolioDetail__element__tag' key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {portfolios.infra_skill && portfolios.infra_skill.length > 0 && (
                  <div>
                    <h4>インフラ</h4>
                    <ul className='portfolioDetail__element__tagList'>
                      {portfolios.infra_skill.map((skill, index) => (
                        <li className='portfolioDetail__element__tag' key={index}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {portfolios.front_url && (
                <div className='portfolioDetail__element__text'>
                  <h3 className='portfolioDetail__element__subtitle'>URL</h3>
                  <Link
                    href={portfolios.front_url}
                    className='portfolioDetail__element__link'
                    target='_blank'
                  >
                    {portfolios.front_url}
                  </Link>
                </div>
              )}
              {portfolios.front_github && (
                <div className='portfolioDetail__element__text'>
                  <h3 className='portfolioDetail__element__subtitle'>Github</h3>
                  <Link
                    href={portfolios.front_github}
                    className='portfolioDetail__element__link'
                    target='_blank'
                  >
                    {portfolios.front_github}
                  </Link>
                </div>
              )}
              {portfolios.back_url && (
                <div className='portfolioDetail__element__text'>
                  <h3 className='portfolioDetail__element__subtitle'>バックエンドURL</h3>
                  <Link
                    href={portfolios.back_url}
                    className='portfolioDetail__element__link'
                    target='_blank'
                  >
                    {portfolios.back_url}
                  </Link>
                </div>
              )}
              {portfolios.back_github && (
                <div className='portfolioDetail__element__text'>
                  <h3 className='portfolioDetail__element__subtitle'>バックエンドGithub</h3>
                  <Link
                    href={portfolios.back_github}
                    className='portfolioDetail__element__link'
                    target='_blank'
                  >
                    {portfolios.back_github}
                  </Link>
                </div>
              )}
            </section>
          </div>
        </nav>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Post
