import type { History } from "types"

import "./adminHistoryTable.scss"

interface Props {
  history: History
}

const HistoryItem = ({ history }: Props) => {
  return (
    <tr>
      <td>{history.id}</td>
      <td>{history.title}</td>
      <td>{history.date}</td>
      <td>{history.body}</td>
      <td>
        <a href={`/admin/edit/history/${history.id}`} className="portfolioTable__editBtn">
          編集
        </a>
      </td>
    </tr>
  )
}

export default HistoryItem
