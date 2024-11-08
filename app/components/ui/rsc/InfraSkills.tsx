import React from "react"
import infraSkills from "../../../../api/skill/infra.json"
import Skill from "../Skill"

export const InfraSkills = () => {
	return (
		<div className="skill__container">
			{Array.isArray(infraSkills) &&
				infraSkills.map((skill, index) => (
					<Skill
						key={index}
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
