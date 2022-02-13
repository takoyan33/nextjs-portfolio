import {
  faHtml5,
  faCss3,
  faReact,
  faJs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";


export const portfolios = [
  {
    portfolio_name: "三菱レンタカー下層ページ　コーディング",
    portfolio_date: "2021.09.01",
    portfolio_tag: "コーディング",
    portfolio_img: "/images/portfolio_1.png",
    portfolio_url: "https://www.mmc-dia-finance.com/rental/",
    portfolio_color: "portfoli__tag--color1",
  },
  {
    portfolio_name: "Lutena デザイン＋コーディング",
    portfolio_date: "2021.09.01",
    portfolio_tag: "Wordpress",
    portfolio_img: "/images/portfolio_3.png",
    portfolio_url: "https://lutena.net/",
    portfolio_color: "portfoli__tag--color2",
  },
  {
    portfolio_name: "Railsチュートリアル",
    portfolio_date: "2021.11.31",
    portfolio_tag: "Ruby on Rails",
    portfolio_img: "/images/portfolio_2.png",
    portfolio_url: "https://sleepy-plains-55156.herokuapp.com/",
    portfolio_color: "portfoli__tag--color3",
  },
  {
    portfolio_name: "Todoサイト",
    portfolio_date: "2021.12.31",
    portfolio_tag: "React",
    portfolio_img: "/images/portfolio_4.png",
    portfolio_url: "https://todo-app-react-30d63.firebaseapp.com/",
    portfolio_color: "portfoli__tag--color4",
  },
];

export const skills = [
  {
    skill_name: "HTML",
    skill_rank: "★★★★",
    skill_tag: "経験年数：1年半",
    skill_icon: faHtml5,
  },
  {
    skill_name: "CSS(SCSS)",
    skill_rank: "★★★★",
    skill_tag: "経験年数：1年半",
    skill_icon: faCss3,
  },
  {
    skill_name: "JavaScript(jQuery)",
    skill_rank: "★★★",
    skill_tag: "経験年数：1年",
    skill_icon: faJs,
  },
  {
    skill_name: "Ruby on Rails",
    skill_rank: "★★",
    skill_tag: "経験年数：4ヶ月",
    skill_icon: faGem,
  },
  {
    skill_name: "React/Next.js",
    skill_rank: "★★★",
    skill_tag: "経験年数：6ヶ月",
    skill_icon: faReact,
  },
  {
    skill_name: "WordPress",
    skill_rank: "★★★",
    skill_tag: "経験年数：1年",
    skill_icon: faWordpress,
  },
  {
    skill_name: "PhotoShop/Illustrator",
    skill_rank: "★★★",
    skill_tag: "経験年数：1年半",
    skill_icon: faCamera,
  },
];
