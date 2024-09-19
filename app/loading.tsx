import React from 'react'
import { MoonLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='loading'>
      <MoonLoader size={150} color='#fff' />
    </div>
  )
}

export default Loading
