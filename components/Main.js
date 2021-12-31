import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faReact, faJs, faWordpress  } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCamera} from "@fortawesome/free-solid-svg-icons";
import Portfolio from "./Portfolio.js"
import Skill from "./Skill.js"

export default function Main() {
  const portfolios = [
    {
      portfolio_name: '三菱レンタカー下層ページ　コーディング',
      portfolio_date: '2021.09.01',
      portfolio_tag: 'コーディング',
      portfolio_img: '/images/portfolio_1.png',
      portfolio_url: 'https://www.mmc-dia-finance.com/rental/',
      portfolio_color: "portfoli__tag--color1",

    },
    {
      portfolio_name: 'Lutena デザイン＋コーディング',
      portfolio_date: '2021.09.01',
      portfolio_tag: 'Wordpress',
      portfolio_img: '/images/portfolio_3.png',
      portfolio_url: 'https://lutena.net/',
      portfolio_color: "portfoli__tag--color2"
    },
    {
      portfolio_name: 'Railsチュートリアル',
      portfolio_date: '2021.11.31',
      portfolio_tag: 'Ruby on Rails',
      portfolio_img: '/images/portfolio_2.png',
      portfolio_url: 'https://sleepy-plains-55156.herokuapp.com/',
      portfolio_color: "portfoli__tag--color3"
    },
    {
      portfolio_name: 'Todoサイト',
      portfolio_date: '2021.11.31',
      portfolio_tag: 'React',
      portfolio_img: '/images/portfolio_4.png',
      portfolio_url: 'https://takoyan33.github.io/todo-react-app/',
      portfolio_color: "portfoli__tag--color4"
    },
  ];
  const skills = [
    {
      skill_name: 'HTML',
      skill_rank: '★★★★',
      skill_tag: '経験年数：1年半',
      skill_icon: 'faHtml5'
    },
    {
      skill_name: 'CSS(SCSS)',
      skill_rank: '★★★★',
      skill_tag: '経験年数：1年半',
      skill_icon: 'faCss3'
    },
    {
      skill_name: 'JavaScript(jQuery)',
      skill_rank: '★★★',
      skill_tag: '経験年数：1年',
      skill_icon: 'faJs'
    },
    {
      skill_name: 'Ruby on Rails',
      skill_rank: '★★',
      skill_tag: '経験年数：4ヶ月',
      skill_icon: 'faGem'
    },
    {
      skill_name: 'React/Next.js',
      skill_rank: '★★★',
      skill_tag: '経験年数：6ヶ月',
      skill_icon: 'faReact'
    },
    {
      skill_name: 'WordPress',
      skill_rank: '★★★',
      skill_tag: '経験年数：1年',
      skill_icon: 'faWordpress'
    },
    {
      skill_name: 'PhotoShop/Illustrator',
      skill_rank: '★★★',
      skill_tag: '経験年数：1年半',
      skill_icon: 'faCamera'
    },
  ]

  return (
    <nav className="container">
    <div style={{ textAlign: "center", padding: 50 }}>
    </div>
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
        <a href="apply.html">
          <h2 className="main__title"  data-aos="fade-right">About</h2>
          <h3 className="main__subtitle"  data-aos="fade-right">To You Designについて</h3>
          <p className="about__text">To You Designのポートフォリオです。大学生１年生から約1年間サイト作成のインターンの経験があり、WordPressを用いたサイト作成やRuby on railsやReactを用いてサイト作成も行います。</p>
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
    <h2 className="main__title" data-aos="fade-right">Portfolio</h2>
    <h3 className="main__subtitle"  data-aos="fade-right">ポートフォリオ</h3>
    <div className="flx padding" data-aos="fade-up">
    { portfolios.map((portfolio,index) => 
<Portfolio 
 key={index}
  portfolio_name={portfolio.portfolio_name}
  portfolio_date={portfolio.portfolio_date}
  portfolio_tag={portfolio.portfolio_tag}
  portfolio_img={portfolio.portfolio_img}
  portfolio_url={portfolio.portfolio_url}
  portfolio_color={portfolio.portfolio_color}
/>
)}
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
    <h2 className="main__title"  data-aos="fade-right">Skill</h2>
    <h3 className="main__subtitle"  data-aos="fade-right">スキルセット</h3>

    <div className="flx" data-aos="fade-up">

      
    { skills.map((skill,index) => 
<Skill 
  key={index}
  skill_name={skill.skill_name}
  skill_rank={skill.skill_rank}
  skill_tag={skill.skill_tag}
  skill_icon={skill.skill_icon}
/>
)}
      

       {/* <div className="flx_el">
          <p className="tac">
            <FontAwesomeIcon icon={faHtml5} className="size" />
          </p>
        <p className="code_title">HTML</p>
        <p className="code_title">★★★★</p>
        <p className="code_title">経験年数：1年半</p>        

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faCss3}  className="size" />
          </p>
        </a>
        <p className="code_title">CSS</p>
        <p className="code_title">★★★★</p>
        <p className="code_title">経験年数：1年半</p>      

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faGem}  className="size" />
          </p>
        </a>
        <p className="code_title">Ruby on Rails</p>
        <p className="code_title">★★</p>
        <p className="code_title">経験年数：4ヶ月</p>      

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faReact}  className="size" />
          </p>
        </a>
        <p className="code_title">React/Next.js</p>
        <p className="code_title">★★★</p>
        <p className="code_title">経験年数：6ヶ月</p>      

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faJs}  className="size" />
          </p>
        </a>
        <p className="code_title">JavaScript</p>
        <p className="code_title">★★★★</p>
        <p className="code_title">経験年数：1年半</p>      

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faWordpress}  className="size" />
          </p>
        </a>
        <p className="code_title">WordPress</p>
        <p className="code_title">★★★★</p>
        <p className="code_title">経験年数：1年半</p>  

      </div>
      <div className="flx_el">
        <a href="">
          <p className="tac">
            <FontAwesomeIcon icon={faCamera}  className="size" />
          </p>
        </a>
        <p className="code_title">PhotoShop/Illustrator</p>
        <p className="code_title">★★★</p>
        <p className="code_title">経験年数：1年</p>  

      </div> */}
    </div>

  </div>
</div>
{/*!-- ここまでSkill-->*/}

{/*<!-- ここからcontact-->*/}
<div className="contact padding">
  <div className="max_width">
    <div claaName="padding">
          <h2 className="main__title"  data-aos="fade-right">Contact</h2>
          <h3 className="main__subtitle"  data-aos="fade-right">お問い合わせ</h3>
          <br></br>
          <p className="contact__text" data-aos="fade-up">お問い合わせの方は、下記のメールアドレスからお願いします。</p>
          <a href="mailto:harrier2070@gmail.com"  target="_blank" >
            <h2 className="main__btn" data-aos="fade-up">harrier2070@gmail.com <img src="/images/button-icon.png" className="main__btn--icon" /></h2>
          </a>
          </div>
    </div>
  </div>
    </nav>
  )
}

