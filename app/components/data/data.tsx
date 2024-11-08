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
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import { faCamera, faFire } from "@fortawesome/free-solid-svg-icons";

// ポートフォリオ
export const PORTFOLIO_LIST = [
	{
		id: 1,
		name: "NuxtTodoサイト",
		date: "2024.4.12",
		tag: ["Vue", "Nuxt3"],
		topImg: "/images/portfolio_top1.png",
		url: "https://vuejs-app-front.web.app/",
		github: "https://github.com/takoyan33/nuxt3-firestore-front",
		color: "portfolio__tag--color3",
		about:
			"<p>VueやNuxt3について学びたく、Todoサイトを作りました。データベースはFireStoreを使っています。</p>",
		aboutImg: "/images/portfolio_about1.png",
		function:
			"<p>機能としては</p><ul><li>ログイン、ログアウト機能</li><li>Todoの登録・編集・削除機能</li><li>Todoの詳細画面、カレンダー表示</li><li>プロフィール画面</li></ul><p>があります</p>",
		functionImg: "/images/portfolio_function1.png",
		appeal:
			"<p>アピールポイントは、1つはFireStoreのバッチ処理を用いて複数投稿を実装しています。<br>もう1つは、Piniaを使って、ダークモードの状態管理やログイン状態の管理をしています。</p>",
		appealImg: "/images/portfolio_appeal1.png",
		front_skill: ["Nuxt3", "Vue", "Pinia", "TypeScript", "ESLint, Prettier"],
		back_skill: ["Firestore"],
		infra_skill: ["firebase hosting"],
		time: "1ヶ月",
	},
	{
		id: 2,
		name: "Manga Study",
		date: "2024.2.31",
		tag: ["React", "Next.js"],
		topImg: "/images/portfolio_top2.png",
		url: "https://manga-kousatu-net.vercel.app/",
		github: "https://github.com/takoyan33/manga--kousatu--net/",
		color: "portfolio__tag--color5",
		about: "<p>漫画の考察記事を投稿できるサイトです</p>",
		aboutImg: "/images/portfolio_about2.png",
		function:
			"機能としては</p><ul><li>ログイン、ログアウト機能</li><li>考察記事の投稿・編集・削除機能</li><li>考察記事の詳細画面、カレンダー表示</li><li>プロフィール画面</li><li>いいね、コメント機能</li></ul><p>があります",
		functionImg: "/images/portfolio_function2.png",
		appeal:
			"<p>こだわった点は、1つはUIの使いやすさを追求しました。<br> 何のサイトなのか分かりやすくし、スクロール量を減らすために、スライドショーを導入しました。<br>シンプルなデザインにし、操作や閲覧がしやすいようにしました。<br>２つ目は、グラフを用いて、どのカテゴリが多く投稿しているかなど分析がしやすいような工夫を入れました</p>",
		appealImg: "/images/portfolio_appeal2.png",
		front_skill: ["React", "Next.JS", "TypeScript", "ESLint, Prettier"],
		back_skill: ["Firestore"],
		infra_skill: ["firebase hosting"],
		time: "3ヶ月",
	},
	{
		id: 3,
		name: "ポートフォリオサイト",
		date: "2023.11.30",
		tag: ["React", "vercel"],
		topImg: "/images/portfolio_top3.png",
		url: "https://rails-react-app-front.vercel.app/",
		github: "https://github.com/takoyan33/rails-react-app-front",
		color: "portfolio__tag--color4",
		about: "<p>自分についての経歴や経験を振り返るために、制作しました。</p>",
		aboutImg: "/images/portfolio_about3.png",
		function:
			"<p>内容としては</p><ul><li>経歴紹介</li><li>ポートフォリオ紹介</li><li>スキル紹介</li><li>プロフィール画面</li></ul><p>があります</p>",
		functionImg: "/images/portfolio_function3.png",
		appeal:
			"<p>意識した点は、1つはCSS設計を意識して、綺麗にコーディングしている点です。PC版やスマホ版を意識した実装をしました。</p>",
		appealImg: "/images/portfolio_appeal3.png",
		front_skill: ["Nuxt3", "Vue", "SCSS"],
		infra_skill: ["firebase hosting"],
		time: "2ヶ月",
	},
	{
		id: 4,
		name: "サークル管理App",
		date: "2022.11.30",
		tag: ["React", "Ruby"],
		topImg: "/images/portfolio_7.png",
		url: "",
		github: "https://github.com/takoyan33/rails-react-app-front",
		color: "portfolio__tag--color5",
		about: "<p>サークルのメンバー情報などを管理するアプリを作成</p>",
		aboutImg: "/images/portfolio_7.png",
		function:
			"<p>機能としては</p><ul><li>ログイン、ログアウト機能</li><li>サークルのメンバー追加・編集・削除機能</li><li>ニュース機能</li></ul><p>があります</p>",
		functionImg: "/images/portfolio_7.png",
		appeal: "<p></p>",
		appealImg: "/images/portfolio_7.png",
		front_skill: ["Nuxt3", "Vue"],
		back_skill: ["Ruby on Rails"],
		infra_skill: ["Vercel", "Render"],
		time: "1ヶ月",
	},
	{
		id: 5,
		name: "株式会社セルフ・ヒーリング実践研究会 サイト構築",
		date: "2022.09.01",
		tag: ["html", "WordPress"],
		topImg: "/images/portfolio_9.png",
		url: "https://self-healing.co.jp/",
		github: "",
		color: "portfolio__tag--color1",
		about:
			"<p>案件として、およそ20ページ前後のホームページ制作を行いました</p>",
		aboutImg: "/images/portfolio_9.png",
		function:
			"<p>ページとしては、研究会の紹介ページやNEWSページ、お問い合わせページなどを作成しました</p>",
		functionImg: "/images/portfolio_9.png",
		appeal:
			"<p>大学時代にヒアリングから設計、構築まで１人で担当し、納品まで完了しました。<br>この案件により、コーディング力やWordPressの知識などがかなり身につきました</p>",
		appealImg: "/images/portfolio_9.png",
		front_skill: ["html", "css", "JavaScript"],
		back_skill: ["WordPress"],
		infra_skill: ["Vercel"],
		time: "3ヶ月",
	},
	{
		id: 6,
		name: "三菱レンタカー下層ページ　コーディング",
		date: "2021.09.01",
		tag: ["html", "CSS"],
		topImg: "/images/portfolio_1.png",
		url: "https://www.mmc-dia-finance.com/rental/",
		github: "",
		color: "portfolio__tag--color1",
		about: "<p>案件として、下層ページの実装を行いました</p>",
		aboutImg: "/images/portfolio_1.png",
		functionImg: "/images/portfolio_1.png",
		appeal: "<p>チーム開発で、Github使いながらコーディングを担当しました</p>",
		appealImg: "/images/portfolio_1.png",
		front_skill: ["html", "CSS", "JavaScript"],
		back_skill: ["WordPress"],
		time: "2ヶ月",
	},
	// {
	//   name: "会議管理くん",
	//   date: "2022.01.01",
	//   tag: "React",
	//   topImg: "/images/portfolio_6.png",
	//   url: "https://attandance-peer.vercel.app/",
	//   github: "https://github.com/takoyan33/attandance_peer",
	//   color: "portfolio__tag--color5",
	//   about: "サークルの出席管理ができるアプリです。",
	//   skill: "React, Next.js, Firestore",
	//   time: "2週間",
	// },

	// {
	//   name: 'Todoサイト',
	//   date: '2021.12.31',
	//   tag: 'React',
	//   topImg: '/images/portfolio_4.png',
	//   url: 'https://todo-app-react-30d63.firebaseapp.com/',
	//   github: '',
	//   color: 'portfolio__tag--color5',
	//   about: 'Todoサイトです。',
	//   skill: 'React',
	//   time: '1ヶ月',
	// },
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
];

