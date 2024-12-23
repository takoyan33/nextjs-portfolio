import React, { useEffect, useState } from "react"
import infraSkills from "../../../../api/skills/infra.json"
import { fetchInfraSkills } from "../../../../hooks/fetch"
import Skill from "../Skill"

export const InfraSkills = () => {
	// const [infraSkills, setInfraSkills] = useState<any>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const data = await fetchInfraSkills()
	// 			setInfraSkills(data)
	// 		} catch (e) {
	// 			console.error(e)
	// 		}
	// 	}

	// 	fetchData()
	// })
	return (
		<div className="skill__container">
			{Array.isArray(infraSkills) &&
				infraSkills.map((skill) => (
					<Skill
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
