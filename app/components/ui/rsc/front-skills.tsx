// "use client"

import frontSkills from "public/mock/api/skills/front.json"
import React, { useEffect, useState } from "react"
import { fetchFrontSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../types"
import { SkillElement } from "../skill-element"

export const FrontSkills = () => {
	// const [frontSkills, setFrontSkills] = useState<skill[]>()

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchFrontSkills()
	// 		setFrontSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])

	return (
		<div className="skill__container">
			{frontSkills?.map((skill) => (
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
