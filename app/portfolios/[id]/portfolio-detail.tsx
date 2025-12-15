"use client"

import { Breadcrumb } from "@/components/ui"
import { CommonModal } from "@/components/ui/common-modal"
import { PostNavigation } from "@/components/ui/post-navigation"
import { CloseModal, OpenModal } from "@/hooks/use-modal"
import type { PortfolioType } from "@/types"
import { PATH } from "@/utils/path"
import parse from "html-react-parser"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface PortfolioDetailProps {
  portfolio: PortfolioType
}

export const PortfolioDetail = ({ portfolio }: PortfolioDetailProps) => {
  //サムネイル
  const [isOpen, setIsOpen] = useState<boolean>(false)
  //About
  const [isOpen2, setIsOpen2] = useState<boolean>(false)
  //function
  const [isOpen4, setIsOpen4] = useState<boolean>(false)
  //appeal
  const [isOpen3, setIsOpen3] = useState<boolean>(false)

  /**
   * セクションにスクロール
   * @param id セクションのid
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main>
      <article className="portfolioDetail__top">
        <div className="max_width">
          <Breadcrumb
            items={[
              { name: "Portfolio", link: PATH.PORTFOLIO },
              { name: portfolio.name, link: "" },
            ]}
          />
        </div>
        <section className="portfolioDetail max_width">
          <p className="portfolioDetail__element-date">{portfolio.date}</p>
          <h2 className="portfolioDetail__element-title">{portfolio.name}</h2>
          <ul className="portfolioDetail__element-tagList">
            {portfolio.tag.map((skill) => (
              <li className="portfolioDetail__element-tag" key={skill}>
                #{skill}
              </li>
            ))}
          </ul>

          {/* 目次を追加 */}
          <div className="portfolioDetail__toc">
            <h3 className="portfolioDetail__toc-title">目次</h3>
            <ul className="portfolioDetail__toc-list">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  className="portfolioDetail__toc-link"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("functions")}
                  className="portfolioDetail__toc-link"
                >
                  機能一覧
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("appeal")}
                  className="portfolioDetail__toc-link"
                >
                  アピール
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("development")}
                  className="portfolioDetail__toc-link"
                >
                  制作期間・使用技術
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("links")}
                  className="portfolioDetail__toc-link"
                >
                  リンク
                </button>
              </li>
            </ul>
          </div>

          <div className="portfolioDetail__element-topImg">
            <button onClick={() => OpenModal(setIsOpen)} type="button">
              {portfolio.topImg && (
                <Image
                  src={portfolio.topImg}
                  width={400}
                  height={600}
                  sizes="(min-width: 768px) 50vw"
                  priority
                  alt="ポートフォリオのトップ画像"
                />
              )}
            </button>
          </div>
          <CommonModal
            isOpen={isOpen}
            closeModal={() => CloseModal(setIsOpen)}
            img={portfolio.topImg}
          />
          <h3 className="portfolioDetail__element-subtitle" id="about">
            About
          </h3>
          <div className="portfolioDetail__element-img">
            <button onClick={() => OpenModal(setIsOpen2)} type="button">
              {portfolio.aboutImg && (
                <Image
                  src={portfolio.aboutImg}
                  className="portfolioDetail__element-img"
                  alt="ポートフォリオの概要画像"
                  width={400}
                  height={600}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              )}
            </button>
          </div>
          <CommonModal
            isOpen={isOpen2}
            closeModal={() => CloseModal(setIsOpen2)}
            img={portfolio.aboutImg}
          />
          <div className="portfolioDetail__element-text">{parse(portfolio?.about)}</div>
          <h3 className="portfolioDetail__element-subtitle" id="functions">
            機能一覧
          </h3>
          <div className="portfolioDetail__element-img">
            <button onClick={() => OpenModal(setIsOpen3)} type="button">
              {portfolio?.functionImg && (
                <Image
                  src={portfolio.functionImg}
                  className="portfolioDetail__element-img"
                  alt="ポートフォリオの機能一覧画像"
                  width={400}
                  height={600}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              )}
            </button>
          </div>
          <CommonModal
            isOpen={isOpen3}
            closeModal={() => CloseModal(setIsOpen3)}
            img={portfolio.functionImg}
          />
          <div className="portfolioDetail__element-text">{parse(portfolio?.function)}</div>
          <h3 className="portfolioDetail__element-subtitle" id="appeal">
            アピール
          </h3>
          <div className="portfolioDetail__element-img">
            <button onClick={() => OpenModal(setIsOpen4)} type="button">
              {portfolio?.appealImg && (
                <Image
                  src={portfolio.appealImg}
                  className="portfolioDetail__element-img"
                  alt="ポートフォリオのアピール画像"
                  width={400}
                  height={600}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              )}
            </button>
          </div>
          <CommonModal
            isOpen={isOpen4}
            closeModal={() => CloseModal(setIsOpen4)}
            img={portfolio.appealImg}
          />
          <div className="portfolioDetail__element-text">{parse(portfolio?.appeal)}</div>

          <div className="portfolioDetail__element-text" id="appeal">
            <h3 className="portfolioDetail__element-subtitle">制作期間</h3>
            {portfolio.time}
          </div>
          <div className="portfolioDetail__element-text">
            <h3 className="portfolioDetail__element-subtitle">使用技術</h3>
            <h4 className="portfolioDetail__element-h4">
              <span className="portfolioDetail__element-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </span>
              フロントエンド
            </h4>
            <ul className="portfolioDetail__element-tagList">
              {portfolio.front_skill.map((skill) => (
                <li className="portfolioDetail__element-tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
            {portfolio.back_skill && portfolio.back_skill.length > 0 && (
              <div>
                <h4 className="portfolioDetail__element-h4">
                  <span className="portfolioDetail__element-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v14" />
                    </svg>
                  </span>
                  バックエンド
                </h4>
                <ul className="portfolioDetail__element-tagList">
                  {portfolio.back_skill.map((skill) => (
                    <li className="portfolioDetail__element-tag" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {portfolio.infra_skill && portfolio.infra_skill.length > 0 && (
              <div>
                <h4 className="portfolioDetail__element-h4">
                  <span className="portfolioDetail__element-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v14" />
                    </svg>
                  </span>
                  インフラ
                </h4>
                <ul className="portfolioDetail__element-tagList">
                  {portfolio.infra_skill.map((skill) => (
                    <li className="portfolioDetail__element-tag" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {portfolio.front_url && (
            <div className="portfolioDetail__element-text" id="links">
              <h3 className="portfolioDetail__element-subtitle">URL</h3>
              <Link
                href={portfolio.front_url}
                className="portfolioDetail__element-link"
                target="_blank"
              >
                <span className="portfolioDetail__element-icon">
                  <SquareArrowOutUpRight className="portfolioDetail__element-icon-img" />
                </span>
                {portfolio.front_url}
              </Link>
            </div>
          )}
          {portfolio.front_github && (
            <div className="portfolioDetail__element-text">
              <h3 className="portfolioDetail__element-subtitle">Github</h3>
              <Link
                href={portfolio.front_github}
                className="portfolioDetail__element-link"
                target="_blank"
              >
                <span className="portfolioDetail__element-icon">
                  <SquareArrowOutUpRight className="portfolioDetail__element-icon-img" />
                </span>
                {portfolio.front_github}
              </Link>
            </div>
          )}
          {portfolio.back_url && (
            <div className="portfolioDetail__element-text">
              <h3 className="portfolioDetail__element-subtitle">バックエンドURL</h3>
              <Link
                href={portfolio.back_url}
                className="portfolioDetail__element-link"
                target="_blank"
              >
                <span className="portfolioDetail__element-icon">
                  <SquareArrowOutUpRight className="portfolioDetail__element-icon-img" />
                </span>
                {portfolio.back_url}
              </Link>
            </div>
          )}
          {portfolio.back_github && (
            <div className="portfolioDetail__element-text">
              <h3 className="portfolioDetail__element-subtitle">バックエンドGithub</h3>
              <Link
                href={portfolio.back_github}
                className="portfolioDetail__element-link"
                target="_blank"
              >
                <span className="portfolioDetail__element-icon">
                  <SquareArrowOutUpRight className="portfolioDetail__element-icon-img" />
                </span>
                {portfolio.back_github}
              </Link>
            </div>
          )}
        </section>
        <PostNavigation
          next_title={portfolio.next_title}
          next_article_id={portfolio.next_article_id}
          prev_title={portfolio.prev_title}
          prev_article_id={portfolio.prev_article_id}
        />
      </article>
    </main>
  )
}
