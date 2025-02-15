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
			<h3 className="skill__title">Frontend</h3>
			<ScrollComponent>
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
			</ScrollComponent>
			<h3 className="skill__title">Backend</h3>
			<ScrollComponent>
				<div className="skill__container">
					{backSkills?.map((skill) => (
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
			</ScrollComponent>
			<h3 className="skill__title">Infra</h3>
			<ScrollComponent>
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
			</ScrollComponent>
			<h3 className="skill__title">Other</h3>
			<ScrollComponent>
				<div className="skill__container">
					{otherSkills?.map((skill) => (
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
			</ScrollComponent>
		</div>
	)
}
