import React, { useEffect, useState } from "react"
import { fetchInfraSkills } from "../../../../hooks/fetch"
//import infraSkills from "../../../../api/skills/infra.json"
import Skill from "../Skill"

export const InfraSkills = () => {
	const [infraSkills, setInfraSkills] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchInfraSkills()
				setInfraSkills(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	})
	return (
		<div className="skill__container">
			{Array.isArray(infraSkills) &&
				infraSkills.map((skill, index) => (
					<Skill
						key={index}
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
