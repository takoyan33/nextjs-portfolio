import { Footer, Header } from "@/components/layout"
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics"
import "@/styles/globals.scss"
import { Clarity } from "@/utils/clarity"
import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import type React from "react"
// import { ReactScan } from "@/app/_components/ui/react-scan"
import { AdminHeader } from "@/components/layout/AdminHeader"
import { MockProvider } from "@/components/msw/MockProvider"
import { siteConfig } from "@/utils/site"
import { cookies } from "next/headers"

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

// dev, テスト環境でのみMSWサーバーを起動
// const isTestEnvironment =
//   process.env.NODE_ENV === "test" || process.env.NEXT_PUBLIC_USE_MOCK === "true"
// const mock = !!process.env.NEXT_PUBLIC_USE_MOCK
// if (isTestEnvironment || mock) {
//   // instrumentation.tsで初期化するため削除
//   // const { server } = await import("@/mocks/server")
//   // console.log("!!!!🟢 MSW Import server!!!!")
//   // server.listen()
// }

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const gtmId = process.env.NEXT_PUBLIC_GTM ?? ""

  const cookieStore = cookies()
  const isAuth = (await cookieStore).get("auth")?.value === "true"
  return (
    <html lang="ja">
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        {process.env.NODE_ENV === "production" && (
          <>
            <GoogleAnalytics />
            <GoogleTagManager gtmId={`GTM-${gtmId}`} />
            <Clarity />
          </>
        )}
      </head>
      <body>
        <MockProvider />
        <AdminHeader isAuth={isAuth} />
        <Header />
        {/* <ReactScan /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
