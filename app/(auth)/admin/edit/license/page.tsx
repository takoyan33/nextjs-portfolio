import { License } from "@/app/types"
import { Breadcrumb, LowerTitle } from "../../../../../components/ui"
import { PATH } from "../../../../../utils/path"
import HistoryItem from "./LicenseItem"

export const dynamic = "force-dynamic"

const Admin = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/licenses`)
  const json = await response.json()
  const licenses = Array.isArray(json?.data) ? json.data : []
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb
          items={[
            { name: "管理画面", link: PATH.DASHBOARD },
            { name: "資格", link: PATH.EDIT_PORTFOLIO },
          ]}
        />
      </div>

      <LowerTitle title="資格" enTitle="dashboard" />
      <div className="max_width">
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>日付</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {licenses.map((license: License) => (
              <HistoryItem key={license.id} license={license} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Admin
