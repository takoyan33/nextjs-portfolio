"use client"

import React, { useEffect, useState } from "react"
import { SkillElement } from "../"
// import otherSkills from "../../../../api/skills/other.json"
import { fetchOtherSkills } from "../../../../hooks/fetch"
import type { skill } from "../../../../utils/type"

export const OtherSkills = () => {
	const [otherSkills, setOtherSkills] = useState<skill[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchOtherSkills()
			setOtherSkills(data.data)
		}

		fetchData()
	}, [])
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