//frontend
export const FRONT_SKILL_LIST = [
	{
		name: "HTML",
		rank: "★★★★",
		tag: "経験年数：3年",
		about: "ホームページ制作などで使用",
		icon: "/images/skill/html5.svg",
	},
	{
		name: "CSS(SCSS)",
		rank: "★★★★",
		tag: "経験年数：3年",
		about: "ホームページ制作などで使用",
		icon: "/images/skill/css3.svg",
	},
	{
		name: "JavaScript",
		rank: "★★★",
		tag: "経験年数：2年",
		about: "ホームページ制作やReactなどで使用",
		icon: "/images/skill/js.svg",
	},
	{
		name: "TypeScript",
		rank: "★★★",
		tag: "経験年数：1年",
		about: "ホームページ制作やReactなどで使用",
		icon: "/images/skill/js.svg",
	},
	{
		name: "React/Next.js",
		rank: "★★★",
		tag: "経験年数：2年",
		about: "フロントを実装する際に利用。一番好きな技術",
		icon: "/images/skill/react.svg",
	},
	{
		name: "Vue.js/Nuxt.js",
		rank: "★★",
		tag: "経験年数：1年",
		about: "フロントを実装する際に利用。現在学習中",
		icon: "/images/skill/vuejs.svg",
	},
	{
		name: "WordPress",
		rank: "★★★",
		tag: "経験年数：1年",
		about:
			"ホームページ制作などで使用。ブログ機能やカスタムフィールドなども実装可能。WordPressAPIの実装経験有り",
		icon: "/images/skill/wordpress.svg",
	},
];

