import { PATH } from "utils/path"

export const siteConfig = {
  name: "To You Design",
  description: "To You Designは、ポートフォリオサイトです",
  url: PATH.PROD_URL,
  ogImage: "/images/ogp.png",
  links: {
    github: "https://github.com/takoyan33",
    qiita: "https://qiita.com/harrier2070",
    zenn: "https://zenn.dev/643866",
  },
} as const

export type SiteConfig = typeof siteConfig
