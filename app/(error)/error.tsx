import type { NextPage } from "next"

interface ErrorPageProps {
	error: {
		message: string
	}
}

const ErrorPage: NextPage<ErrorPageProps> = ({ error }) => {
	return (
		<main className="max_width">
			<h2>Error</h2>
			<p>{error.message}</p>
		</main>
	)
}

export default ErrorPage
