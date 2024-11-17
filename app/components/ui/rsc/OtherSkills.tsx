import React from "react"
import otherSkills from "../../../../api/skills/other.json"
import Skill from "../Skill"

export const OtherSkills = () => {
	return (
		<div className="skill__container">
			{Array.isArray(otherSkills) &&
				otherSkills.map((skill, index) => (
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
