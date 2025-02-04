"use client"
import type { NextPage } from "next"
import Link from "next/link"

interface ErrorPageProps {
	error?: {
		message?: string
	}
}

const ErrorPage: NextPage<ErrorPageProps> = ({ error }) => {
	return (
		<main className="errorPage">
			<h1>404</h1>
			<h2>Page Not Found</h2>
			<p>{error?.message || "The page you are looking for does not exist."}</p>
			<Link href="/">Go Home</Link>
		</main>
	)
}

export default ErrorPage
