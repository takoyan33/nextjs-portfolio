import React, { useEffect, useState } from "react"
// import backSkills from "../../../../api/skills/back.json"
import { fetchBackSkills } from "../../../../hooks/fetch"
import Skill from "../Skill"

export const BackSkills = () => {
	const [backSkills, setBackSkills] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchBackSkills()
				setBackSkills(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])
	return (
		<div className="skill__container">
			{Array.isArray(backSkills) &&
				backSkills.map((skill, index) => (
					<Skill
						name={skill.name}
						rank={skill.rank}
						tag={skill.tag}
						icon={skill.icon}
						about={skill.about}
						key={skill.id}
					/>
				))}
		</div>
	)
}
