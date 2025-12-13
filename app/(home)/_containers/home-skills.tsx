import { SkillElement } from "@/components/ui/skill-element"
import {
  fetchBackSkills,
  fetchFrontSkills,
  fetchInfraSkills,
  fetchOtherSkills,
} from "@/hooks/fetch"
import ScrollComponent from "hooks/use-fadeIn"

import { logger } from "@/utils/logger"

const fetchSkillData = async () => {
  const [front, back, infra, other] = await Promise.all([
    fetchFrontSkills(),
    fetchBackSkills(),
    fetchInfraSkills(),
    fetchOtherSkills(),
  ])

  logger.info(
    {
      front: { length: front?.data?.length, data: front?.data?.[0], status: front?.status },
      back: { length: back?.data?.length, data: back?.data?.[0], status: back?.status },
      infra: { length: infra?.data?.length, data: infra?.data?.[0], status: infra?.status },
      other: { length: other?.data?.length, data: other?.data?.[0], status: other?.status },
    },
    "/home/skills",
  )

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
