import React from 'react'
import frontSkills from '../../../../api/skill/front.json'
import Skill from '../../../../components/Components/ui/Skill'

export const FrontSkills = async () => {
  return (
    <div className='skill__flx'>
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
  )
}
