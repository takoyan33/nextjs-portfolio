"use server"

import { SkillElement } from "app/components/ui/skill-element"
import ScrollComponent from "hooks/use-fadeIn"
import {
  fetchBackSkills,
  fetchFrontSkills,
  fetchInfraSkills,
  fetchOtherSkills,
} from "../../../hooks/fetch"

/**
 * サーバーコンポーネント用にスキルデータ取得
 */
export const HomeSkills = async () => {
  // fetchSkillData の中身をそのままサーバーコンポーネントで実行
  const [front, back, infra, other] = await Promise.all([
    fetchFrontSkills(),
    fetchBackSkills(),
    fetchInfraSkills(),
    fetchOtherSkills(),
  ])

  console.log(front, back, infra, other)

  const skills = {
    Frontend: front.data,
    Backend: back.data,
    Infra: infra.data,
    Other: other.data,
  }

  console.log(skills)
  // 一旦表示部分はコメントアウト

  return (
    <div>
      {Object.entries(skills).map(([title, skillList]) => (
        <div key={title}>
          <h3 className="skill__title">{title}</h3>
          <ScrollComponent>
            <ul className="skill__container">
              {skillList.map((skill) => (
                <SkillElement key={skill.name + skill.id} {...skill} />
              ))}
            </ul>
          </ScrollComponent>
        </div>
      ))}
    </div>
  )

  // デバッグ用に返す
  // return <p>aaa</p>
}
