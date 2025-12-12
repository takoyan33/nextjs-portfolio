import { fetchPortfolios } from "hooks/fetch"
import type { PortfolioType } from "types"
import { Breadcrumb, LowerTitle } from "@/components/ui"
import { PATH } from "@/utils/path"
import PortfolioItem from "./PortfolioItem"

export const dynamic = "force-dynamic"

const Admin = async () => {
  const data = await fetchPortfolios()

  return (
    <main className="u-padding">
      <div className="max_width">
        <Breadcrumb
          items={[
            { name: "管理画面", link: PATH.DASHBOARD },
            { name: "ポートフォリオ", link: PATH.EDIT_PORTFOLIO },
          ]}
        />
      </div>

      <LowerTitle title="ポートフォリオ" enTitle="dashboard" />
      <div className="max_width">
        <table className="portfolioTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>日付</th>
              <th>タグ</th>
              <th>画像</th>
              <th>アクション</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((portfolio: PortfolioType) => (
              <PortfolioItem key={portfolio.id} portfolio={portfolio} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Admin
