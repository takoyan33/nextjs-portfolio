import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "404",
}

const Page = () => {
	return (
		<main className="max_width">
			<h2>404ページ</h2>
		</main>
	)
}

export default Page
