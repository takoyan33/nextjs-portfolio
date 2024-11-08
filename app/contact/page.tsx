import ContactForm from "../components/ui/ContactForm";
import React from "react";
import { PATH } from "../../utils/path";
import BreadList from "../components/ui/BreadList";
import { LowerTitle } from "../components/ui/LowerTitle";

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
	);
};

export default Contact;
