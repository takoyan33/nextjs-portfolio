import Link from "next/link"
import { PATH } from "../../../utils/path"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	type MenuItem = {
		id: number
		title: string
		link: string
	}

	const MENU_ITEMS: MenuItem[] = [
		{
			id: 1,
			title: "About",
			link: PATH.ABOUT,
		},
		{
			id: 2,
			title: "ポートフォリオ",
			link: PATH.PORTFOLIO,
		},
		{
			id: 3,
			title: "ブログ",
			link: PATH.BLOG,
		},
		{
			id: 4,
			title: "お問い合わせ",
			link: PATH.CONTACT,
		},
	]
	return (
		<footer className="footer" aria-label="フッター">
			<div className="max_width">
				<div className="footer_flx">
					<div className="flx">
						<div className="flx_el">
							<Link href="/">
								<img
									src="/images/common/logo.svg"
									alt="ポートフォリオ画像"
									className="footer_logo"
								/>
							</Link>
						</div>
						<div className="flx_el">
							{MENU_ITEMS.map((item) => (
								<Link href={item.link} key={item.id}>
									<p className="footer_list">{item.title}</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			<p className="footer_text">© {currentYear} To You Design</p>
		</footer>
	)
}
