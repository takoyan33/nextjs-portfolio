import "../styles/globals.scss"
import { GoogleTagManager } from "@next/third-parties/google"
import type { Metadata } from "next"
import Script from "next/script"
import type React from "react"
// import { RecoilRoot } from "recoil"
import { Clarity } from "../utils/clarity"
import { Footer, Header } from "./components/layout"

export const metadata: Metadata = {
	title: "To You Design",
	description: "To You Designは、ポートフォリオサイトです",
	metadataBase: new URL("https://to-you-design.vercel.app/"),
	openGraph: {
		title: "To You Design",
		description: "To You Designは、ポートフォリオサイトです",
		url: "https://to-you-design.vercel.app/",
		siteName: "To You Design",
		type: "website",
		images: [
			{
				url: "/images/myphoto.png",
				width: 1280,
				height: 640,
				alt: "To You Design",
			},
		],
	},
	icons: {
		icon: "/favicon.ico",
	},
}
const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const gaId = process.env.NEXT_PUBLIC_GATAG
	const gtmId = process.env.NEXT_PUBLIC_GTM
	return (
		<html lang="ja">
			<head>
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
					strategy="afterInteractive"
					async
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
				</Script>
				<Clarity />
			</head>
			<GoogleTagManager gtmId={`GTM-${gtmId}`} />
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
