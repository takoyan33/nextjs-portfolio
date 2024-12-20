import React, { useEffect, useState } from "react"
// import otherSkills from "../../../../api/skills/other.json"
import { fetchOtherSkills } from "../../../../hooks/fetch"
import Skill from "../Skill"

export const OtherSkills = () => {
	const [otherSkills, setOtherSkills] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchOtherSkills()
				setOtherSkills(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])
	return (
		<div className="skill__container">
			{Array.isArray(otherSkills) &&
				otherSkills.map((skill, index) => (
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
