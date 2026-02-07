import type { MenuItem } from "@/app/types"
import { TransitionLink } from "@/components/ui"
import "@/styles/component/_footer.scss"
import { PATH } from "@/utils/path"

export const Footer = () => {
  // 現在の年度
  const currentYear: number = new Date().getFullYear()

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
    {
      id: 4,
      title: "プライバシーポリシー",
      link: PATH.PRIVACY_POLICY,
    },
  ]
  return (
    <footer className="footer" aria-label="フッター">
      <div className="max_width footer__container">
        <div>
          <TransitionLink href={PATH.INDEX}>
            <img
              src="/images/common/logo.svg"
              alt="ポートフォリオ画像"
              className="footer__logo"
              loading="lazy"
            />
          </TransitionLink>
        </div>
        <nav aria-label="フッターメニュー">
          <ul>
            {MENU_ITEMS.map((item) => (
              <li className="footer__list" key={item.id + item.title}>
                <TransitionLink href={item.link}>{item.title}</TransitionLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="footer__text">© {currentYear} To You Design</p>
    </footer>
  )
}
