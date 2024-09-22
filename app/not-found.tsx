import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '404',
}

export default function Page() {
  return (
    <div className='max_width'>
      <h1>404ページ</h1>
    </div>
  )
}
