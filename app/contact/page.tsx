import type { Metadata } from "next"
import React from "react"
import { PATH } from "../../utils/path"
import BreadList from "../components/ui/BreadList"
import ContactForm from "../components/ui/ContactForm"
import { LowerTitle } from "../components/ui/LowerTitle"

export const metadata: Metadata = {
	title: "To You Design - Contact",
	description: "Generated by Next.js",
}

const Contact = () => {
	return (
		<main>
			<div className="max_width">
				<BreadList name="お問い合わせ" link={PATH.CONTACT} />
			</div>
			<LowerTitle title="お問い合わせ" enTitle="contact" />
			<div className="max_width">
				<ContactForm />
			</div>
		</main>
	)
}

export default Contact
