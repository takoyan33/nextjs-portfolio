"use client"

import ScrollComponent from "hooks/use-fadeIn"
import React from "react"
import useSWR from "swr"
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

export const HomeSkills = () => {
	const { data: skills, error, isLoading } = useSWR("skills", fetchSkillData)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>エラーが発生しました</div>
	if (!skills) return null

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
