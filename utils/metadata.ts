import type { Metadata } from "next"
import { PATH } from "utils/path"

export const siteConfig = {
  title: "To You Design",
  description: "To You Designは、ポートフォリオサイトです",
  url: PATH.PROD_URL,
} as const

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: "/images/myphoto.png",
        width: 1280,
        height: 640,
        alt: siteConfig.title,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}
