"use client"

import "@/styles/page/_adminTable.scss"
import Image from "next/image"
import Link from "next/link"
import type { PortfolioType } from "types"

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
          <Image src={portfolio.topImg} alt={portfolio.name} className="portfolioTable__image" />
        )}
      </td>
      <td>
        <Link href={`/admin/edit/portfolio/${portfolio.id}`} className="portfolioTable__editBtn">
          編集
        </Link>
      </td>
    </tr>
  )
}

export default PortfolioItem