//backend
export const BACK_SKILL_LIST = [
	{
		name: "Firestore",
		rank: "★★★★",
		tag: "経験年数：3年",
		about: "システム構築のバックエンドで利用。認証やデプロイの経験も有り",
		icon: "/images/skill/fire.svg",
	},
	{
		name: "Ruby",
		rank: "★★★",
		tag: "経験年数：1年",
		about: "システム構築のバックエンドで利用。",
		icon: "/images/skill/ruby.svg",
	},
	{
		name: "PHP",
		rank: "★★",
		tag: "経験年数：3ヶ月",
		about: "システム構築のバックエンドで利用。",
		icon: "/images/skill/php.svg",
	},
	{},
	{},
];
//infra
export const INFRA_SKILL_LIST = [
	{
		name: "AWS",
		rank: "★★★★",
		tag: "経験年数：3年",
		about: "インターンなどで利用。S3, CloudFront, Cognitoなどを使用",
		icon: "/images/skill/aws.svg",
	},
	{
		name: "Vercel",
		rank: "★★★★",
		tag: "経験年数：3年",
		about: "ReactやVueのデプロイで利用",
		icon: "/images/skill/server.svg",
	},
	{},
	{},
	{},
];

//other
export const OTHER_SKILL_LIST = [
	{
		name: "Figma",
		rank: "★★★",
		tag: "経験年数：1年半",
		about: "デザイン制作やコーディングなどで使用",
		icon: "/images/skill/figma.svg",
	},
	{
		name: "Github",
		rank: "★★★",
		tag: "経験年数：1年半",
		about: "個人開発や仕事でのソース管理で利用",
		icon: "/images/skill/github.svg",
	},
	{
		name: "Adobe",
		rank: "★★★",
		tag: "経験年数：1年半",
		about: "PhotoShop/Illustratorなどをデザイン制作などで使用",
		icon: "/images/skill/laptop.svg",
	},
	{
		name: "Bitbucket",
		rank: "★★",
		tag: "経験年数：1年半",
		about: "仕事のソース管理で利用",
		icon: "/images/skill/bitbucket.svg",
	},
];

//学歴

export const HISTORY_LIST = [
	{
		title: "市立札幌大通高等学校　卒業",
		date: "2020年3月",
		body: "",
	},
	{
		title: "北星学園大学　経済学部　経営情報学科　入学",
		date: "2020年4月",
		body: "大学では主にマーケティングや経営学を学ぶ。2024年3月に卒業",
	},
	{
		title: "株式会社ノースディテール　入社",
		date: "2024年3月",
		body: "フロントエンドの開発を行う",
	},
];

//職歴
export const JOB_LIST = [
	{
		title: "JBA日本ビジネスアート株式会社　長期インターン",
		date: "2020年3月",
		body: "Wordpressサイトの修正やhtml,cssのコーディングやPhotoShopなどのWebデザインの制作を半年間行いました",
	},
	{
		title: "株式会社Conexio　長期インターン",
		date: "2022年4月",
		body: "Ruby on Railsの自社サービスアプリの開発を行う。2022年12月まで行った",
	},
	{
		title: "株式会社メディアライツ　長期インターン",
		date: "2022年9月",
		body: "Unityなどを用いたスマホゲーム開発を行った。2023年3月まで",
	},
	{
		title: "株式会社Poteto　長期インターン",
		date: "2023年2月",
		body: "Reactのサービスの開発を行う。バックエンドがPython,インフラがAWSなど使った事がない技術が多くあり、勉強になった。2023年9月まで",
	},
	{
		title: "株式会社GACCI　長期インターン",
		date: "2023年10月",
		body: "バックエンドがPHPで、フロントのReactのサービスの開発を行う。2024年3月まで",
	},
	{
		title: "株式会社ノースディテール　正社員",
		date: "2024年3月",
		body: "フロントエンドの開発を行う",
	},
];

// 資格
export const LICENSE_LIST = [
	{
		title: "実用英語検定２級",
		date: "2020年3月",
	},
	{
		title: "日本漢字能力検定２級",
		date: "2020年6月",
	},
	{
		title: "普通自動車免許",
		date: "2024年1月",
	},
	{
		title: "基本情報技術者試験",
		date: "2024年6月",
	},
];
