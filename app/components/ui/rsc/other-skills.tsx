//"use client"

import otherSkills from "public/mock/api/skills/other.json"
import React, { useEffect, useState } from "react"
import { SkillElement } from ".."
import { fetchOtherSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../types"

export const OtherSkills = () => {
	// const [otherSkills, setOtherSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchOtherSkills()
	// 		setOtherSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])
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
