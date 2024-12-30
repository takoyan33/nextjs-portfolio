import Head from "next/head"
import React from "react"

export const CommonHead: React.VFC = React.memo(() => {
	const title = "To You Design"
	const description = "To You Designは、ポートフォリオサイトです"
	const url = "https://to-you-design.vercel.app/"
	const imgUrl = "/images/myphoto.png"
	const imgWidth = 1280
	const imgHeight = 640
	return (
		<Head>
			<title>To You Design</title>
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
			{/* <Script
				src="https://kit.fontawesome.com/bb61864944.js"
				crossOrigin="anonymous"
				strategy="afterInteractive"
			/> */}
			<meta name="description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={imgUrl} />
			<meta property="og:image:width" content={String(imgWidth)} />
			<meta property="og:image:height" content={String(imgHeight)} />
			<link rel="canonical" href={url} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
})
