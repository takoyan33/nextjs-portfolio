import React from 'react'
import otherSkills from '../../../../api/skill/other.json'
import Skill from '../Skill'

export const OtherSkills = async () => {
  return (
    <>
      <div className='skill__flx'>
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
    </>
  )
}
