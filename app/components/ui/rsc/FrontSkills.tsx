"use client"

import React, { useEffect, useState } from "react"
import { fetchFrontSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../utils/type"
// import frontSkills from "../../../../api/skills/front.json"
import { SkillElement } from "../SkillElement"

export const FrontSkills = () => {
	const [frontSkills, setFrontSkills] = useState<skill[]>()

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchFrontSkills()
			setFrontSkills(data.data)
		}

		fetchData()
	}, [])

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
