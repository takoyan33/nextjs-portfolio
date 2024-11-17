import React from "react"
import backSkills from "../../../../api/skills/back.json"
import Skill from "../Skill"

export const BackSkills = () => {
	return (
		<div className="skill__container">
			{Array.isArray(backSkills) &&
				backSkills.map((skill, index) => (
					<Skill
						name={skill.name}
						rank={skill.rank}
						tag={skill.tag}
						icon={skill.icon}
						about={skill.about}
						key={skill.id}
					/>
				))}
		</div>
	)
}
