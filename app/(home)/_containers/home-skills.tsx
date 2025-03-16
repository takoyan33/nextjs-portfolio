// "use client"

import ScrollComponent from "hooks/use-fadeIn"
import backSkills from "public/mock/api/skills/back.json"
import frontSkills from "public/mock/api/skills/front.json"
import infraSkills from "public/mock/api/skills/infra.json"
import otherSkills from "public/mock/api/skills/other.json"
import React, { useEffect, useState } from "react"
// import { fetchFrontSkills } from "../../../hooks/fetch"
// import type { skill } from "../../../types"
import { SkillElement } from "../../components/ui/skill-element"

const skillCategories = [
	{ title: "Frontend", skills: frontSkills },
	{ title: "Backend", skills: backSkills },
	{ title: "Infra", skills: infraSkills },
	{ title: "Other", skills: otherSkills },
]

export const HomeSkills = () => {
	// const [frontSkills, setFrontSkills] = useState<skill[]>()

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchFrontSkills()
	// 		setFrontSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])

	// const [backSkills, setBackSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchBackSkills()
	// 		setBackSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])

	// const [infraSkills, setInfraSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchInfraSkills()
	// 		setInfraSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])

	// const [otherSkills, setOtherSkills] = useState<skill[]>([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await fetchOtherSkills()
	// 		setOtherSkills(data.data)
	// 	}

	// 	fetchData()
	// }, [])

	return (
		<div>
			{skillCategories.map(({ title, skills }) => (
				<div key={title}>
					<h3 className="skill__title">{title}</h3>
					<ScrollComponent>
						<ul className="skill__container">
							{skills.map((skill) => (
								<SkillElement key={skill.id} {...skill} />
							))}
						</ul>
					</ScrollComponent>
				</div>
			))}
		</div>
	)
}
