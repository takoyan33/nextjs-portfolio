import type { PortfolioType } from "types"
import { Breadcrumb, LowerTitle } from "../../../../../components/ui"
import { PATH } from "../../../../../utils/path"
import HistoryItem from "./HistoryItem"

const Admin = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/histories`, {
    next: { revalidate: 3600 },
  })
  const json = await response.json()
  const histories = Array.isArray(json?.data) ? json.data : []
  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb
          items={[
            { name: "管理画面", link: PATH.DASHBOARD },
            { name: "職歴", link: PATH.EDIT_PORTFOLIO },
          ]}
        />
      </div>

      <LowerTitle title="職歴" enTitle="dashboard" />
      <div className="max_width">
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>日付</th>
              <th>内容</th>
              <th>編集</th>
            </tr>
          </thead>
          <tbody>
            {histories.map((history: PortfolioType) => (
              <HistoryItem key={history.id} history={history} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Admin
