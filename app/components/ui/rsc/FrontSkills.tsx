import React, { useEffect, useState } from "react"
import frontSkills from "../../../../api/skills/front.json"
import Skill from "../../../components/ui/Skill"
import { fetchFrontSkills } from "../../../../hooks/fetch"

export const FrontSkills = () => {
	const [frontSkills, setFrontSkills] = useState<any>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchFrontSkills()
				setFrontSkills(data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchData()
	}, [])

	return (
		<div className="skill__container">
			{Array.isArray(frontSkills) &&
				frontSkills.map((skill) => (
					<Skill
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
