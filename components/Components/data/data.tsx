import {
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faUnity,
  faJs,
  faPhp,
  faAws,
  faGithub,
  faBitbucket,
  faFigma,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'
import { faCamera, faFire } from '@fortawesome/free-solid-svg-icons'

// ポートフォリオ
export const PORTFOLIO_LIST = [
  {
    name: 'NuxtTodoサイト',
    date: '2023.1.12',
    tag: ['Vue'],
    topImg: '/images/portfolio_8.png',
    url: 'https://vuejs-app-front.web.app/',
    github: 'https://github.com/takoyan33/nuxt3-firestore-front',
    color: 'portfolio__tag--color3',
    about: 'Vueについて学びたく、Todoサイトを作りました',
    aboutImg: '/images/portfolio_8.png',
    function: 'Vueについて学びたく、Todoサイトを作りました',
    functionImg: '/images/portfolio_8.png',
    appeal: 'Vueについて学びたく、Todoサイトを作りました',
    appealImg: '/images/portfolio_8.png',
    front_skill: ['Nuxt3', 'firebase hosting', 'Firestore'],
    back_skill: ['Nuxt3', 'firebase hosting', 'Firestore'],
    infra_skill: ['Nuxt3', 'firebase hosting', 'Firestore'],
    time: '2週間',
  },
  // {
  //   name: "会議管理くん",
  //   date: "2022.01.01",
  //   tag: "React",
  //   img: "/images/portfolio_6.png",
  //   url: "https://attandance-peer.vercel.app/",
  //   github: "https://github.com/takoyan33/attandance_peer",
  //   color: "portfolio__tag--color5",
  //   about: "サークルの出席管理ができるアプリです。",
  //   skill: "React, Next.js, Firestore",
  //   time: "2週間",
  // },
  {
    name: 'サークル管理App',
    date: '2022.11.30',
    tag: 'React',
    img: '/images/portfolio_7.png',
    // url: "https://rails-react-app-front.vercel.app/",
    github: 'https://github.com/takoyan33/rails-react-app-front',
    color: 'portfolio__tag--color5',
    about: 'サークルのメンバー管理ができるアプリです。',
    skill: 'フロントエンド:React(vite) バックエンド Ruby on Rails 6',
    time: '1ヶ月',
  },
  {
    name: 'Manga Study',
    date: '2022.10.31',
    tag: 'React',
    img: '/images/portfolio_5.png',
    url: 'https://manga-kousatu-net.vercel.app/',
    github: 'https://github.com/takoyan33/manga--kousatu--net/',
    color: 'portfolio__tag--color5',
    about: '漫画の考察記事を投稿できるサイトです',
    skill: 'React, Next.js14, FireStore, Cloudfront',
    time: '3ヶ月',
  },
  {
    name: '株式会社セルフ・ヒーリング実践研究会 サイト構築',
    date: '2022.09.01',
    tag: 'html',
    img: '/images/portfolio_9.png',
    url: 'https://self-healing.co.jp/',
    github: '',
    color: 'portfolio__tag--color1',
    about: '案件として、10-20ページのサイトをWordPressで構築しました。',
    skill: 'html,css',
    time: '3ヶ月',
  },
  {
    name: 'Todoサイト',
    date: '2021.12.31',
    tag: 'React',
    img: '/images/portfolio_4.png',
    url: 'https://todo-app-react-30d63.firebaseapp.com/',
    github: '',
    color: 'portfolio__tag--color5',
    about: 'Todoサイトです。',
    skill: 'React',
    time: '1ヶ月',
  },
  {
    name: '三菱レンタカー下層ページ　コーディング',
    date: '2021.09.01',
    tag: 'html',
    img: '/images/portfolio_1.png',
    url: 'https://www.mmc-dia-finance.com/rental/',
    github: '',
    color: 'portfolio__tag--color1',
    about: '案件として、三菱レンタカー下層ページを3-4ページ実装しました。',
    skill: 'html,css',
    time: '1ヶ月',
  },
  // {
  //   portfolio_name: "Lutena デザイン＋コーディング",
  //   portfolio_date: "2021.09.01",
  //   portfolio_tag: "Wordpress",
  //   portfolio_img: "/images/portfolio_3.png",
  //   portfolio_url: "https://lutena.net/",
  //   portfolio_color: "portfoli__tag--color2",
  // },
  // {
  //   portfolio_name: "Railsチュートリアル",
  //   portfolio_date: "2021.11.31",
  //   portfolio_tag: "Ruby on Rails",
  //   portfolio_img: "/images/portfolio_2.png",
  //   portfolio_url: "https://sleepy-plains-55156.herokuapp.com/",
  //   portfolio_color: "portfoli__tag--color3",
  // },
  // {
  //   portfolio_name: "Python",
  //   portfolio_date: "2021.11.31",
  //   portfolio_tag: "Ruby on Rails",
  //   portfolio_img: "/images/portfolio_2.png",
  //   portfolio_url: "https://sleepy-plains-55156.herokuapp.com/",
  //   portfolio_color: "portfoli__tag--color3",
  // },
  // {
  //   portfolio_name: "ハッカソン",
  //   portfolio_date: "2022.11.31",
  //   portfolio_tag: "React",
  //   portfolio_img: "/images/portfolio_2.png",
  //   portfolio_url: "https://sleepy-plains-55156.herokuapp.com/",
  //   portfolio_color: "portfoli__tag--color3",
  // },
  // {
  //   portfolio_name: "Unityのカーレース",
  //   portfolio_date: "2023.3.10",
  //   portfolio_tag: "Unity",
  //   portfolio_img: "/images/portfolio_2.png",
  //   portfolio_url: "",
  //   portfolio_color: "portfoli__tag--color3",
  // },
]

//frontend
export const FRONT_SKILL_LIST = [
  {
    name: 'HTML',
    rank: '★★★★',
    tag: '経験年数：3年',
    about: 'ホームページ制作などで使用',
    icon: faHtml5,
  },
  {
    name: 'CSS(SCSS)',
    rank: '★★★★',
    tag: '経験年数：3年',
    about: 'ホームページ制作などで使用',
    icon: faCss3,
  },
  {
    name: 'JavaScript',
    rank: '★★★',
    tag: '経験年数：2年',
    about: 'ホームページ制作やReactなどで使用',
    icon: faJs,
  },
  {
    name: 'TypeScript',
    rank: '★★★',
    tag: '経験年数：1年',
    about: 'ホームページ制作やReactなどで使用',
    icon: faJs,
  },
  {
    name: 'React/Next.js',
    rank: '★★★',
    tag: '経験年数：2年',
    about: 'フロントを実装する際に利用。一番好きな技術',
    icon: faReact,
  },
  {
    name: 'Vue.js/Nuxt.js',
    rank: '★★',
    tag: '経験年数：1年',
    about: 'フロントを実装する際に利用。現在学習中',
    icon: faVuejs,
  },
  {
    name: 'WordPress',
    rank: '★★★',
    tag: '経験年数：1年',
    about:
      'ホームページ制作などで使用。ブログ機能やカスタムフィールドなども実装可能。WordPressAPIの実装経験有り',
    icon: faWordpress,
  },
]

//backend
export const BACK_SKILL_LIST = [
  {
    name: 'Firestore',
    rank: '★★★★',
    tag: '経験年数：3年',
    about: 'システム構築のバックエンドで利用。認証やデプロイの経験も有り',
    icon: faFire,
  },
  {
    name: 'Ruby',
    rank: '★★★',
    tag: '経験年数：1年',
    about: 'システム構築のバックエンドで利用。',
    icon: faGem,
  },
  {
    name: 'PHP',
    rank: '★★',
    tag: '経験年数：3ヶ月',
    about: 'システム構築のバックエンドで利用。',
    icon: faPhp,
  },
  {},
  {},
]
//infra
export const INFRA_SKILL_LIST = [
  {
    name: 'AWS',
    rank: '★★★★',
    tag: '経験年数：3年',
    about: 'インターンなどで利用。S3, CloudFront, Cognitoなどを使用',
    icon: faAws,
  },
  {
    name: 'Vercel',
    rank: '★★★★',
    tag: '経験年数：3年',
    about: 'ReactやVueのデプロイで利用',
    icon: faCamera,
  },
  {},
  {},
  {},
]

//other
export const OTHER_SKILL_LIST = [
  {
    name: 'WordPress',
    rank: '★★★',
    tag: '経験年数：1年',
    about: 'ホームページ制作などで使用。ブログ機能やカスタムフィールドなども実装可能',
    icon: faWordpress,
  },
  {
    name: 'Figma',
    rank: '★★★',
    tag: '経験年数：1年半',
    about: 'デザイン制作やコーディングなどで使用',
    icon: faFigma,
  },
  {
    name: 'Github',
    rank: '★★★',
    tag: '経験年数：1年半',
    about: '個人開発や仕事でのソース管理で利用',
    icon: faGithub,
  },
  {
    name: 'Adobe',
    rank: '★★★',
    tag: '経験年数：1年半',
    about: 'PhotoShop/Illustratorなどをデザイン制作などで使用',
    icon: faCamera,
  },
  {
    name: 'Bitbucket',
    rank: '★★',
    tag: '経験年数：1年半',
    about: '仕事のソース管理で利用',
    icon: faBitbucket,
  },
]

//学歴

export const HISTORY_LIST = [
  {
    title: '市立札幌大通高等学校　卒業',
    date: '2020年3月',
    body: '',
  },
  {
    title: '北星学園大学　経済学部　経営情報学科　入学',
    date: '2020年4月',
    body: '大学では主にマーケティングや経営学を学ぶ。2024年3月に卒業',
  },
  {
    title: '株式会社ノースディテール　入社',
    date: '2024年3月',
    body: 'フロントエンドの開発を行う',
  },
]

//職歴
export const JOB_LIST = [
  {
    title: 'JBA日本ビジネスアート株式会社　長期インターン',
    date: '2020年3月',
    body: 'Wordpressサイトの修正やhtml,cssのコーディングやPhotoShopなどのWebデザインの制作を半年間行いました',
  },
  {
    title: '株式会社Conexio　長期インターン',
    date: '2022年4月',
    body: 'Ruby on Railsの自社サービスアプリの開発を行う。2022年12月まで行った',
  },
  {
    title: '株式会社メディアライツ　長期インターン',
    date: '2022年9月',
    body: 'Unityなどを用いたスマホゲーム開発を行った。2023年3月まで',
  },
  {
    title: '株式会社Poteto　長期インターン',
    date: '2023年2月',
    body: 'Reactのサービスの開発を行う。バックエンドがPython,インフラがAWSなど使った事がない技術が多くあり、勉強になった。2023年9月まで',
  },
  {
    title: '株式会社GACCI　長期インターン',
    date: '2023年10月',
    body: 'バックエンドがPHPで、フロントのReactのサービスの開発を行う。2024年3月まで',
  },
  {
    title: '株式会社ノースディテール　正社員',
    date: '2024年3月',
    body: 'フロントエンドの開発を行う',
  },
]

// 資格
export const LICENSE_LIST = [
  {
    title: '実用英語検定２級',
    date: '2020年3月',
  },
  {
    title: '日本漢字能力検定２級',
    date: '2020年6月',
  },
  {
    title: '普通自動車免許',
    date: '2024年1月',
  },
  {
    title: '基本情報技術者試験',
    date: '2024年6月',
  },
]
