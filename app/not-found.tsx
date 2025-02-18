"use client"

import { TransitionLink } from "app/components/ui"
import type { Metadata, NextPage } from "next"
import { PATH } from "../utils/path"

export const metadata: Metadata = {
	title: "404",
}

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
			<TransitionLink href={PATH.INDEX} className="contact__btn padding-bottom">
				トップに戻る
			</TransitionLink>
		</main>
	)
}

export default ErrorPage
