import React from "react";
import frontSkills from "../../../../api/skill/front.json";
import Skill from "../../../components/ui/Skill";

export const FrontSkills = () => {
	return (
		<div className="skill__container">
			{Array.isArray(frontSkills) &&
				frontSkills.map((skill, index) => (
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
	);
};
