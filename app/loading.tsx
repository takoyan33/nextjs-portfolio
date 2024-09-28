import React from 'react'
import { MoonLoader } from 'react-spinners'
import type { NextPage } from 'next'

const Loading = () => {
  return (
    <div className='loading'>
      <MoonLoader size={150} color='#fff' />
    </div>
  )
}

export default Loading
