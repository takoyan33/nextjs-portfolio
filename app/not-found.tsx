import type { Metadata } from "next"
import React from "react"
import type { NextPage } from "next"

export const metadata: Metadata = {
	title: "404",
}

const Page = () => {
	return (
		<div className="max_width">
			<h1>404ページ</h1>
		</div>
	)
}

export default Page
