"use client"

import { Skill } from "@/types"
import "./adminHistoryTable.scss"

const SkillItem = ({ skill, type }: { skill: Skill; type: string }) => {
  return (
    <tr>
      <td>{skill.id}</td>
      <td>{skill.name}</td>
      <td>{skill.rank}</td>
      <td>{skill.about}</td>
      <td>
        <a href={`/admin/edit/skill/${type}/${skill.id}`} className="portfolioTable__editBtn">
          編集
        </a>
      </td>
    </tr>
  )
}

export default SkillItem
