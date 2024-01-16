import Image from "next/image";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Timeline from "./Timeline";
import { PORTFOLIO_LIST, SKILL_LIST, TIMELINE } from "./data";

export default function Main() {
  return (
    <nav className="container">
      <div style={{ textAlign: "center", padding: 50 }}></div>
      {/* ここからfv */}
      <div className="fv">
        <div className="max_width">
          <h2 className="fv__title">To You Design</h2>
          <h3 className="fv__subtitle">ポートフォリオサイト</h3>
        </div>
      </div>

      {/* ここからabout */}
      <div className="about padding">
        <div className="max_width">
          <div className="flx">
            <div className="flx_el">
              <h2 className="main__title">About</h2>
              <h3 className="main__subtitle">To You Designについて</h3>
              <p className="about__text">
                To You Designのポートフォリオです。
                <br />
                現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
                <br />
                名前：阿部舜平 大学：北星学園大学　経済学部　経営情報学科4年生
                <br />
                趣味：写真撮影・旅行・Youtube運営
              </p>
            </div>
            <div className="flx_el">
              <div className="tac">
                <Image
                  src="/images/myphoto.jpg"
                  className="about_img"
                  alt="プロフィール画像"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  ここからポートフォリオ*/}
      <div className="portfolio">
        <div className="max_width">
          <h2 className="main__title">Portfolio</h2>
          <h3 className="main__subtitle">ポートフォリオ</h3>
          <div className="flx padding">
            {PORTFOLIO_LIST.map((portfolio, index) => (
              <Portfolio
                key={index}
                portfolio_name={portfolio.name}
                portfolio_date={portfolio.date}
                portfolio_tag={portfolio.tag}
                portfolio_img={portfolio.img}
                portfolio_url={portfolio.url}
                portfolio_color={portfolio.color}
                portfolio_time={portfolio.time}
                portfolio_about={portfolio.about}
                portfolio_skill={portfolio.skill}
                portfolio_github={portfolio.github}
              />
            ))}
          </div>
          {/* <a href="archive-portfolio.html">
      <h2 className="main__btn">READ MORE <img src="images/button-icon.png" className="main__btn--icon" /></h2>
    </a> */}
        </div>
      </div>

      {/*ここからインターンの経験*/}
      <div className=" padding">
        <div className="max_width">
          <div className="flx">
            <div className="flx_el">
              <h2 className="main__title">TimeLine</h2>
              <h3 className="main__subtitle">過去の経歴</h3>
            </div>
            <dl>
              {TIMELINE.map((timeline, index) => (
                <Timeline
                  key={index}
                  title={timeline.title}
                  date={timeline.date}
                  body={timeline.body}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ここからSKill*/}
      <div className="skill padding">
        <div className="max_width">
          <h2 className="main__title">Skill</h2>
          <h3 className="main__subtitle">スキルセット</h3>

          <div className="flx">
            {SKILL_LIST.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                rank={skill.rank}
                tag={skill.tag}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ここからSKill*/}
      <div className="licence padding">
        <div className="max_width">
          <h2 className="main__title">Licence</h2>
          <h3 className="main__subtitle">資格</h3>

          <ul>
            <li>・実用英語検定２級</li>
            <li>・日本漢字能力検定２級</li>
            <li>・普通自動車免許</li>
          </ul>
        </div>
      </div>

      {/* ここからcontact*/}
      <div className="contact padding">
        <div className="max_width">
          <div className="padding">
            <h2 className="main__title">Contact</h2>
            <h3 className="main__subtitle">お問い合わせ</h3>
            <br></br>
            <p className="contact__text">
              お問い合わせの方は、下記のメールアドレスからお願いします。
            </p>
            <a href="mailto:harrier2070@gmail.com" target="_blank">
              <button className="main__btn">
                harrier2070@gmail.com
                <img
                  src="/images/button-icon.png"
                  className="main__btn--icon"
                />
              </button>
            </a>
            <div className="flx">
              <a href="https://qiita.com/harrier2070" target="_blank">
                <button className="main__btn">
                  Qiita
                  <img
                    src="/images/button-icon.png"
                    className="main__btn--icon"
                  />
                </button>
              </a>
              <a href="https://zenn.dev/643866" target="_blank">
                <button className="main__btn">
                  Zenn
                  <img
                    src="/images/button-icon.png"
                    className="main__btn--icon"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ここからSNS*/}
        {/* <div className="skill padding">
        <div className="max_width">
          <h2 className="main__title">
            SNS
          </h2>
          <h3 className="main__subtitle">
            各種SNS
          </h3>

          <div className="flx">
            {SKILL_LIST.map((skill, index) => (
              <Skill
                key={index}
                skill_name={skill.skill_name}
                skill_rank={skill.skill_rank}
                skill_tag={skill.skill_tag}
                skill_icon={skill.skill_icon}
              />
            ))}
          </div>
        </div>
      </div> */}
      </div>
    </nav>
  );
}
