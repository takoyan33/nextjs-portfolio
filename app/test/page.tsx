import React from 'react'
import { MoonLoader } from 'react-spinners'
import type { NextPage } from 'next'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='spinner-box'>
        <div className='circle-border'>
          <div className='circle-core'></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
