import { Breadcrumb, LowerTitle } from "@/components/ui"
import styles from "@/components/ui/css/admin.module.scss"
import { validateToken } from "@/hooks/fetch"
import { PATH } from "@/utils/path"
import Link from "next/link"
import { redirect } from "next/navigation"

const AdminDashboard = async () => {
  const items = [
    { title: "ポートフォリオ", path: PATH.EDIT_PORTFOLIO },
    { title: "スキル", path: PATH.EDIT_SKILL },
    { title: "経歴", path: PATH.EDIT_HISTORY },
    { title: "職歴", path: PATH.EDIT_JOB },
    { title: "資格", path: PATH.EDIT_LICENSE },
  ]

  const token = await validateToken()
  if (!token.ok) {
    redirect("/api/auth/logout")
  }

  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb items={[{ name: "管理画面", link: PATH.ABOUT }]} />
      </div>

      <LowerTitle title="管理画面" enTitle="dashboard" />

      <div className={`max_width ${styles.dashboard}`}>
        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.title} href={item.path} className={styles.card}>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default AdminDashboard
