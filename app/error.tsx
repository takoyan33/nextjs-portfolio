'use client'
import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='max_width'>
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  )
}

export default Error
