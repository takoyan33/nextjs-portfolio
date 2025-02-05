import type { MenuItem } from "../../../types"
import { PATH } from "../../../utils/path"
import { TransitionLink } from "../ui"

export const Footer = () => {
	// 現在の年度
	const currentYear = new Date().getFullYear()

	// Footerメニュー
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
					<TransitionLink href={PATH.INDEX}>
						<img
							src="/images/common/logo.svg"
							alt="ポートフォリオ画像"
							className="footer__logo"
							loading="lazy"
						/>
					</TransitionLink>
				</div>
				<nav className="flx_el" aria-label="フッターメニュー">
					{MENU_ITEMS.map((item) => (
						<TransitionLink href={item.link} key={item.id} className="m-0">
							<p className="footer__list">{item.title}</p>
						</TransitionLink>
					))}
				</nav>
			</div>

			<p className="footer__text">© {currentYear} To You Design</p>
		</footer>
	)
}
