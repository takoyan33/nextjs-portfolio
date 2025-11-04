"use client"

import type { PortfolioType } from "types"
import "./adminPortfolioTable.scss"

interface Props {
  portfolio: PortfolioType
}

const PortfolioItem = ({ portfolio }: Props) => {
  return (
    <tr>
      <td>{portfolio.id}</td>
      <td>{portfolio.name}</td>
      <td>{portfolio.date}</td>
      <td>{portfolio.tag}</td>
      <td>
        {portfolio.topImg && (
          <img src={portfolio.topImg} alt={portfolio.name} className="portfolioTable__image" />
        )}
      </td>
      <td>
        <a href={`/admin/edit/portfolio/${portfolio.id}`} className="portfolioTable__editBtn">
          編集
        </a>
      </td>
    </tr>
  )
}

export default PortfolioItem
