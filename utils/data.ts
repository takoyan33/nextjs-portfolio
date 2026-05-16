type SocialLink = {
  href: string
  src: string
  alt: string
  height: number
  width: number
}

export const SOCIAL_LINKS: SocialLink[] = [
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

// 強制的にキャッシュする
export const CACHE_OPTIONS = { cache: "force-cache" } as const
