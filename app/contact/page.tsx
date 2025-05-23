import type { Metadata } from "next"
import { PATH } from "../../utils/path"
import { Breadcrumb, LowerTitle } from "../components/ui/"
import { ContactForm } from "./_containers/contact-form"

export const metadata: Metadata = {
	title: "To You Design - Contact",
	description: "Generated by Next.js",
}

const Contact = () => {
	return (
		<main>
			<div className="max_width">
				<Breadcrumb items={[{ name: "Contact", link: PATH.CONTACT }]} />
			</div>
			<LowerTitle title="お問い合わせ" enTitle="contact" />
			<div className="max_width">
				<ContactForm />
			</div>
		</main>
	)
}

export default Contact
