import React, { useEffect, useState } from "react"
import infraSkills from "../../../../api/skills/infra.json"
//import { fetchInfraSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../utils/type"
import { SkillElement } from "../SkillElement"

export const InfraSkills = () => {
	// const [infraSkills, setInfraSkills] = useState<any>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 			const data = await fetchInfraSkills()
	// 			setInfraSkills(data)
	// 	}

	// 	fetchData()
	// })
	return (
		<div className="skill__container">
			{Array.isArray(infraSkills) &&
				infraSkills.map((skill: skill) => (
					<SkillElement
						key={skill.name}
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
