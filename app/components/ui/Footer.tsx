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
			<div className="max_width footer__container">
				<div className="flx_el">
					<Link href="/" passHref>
						<img
							src="/images/common/logo.svg"
							alt="ポートフォリオ画像"
							className="footer__logo"
							loading="lazy"
						/>
					</Link>
				</div>
				<nav className="flx_el" aria-label="フッターメニュー">
					{MENU_ITEMS.map((item) => (
						<Link href={item.link} key={item.id} passHref>
							<p className="footer__list">{item.title}</p>
						</Link>
					))}
				</nav>
			</div>

			<p className="footer__text">© {currentYear} To You Design</p>
		</footer>
	)
}
