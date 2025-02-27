import "../styles/globals.scss"
import { GoogleTagManager } from "@next/third-parties/google"
import type React from "react"
import { Clarity } from "../utils/clarity"
import { Footer, Header } from "./components/layout"
import { GoogleAnalytics } from "./components/layout/GoogleAnalytics"
import { metadata } from "./config/metadata"

export { metadata }

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const gaId = process.env.NEXT_PUBLIC_GATAG ?? ""
	const gtmId = process.env.NEXT_PUBLIC_GTM ?? ""

	return (
		<html lang="ja">
			<head>
				<GoogleAnalytics gaId={gaId} />
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
