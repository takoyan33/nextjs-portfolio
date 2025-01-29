"use client"

import infraSkills from "public/mock/api/skills/infra.json"
import React, { useEffect, useState } from "react"
// import { fetchInfraSkills } from "../../../../hooks/fetch"
// import type { skill } from "../../../../utils/type"
import { SkillElement } from "../SkillElement"

export const InfraSkills = () => {
	// const [infraSkills, setInfraSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchInfraSkills()
	// 		setInfraSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])
	return (
		<div className="skill__container">
			{infraSkills?.map((skill) => (
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
