import React from 'react'
import backSkills from '../../../../api/skill/back.json'
import Skill from '../Skill'

export const BackSkills = async () => {
  return (
    <>
      <div className='skill__flx'>
        {Array.isArray(backSkills) &&
          backSkills.map((skill, index) => (
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
    </>
  )
}
