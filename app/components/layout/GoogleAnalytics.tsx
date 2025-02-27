import Script from "next/script"

type Props = {
	gaId: string
}

export const GoogleAnalytics = ({ gaId }: Props) => {
	if (!gaId) return null

	return (
		<>
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
		</>
	)
}
