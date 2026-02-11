import { PATH } from "@/utils/path"

export const siteConfig = {
  name: "To You Design",
  description:
    "Next.js / React を中心に開発するフロントエンドエンジニア Abe Shumpei のポートフォリオサイト。制作実績や技術スタックを紹介しています。",
  keywords: [
    "Abe Shumpei",
    "フロントエンドエンジニア",
    "Next.js",
    "React",
    "TypeScript",
    "ポートフォリオ",
  ],
  url: PATH.PROD_URL,
  ogImage: "/images/ogp.png",
  links: {
    github: "https://github.com/takoyan33",
    qiita: "https://qiita.com/harrier2070",
    zenn: "https://zenn.dev/643866",
  },
} as const

export type SiteConfig = typeof siteConfig
