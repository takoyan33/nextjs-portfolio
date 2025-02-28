type SocialLink = {
	readonly href: string
	readonly src: string
	readonly alt: string
	readonly height: number
	readonly width: number
}

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
