import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import type React from "react"
import "../styles/globals.scss"
import { Clarity } from "../utils/clarity"
import { Footer, Header } from "./components/layout"
import { GoogleAnalytics } from "./components/layout/GoogleAnalytics"
// import { ReactScan } from "./components/ui/react-scan"
import { siteConfig } from "./config/site"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1280,
        height: 640,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

// テスト環境でのみMSWサーバーを起動
const isTestEnvironment =
  process.env.NODE_ENV === "test" || process.env.NEXT_PUBLIC_USE_MOCK === "true"
const mock = !!process.env.NEXT_PUBLIC_USE_MOCK
if (isTestEnvironment || mock) {
  const { server } = await import("../__tests__/mocks/server")
  console.log("!!!!🟢 MSW Import server!!!!")
  server.listen()
}

if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  console.log("🟢 MSW Import init")
  import("../__tests__/mocks/init")
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const gtmId = process.env.NEXT_PUBLIC_GTM ?? ""

  return (
    <html lang="ja">
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        <GoogleAnalytics />
        <GoogleTagManager gtmId={`GTM-${gtmId}`} />
        <Clarity />
      </head>
      <body>
        {/* <MockProvider /> */}
        <Header />
        {/* <ReactScan /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
