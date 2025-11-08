"use client"

import "./adminHistoryTable.scss"

interface Props {
  license: any
}

const HistoryItem = ({ license }: Props) => {
  return (
    <tr>
      <td>{license.id}</td>
      <td>{license.title}</td>
      <td>{license.date}</td>
      <td>
        <a href={`/admin/edit/license/${license.id}`} className="portfolioTable__editBtn">
          編集
        </a>
      </td>
    </tr>
  )
}

export default HistoryItem
