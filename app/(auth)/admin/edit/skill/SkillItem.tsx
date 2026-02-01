"use client"

import "@/styles/page/_adminTable.scss"
import { Skill } from "@/types"
import Link from "next/link"

interface Props {
  skill: Skill
  type: "front" | "back" | "infra" | "other"
}

const SkillItem = ({ skill, type }: Props) => {
  return (
    <tr>
      <td>{skill.id}</td>
      <td>{skill.name}</td>
      <td>{skill.rank}</td>
      <td>{skill.about}</td>
      <td>
        <Link href={`/admin/edit/skill/${type}/${skill.id}`} className="portfolioTable__editBtn">
          編集
        </Link>
      </td>
    </tr>
  )
}

export default SkillItem
