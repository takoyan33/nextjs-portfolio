// "use client"

import backSkills from "public/mock/api/skills/back.json"
import React, { useEffect, useState } from "react"
import { fetchBackSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../types"
import { SkillElement } from "../skill-element"

export const BackSkills = () => {
	// const [backSkills, setBackSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchBackSkills()
	// 		setBackSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])
	return (
		<div className="skill__container">
			{Array.isArray(backSkills) &&
				backSkills.map((skill) => (
					<SkillElement
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
