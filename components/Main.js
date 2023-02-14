import Image from "next/image";
import Portfolio from "./Portfolio.tsx";
import Skill from "./Skill.js";
import { portfolios, skills } from "./data.tsx";
import { init, emailjs } from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {
  return (
    <nav className="container">
      <div style={{ textAlign: "center", padding: 50 }}></div>
      {/* <!-- ここからfv -->*/}
      <div className="fv" data-aos="fade-up">
        <div className="max_width">
          <h2 className="fv__title">To You Design</h2>
          <h3 className="fv__subtitle">阿部舜平のポートフォリオサイト</h3>
        </div>
      </div>
      {/* <!-- ここまでfv --*/}

      {/* <!-- ここからabout -->*/}
      <div className="about padding">
        <div className="max_width">
          <div className="flx" data-aos="fade-up">
            <div className="flx_el">
              <a href="apply.html">
                <h2 className="main__title" data-aos="fade-right">
                  About
                </h2>
                <h3 className="main__subtitle" data-aos="fade-right">
                  阿部舜平について
                </h3>
                <ul className="about__text">
                  <li>名前　阿部舜平</li>
                  <li>年齢　21歳、大学3年生</li>
                  <li>出身　群馬県</li>
                  <li>趣味　写真撮影、ピアノ</li>
                  <br></br>
                  阿部舜平のポートフォリオです。大学生１年生から約1年間サイト作成のインターンの経験があり、WordPressを用いたサイト作成や現在は、Ruby
                  on railsやReactの勉強をしています。
                </ul>
              </a>
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
                portfolio_name={portfolio.portfolio_name}
                portfolio_date={portfolio.portfolio_date}
                portfolio_tag={portfolio.portfolio_tag}
                portfolio_img={portfolio.portfolio_img}
                portfolio_url={portfolio.portfolio_url}
                portfolio_color={portfolio.portfolio_color}
              />
            ))}
          </div>
          {/* <a href="archive-portfolio.html">
      <h2 className="main__btn" data-aos="fade-up">READ MORE <img src="images/button-icon.png" className="main__btn--icon" /></h2>
    </a> */}
        </div>
      </div>
      {/*  {/*<!-- ここまでポートフォリオ-->*/}

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
                skill_name={skill.skill_name}
                skill_rank={skill.skill_rank}
                skill_tag={skill.skill_tag}
                skill_icon={skill.skill_icon}
              />
            ))}
          </div>
        </div>
      </div>
      {/*!-- ここまでSkill-->*/}

      <div className="portfolio">
        <div className="max_width">
          <h2 className="main__title" data-aos="fade-right">
            Intern
          </h2>
          <h3 className="main__subtitle" data-aos="fade-right">
            インターン
          </h3>
          <div className="flx padding" data-aos="fade-up"></div>
        </div>
      </div>

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
      </div>
    </nav>
  );
}
