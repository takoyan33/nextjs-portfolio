import { TopBackButton } from "app/components/ui"
import { CommonButton } from "app/components/ui/button/common-button"
import { CareerHistoryTimeline } from "app/components/ui/rsc"
import ScrollComponent from "hooks/use-fadeIn"
import { PATH } from "utils/path"
import { HomePortfolioSlide, HomeSkills, HomeWaveBgBottom, HomeWaveBgTop } from "./_containers/"
import { HomeAboutSection, HomeFvSection } from "./sections"

export default async function Home() {
  return (
    <div>
      <main aria-label="本文">
        <HomeFvSection />
        <HomeAboutSection />
        {/*  ここからポートフォリオ*/}
        <HomeWaveBgTop />
        <section className="portfolio">
          <div className="max_width">
            <ScrollComponent>
              <h2 className="main__title" data-ja="ポートフォリオ">
                Portfolio
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <HomePortfolioSlide />
              <CommonButton text="ポートフォリオをさらに見る" link={PATH.PORTFOLIO} />
            </ScrollComponent>
          </div>
        </section>
        <HomeWaveBgBottom />
        {/*ここから学歴*/}
        <section className="max_width">
          <ScrollComponent>
            <h2 className="main__title" data-ja="過去の経歴">
              History
            </h2>
          </ScrollComponent>
          <div>
            <ScrollComponent>
              {/* @ts-expect-error 非同期サーバーコンポーネントはPromiseを返すため型エラーになりますが、Next.jsが実行時に解決します https://zenn.dev/duo3/articles/7be016e771c3e4 */}
              <CareerHistoryTimeline />
            </ScrollComponent>
          </div>
          <CommonButton text="経歴をさらに見る" link={PATH.ABOUT} />
        </section>
        <HomeWaveBgTop />
        {/* ここからSKill*/}
        <section className="skill">
          <div className="max_width">
            <ScrollComponent>
              <h2 className="main__title" data-ja="スキルセット">
                Skill
              </h2>
            </ScrollComponent>
            <HomeSkills />
          </div>
        </section>
        <HomeWaveBgBottom />
        {/* ここからcontact*/}
        <section className="contact">
          <div className="max_width">
            <ScrollComponent>
              <h2 className="main__title-white" data-ja="お問い合わせ">
                Contact
              </h2>
            </ScrollComponent>
            <ScrollComponent>
              <div className="contact__box">
                <h3 className="contact__box-title">CONTACT</h3>
                <p className="contact__box-text">お問い合わせ</p>
                <CommonButton text="お問い合せフォームへ" link={PATH.CONTACT} />
              </div>
            </ScrollComponent>
          </div>
        </section>
      </main>
      <TopBackButton />
    </div>
  )
}
