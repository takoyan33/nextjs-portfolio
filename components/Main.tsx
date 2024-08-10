import Image from "next/image";
import Portfolio from "./Components/ui/Portfolio";
import Skill from "./Components/ui/Skill";
import Timeline from "./Components/ui/Timeline";
import {
  PORTFOLIO_LIST,
  FRONT_SKILL_LIST,
  BACK_SKILL_LIST,
  INFRA_SKILL_LIST,
  OTHER_SKILL_LIST,
  HISTORY_LIST,
  LICENSE_LIST,
} from "./Components/data/data";

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
                To You
                Designのポートフォリオです。2021年からプログラミングを学習しています。
                <br />
                現在は、ReactやVueなどフロントエンドを中心に勉強をしています。
                <br />
                名前：阿部 舜平
                <br />
                趣味：写真撮影、旅行、ギター
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
          <a href="PortfolioPage" className="main__btn">
            more
          </a>
        </div>
      </div>

      {/*ここから学歴*/}
      <div className="padding">
        <div className="max_width">
          <div className="flx">
            <div className="flx_el">
              <h2 className="main__title">History</h2>
              <h3 className="main__subtitle">過去の経歴</h3>
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
          <a href="About" className="main__btn">
            more
          </a>
        </div>
      </div>

      {/* ここからSKill*/}
      <div className="skill padding">
        <div className="max_width">
          <h2 className="main__title">Skill</h2>
          <h3 className="main__subtitle">スキルセット</h3>

          <h4 className="skill__title">Frontend</h4>
          <div className="skill__flx">
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
          <h4 className="skill__title">Backend</h4>
          <div className="skill__flx">
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
          <h4 className="skill__title">Infra</h4>
          <div className="skill__flx">
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
          <h4 className="skill__title">Other</h4>
          <div className="skill__flx">
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

      {/* ここからLicense*/}
      <div className="license padding">
        <div className="max_width">
          <h2 className="main__title">License</h2>
          <h3 className="main__subtitle">資格</h3>
          <ul>
            <li>2020年3月 実用英語検定２級</li>
            <li>2020年6月 日本漢字能力検定２級</li>
            <li>2024年1月 普通自動車免許</li>
            <li>2024年6月 基本情報技術者試験</li>
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
            <a
              href="mailto:harrier2070@gmail.com"
              target="_blank"
              className="main__btn__long"
            >
              harrier2070@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* ここからSNS*/}
      <div className="sns padding">
        <div className="max_width">
          <h2 className="main__title">SNS</h2>
          <h3 className="main__subtitle">SNS</h3>
          <br></br>
          <div className="flx">
            <a
              href="https://qiita.com/harrier2070"
              target="_blank"
              className="main__btn"
            >
              Qiita
            </a>

            <a
              href="https://zenn.dev/643866"
              target="_blank"
              className="main__btn"
            >
              Zenn
            </a>

            <a
              href="https://github.com/takoyan33"
              target="_blank"
              className="main__btn"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
