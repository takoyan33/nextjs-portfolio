import Script from "next/script"

export const GoogleAnalytics = () => {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-R47KRGK42T"
				strategy="afterInteractive"
				async
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R47KRGK42T');
        `}
			</Script>
		</>
	)
}
