"use client"

import "@/styles/page/_adminTable.scss"
import { License } from "@/types"
import Link from "next/link"

interface Props {
  license: License
}

const LicenseItem = ({ license }: Props) => {
  return (
    <tr>
      <td>{license.id}</td>
      <td>{license.title}</td>
      <td>{license.date}</td>
      <td>
        <Link href={`/admin/edit/license/${license.id}`} className="portfolioTable__editBtn">
          編集
        </Link>
      </td>
    </tr>
  )
}

export default LicenseItem
