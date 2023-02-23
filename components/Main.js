import Image from "next/image";
import Portfolio from "./Portfolio.tsx";
import Skill from "./Skill.tsx";
import { portfolios, skills } from "./data.tsx";

export default function Main() {
  return (
    <nav className="container">
      <div style={{ textAlign: "center", padding: 50 }}></div>
      {/* <!-- ここからfv -->*/}
      <div className="fv" data-aos="fade-up">
        <div className="max_width">
          <h2 className="fv__title">To You Design</h2>
          <h3 className="fv__subtitle">ポートフォリオサイト</h3>
        </div>
      </div>
      {/* <!-- ここまでfv --*/}

      {/* <!-- ここからabout -->*/}
      <div className="about padding">
        <div className="max_width">
          <div className="flx" data-aos="fade-up">
            <div className="flx_el">
              <a href="">
                <h2 className="main__title" data-aos="fade-right">
                  About
                </h2>
                <h3 className="main__subtitle" data-aos="fade-right">
                  To You Designについて
                </h3>
                <p className="about__text">
                  To You
                  Designのポートフォリオです。大学生１年生から約1年間サイト作成のインターンの経験があり、WordPressを用いたサイト作成や現在は、Ruby
                  on railsやReactの勉強をしています。
                </p>
              </a>
            </div>
            <div className="flx_el">
              <p className="tac">
                <Image
                  src="/images/myphoto.jpg"
                  className="about_img"
                  alt="プロフィール画像"
                  width={300}
                  height={300}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* !-- ここまでabout -->*/}

      {/* !-- ここからポートフォリオ-->*/}
      <div className="portfolio">
        <div className="max_width">
          <h2 className="main__title" data-aos="fade-right">
            Portfolio
          </h2>
          <h3 className="main__subtitle" data-aos="fade-right">
            ポートフォリオ
          </h3>
          <div className="flx padding" data-aos="fade-up">
            {portfolios.map((portfolio, index) => (
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
              />
            ))}
          </div>
          {/* <a href="archive-portfolio.html">
      <h2 className="main__btn" data-aos="fade-up">READ MORE <img src="images/button-icon.png" className="main__btn--icon" /></h2>
    </a> */}
        </div>
      </div>
      {/*  {/*<!-- ここまでポートフォリオ-->*/}

      {/* <!-- ここからインターンの経験-->*/}
      <div className="about padding">
        <div className="max_width">
          <div className="flx" data-aos="fade-up">
            <div className="flx_el">
              <h2 className="main__title" data-aos="fade-right">
                TimeLine
              </h2>
              <h3 className="main__subtitle" data-aos="fade-right">
                過去の経歴
              </h3>
            </div>
            <dl>
              <dt>2020年3月</dt>
              <dd>
                <h2>市立札幌大通高等学校　卒業</h2>
              </dd>
              <dt>2020年4月</dt>
              <dd>
                <h2>北星学園大学　経済学部　経営情報学科　入学</h2>
              </dd>
              <dt>2021年1月</dt>
              <dd>
                <h2>JBA日本ビジネスアート株式会社　長期インターン</h2>
                <p>
                  　Wordpressサイトの修正やhtml,cssのコーディングやPhotoshopなどのWebデザインの制作を半年間行う
                </p>
              </dd>
              <dt>2022年4月</dt>
              <dd>
                <h2>株式会社conexio　長期インターン</h2>
                <p>Railsアプリの開発を行う。2022年12月まで行った</p>
              </dd>
              <dt>2022年9月</dt>
              <dd>
                <h2>株式会社メディアライツ　長期インターン</h2>
                <p>Unityなどを用いたゲーム開発を行っている</p>
              </dd>
              <dt>2023年2月</dt>
              <dd>
                <h2>株式会社Poteto　長期インターン</h2>
                <p>
                  Reactのサービスの開発を行う。バックエンドがPython,インフラがAWSなど使った事がない技術が多くあり、参考になった。
                </p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* !-- ここまでインターンの経験-->*/}

      {/*!-- ここからSKill-->*/}
      <div className="skill padding">
        <div className="max_width">
          <h2 className="main__title" data-aos="fade-right">
            Skill
          </h2>
          <h3 className="main__subtitle" data-aos="fade-right">
            スキルセット
          </h3>

          <div className="flx" data-aos="fade-up">
            {skills.map((skill, index) => (
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
      {/*!-- ここまでSkill-->*/}

      {/*<!-- ここからcontact-->*/}
      <div className="contact padding">
        <div className="max_width">
          <div claaName="padding">
            <h2 className="main__title" data-aos="fade-right">
              Contact
            </h2>
            <h3 className="main__subtitle" data-aos="fade-right">
              お問い合わせ
            </h3>
            <br></br>
            <p className="contact__text" data-aos="fade-up">
              お問い合わせの方は、下記のメールアドレスからお願いします。
            </p>
            <a href="mailto:harrier2070@gmail.com" target="_blank">
              <h2 className="main__btn" data-aos="fade-up">
                harrier2070@gmail.com
                <img
                  src="/images/button-icon.png"
                  className="main__btn--icon"
                />
              </h2>
            </a>
          </div>
        </div>

        {/*!-- ここからSNS-->*/}
        {/* <div className="skill padding">
        <div className="max_width">
          <h2 className="main__title" data-aos="fade-right">
            SNS
          </h2>
          <h3 className="main__subtitle" data-aos="fade-right">
            各種SNS
          </h3>

          <div className="flx" data-aos="fade-up">
            {skills.map((skill, index) => (
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
        {/*!-- ここまでSkill-->*/}
      </div>
    </nav>
  );
}
