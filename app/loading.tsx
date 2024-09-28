import React from 'react'
import { MoonLoader } from 'react-spinners'
import type { NextPage } from 'next'

const Loading = () => {
  return (
    <div className='loading max-width'>
      <MoonLoader size={150} color='#fff' />
    </div>
  )
}

export default Loading
