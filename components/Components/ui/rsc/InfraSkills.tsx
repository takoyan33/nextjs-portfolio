'use client'
import React from 'react'
import infraSkills from '../../../../api/skill/front.json'
import Skill from '../Skill'

export const InfraSkills = async () => {
  return (
    <div className='skill__flx'>
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
