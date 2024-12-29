import React, { useEffect, useState } from "react"
// import otherSkills from "../../../../api/skills/other.json"
import { fetchOtherSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../utils/type"
import { SkillElement } from "../SkillElement"

export const OtherSkills = () => {
	const [otherSkills, setOtherSkills] = useState<skill[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchOtherSkills()
			setOtherSkills(data)
		}

		fetchData()
	}, [])
	return (
		<div className="skill__container">
			{Array.isArray(otherSkills) &&
				otherSkills.map((skill) => (
					<SkillElement
						key={skill.id}
						name={skill.name}
						rank={skill.rank}
						tag={skill.tag}
						icon={skill.icon}
						about={skill.about}
					/>
				))}
		</div>
	)
}
