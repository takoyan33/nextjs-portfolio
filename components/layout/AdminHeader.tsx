import "@/components/layout/adminHeader.scss"
import { TransitionLink } from "@/components/ui"
import { LogOut } from "@/hooks/cookie-action"
import { MenuItem } from "@/types"
import { PATH } from "@/utils/path"

type Props = {
  isAuth: boolean
}

export const AdminHeader = ({ isAuth }: Props) => {
  const MENU_ITEMS: MenuItem[] = [{ id: 1, title: "管理画面", link: PATH.DASHBOARD }]

  if (!isAuth) return null

  return (
    <header id="header" className="adminHeader" aria-label="ヘッダー">
      <div className="adminHeader_container">
        <div className="adminHeader_logo">
          <div className="logo">ログイン中</div>
        </div>
        <nav aria-label="メインナビゲーション">
          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item.id + item.title}>
                <TransitionLink href={item.link}>{item.title}</TransitionLink>
              </li>
            ))}
            <form action={LogOut}>
              <button type="submit" className="action-button">
                ログアウト
              </button>
            </form>
          </ul>
        </nav>
      </div>
    </header>
  )
}
