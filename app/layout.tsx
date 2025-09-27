import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import type React from "react"
import "../styles/globals.scss"
import { Clarity } from "../utils/clarity"
import { Footer, Header } from "./components/layout"
import { GoogleAnalytics } from "./components/layout/GoogleAnalytics"
// import { ReactScan } from "./components/ui/react-scan"
import { MswProvider } from "../__tests__/mocks/MswProvider"
import { siteConfig } from "./config/site"

const mock = !!process.env.NEXT_PUBLIC_USE_MOCK
console.log("!!!!!!mock!!!!!!!!", mock)
if (mock) {
  const { server } = await import("../__tests__/mocks/server")
  console.log("!!!!🟢 MSW Import server!!!!")
  server.listen({ onUnhandledRequest: "warn" })
}

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
        <MswProvider>{children}</MswProvider>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
