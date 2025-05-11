import "../styles/globals.scss"
import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import type React from "react"
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const gaId = process.env.NEXT_PUBLIC_GATAG ?? ""
	const gtmId = process.env.NEXT_PUBLIC_GTM ?? ""

	console.log(gaId)

	return (
		<html lang="ja">
			<head>
				{/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
				<GoogleAnalytics gaId={gaId} />
				<GoogleTagManager gtmId={`GTM-${gtmId}`} />
				<Clarity />
			</head>
			<body>
				<Header />
				{/* <ReactScan /> */}
				{gaId}
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
