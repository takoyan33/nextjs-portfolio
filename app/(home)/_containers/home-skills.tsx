"use client"

import ScrollComponent from "hooks/use-fadeIn"
// import backSkills from "public/mock/api/skills/back.json"
// import frontSkills from "public/mock/api/skills/front.json"
// import infraSkills from "public/mock/api/skills/infra.json"
// import otherSkills from "public/mock/api/skills/other.json"
import React, { useEffect, useState } from "react"
import {
	fetchBackSkills,
	fetchFrontSkills,
	fetchInfraSkills,
	fetchOtherSkills,
} from "../../../hooks/fetch"
import type { Skill } from "../../../types"
import { SkillElement } from "../../components/ui/skill-element"

const fetchSkillData = async () => {
	const [front, back, infra, other] = await Promise.all([
		fetchFrontSkills(),
		fetchBackSkills(),
		fetchInfraSkills(),
		fetchOtherSkills(),
	])

	return {
		Frontend: front.data,
		Backend: back.data,
		Infra: infra.data,
		Other: other.data,
	}
}

/**
 * トップページのスキル
 */
export const HomeSkills = () => {
	const [skills, setSkills] = useState<Record<string, Skill[]>>({})

	useEffect(() => {
		const loadSkills = async () => {
			const data = await fetchSkillData()
			setSkills(data)
		}

		loadSkills()
	}, [])

	return (
		<div>
			{Object.entries(skills).map(([title, skillList]) => (
				<div key={title}>
					<h3 className="skill__title">{title}</h3>
					<ScrollComponent>
						<ul className="skill__container">
							{skillList.map((skill) => (
								<SkillElement key={skill.name + skill.id} {...skill} />
							))}
						</ul>
					</ScrollComponent>
				</div>
			))}
		</div>
	)
}
