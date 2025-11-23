import ScrollComponent from "hooks/use-fadeIn"
import { SkillElement } from "../../../components/ui/skill-element"
import {
  fetchBackSkills,
  fetchFrontSkills,
  fetchInfraSkills,
  fetchOtherSkills,
} from "../../../hooks/fetch"

const fetchSkillData = async () => {
  const [front, back, infra, other] = await Promise.all([
    fetchFrontSkills(),
    fetchBackSkills(),
    fetchInfraSkills(),
    fetchOtherSkills(),
  ])

  return {
    Frontend: front.data,
    Backend: back.data,
    Infra: infra.data,
    Other: other.data,
  }
}

export const HomeSkills = async () => {
  const skills = await fetchSkillData()

  return (
    <div>
      {Object.entries(skills).map(([title, skillList]) => (
        <div key={title}>
          <h3 className="skill__title">{title}</h3>
          <ScrollComponent>
            <div className="skill__container">
              {skillList?.map((skill) => (
                <SkillElement key={skill.name + skill.id} {...skill} />
              ))}
            </div>
          </ScrollComponent>
        </div>
      ))}
    </div>
  )
}
