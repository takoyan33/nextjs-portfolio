"use client"
import type { NextPage } from "next"

interface ErrorPageProps {
	error: {
		message: string;
	};
}

const ErrorPage: NextPage<ErrorPageProps> = ({ error }) => {
	return (
		<div className="max_width">
			<h2>Error</h2>
			<p>{error.message}</p>
		</div>
	)
}

export default ErrorPage
