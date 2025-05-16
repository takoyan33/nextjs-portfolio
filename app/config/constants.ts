import type { SocialLink } from "../types/social"

/**
 * SNSのリンク
 */
export const SOCIAL_LINKS: readonly SocialLink[] = [
	{
		href: "https://github.com/takoyan33",
		src: "/images/github-logo.png",
		alt: "GitHub",
		height: 30,
		width: 30,
	},
	{
		href: "https://qiita.com/harrier2070",
		src: "/images/qiita-logo.png",
		alt: "Qiita",
		height: 30,
		width: 30,
	},
	{
		href: "https://zenn.dev/643866",
		src: "/images/logo-only.svg",
		alt: "Zenn",
		height: 30,
		width: 30,
	},
] as const

/**
 * プロフィール
 */
export const PROFILE = {
	name: "阿部 舜平",
	role: "フロントエンドエンジニア",
	location: "北海道",
	description: `
    北海道在住の社会人1年目のエンジニア。<br>
    大学在学中に、プログラミングに興味を持ち、HTML/CSSから学習を始めました。<br>
    文系大学を卒業後、フロントエンドエンジニアとして、WebサイトやWebシステムの構築をしています。<br>
    現在はReactやVueを中心に、更なるフロントエンド技術の向上を目指しています。<br>
  `,
	details: [
		{ label: "趣味", content: "旅行、ギター" },
		{ label: "資格", content: "基本情報技術者試験" },
	],
} as const
