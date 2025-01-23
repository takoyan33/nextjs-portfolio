import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "404",
}

const Page = () => {
	return (
		<main className="max_width">
			<h1>404ページ</h1>
		</main>
	)
}

export default Page
