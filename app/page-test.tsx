import Link from 'next/link'
import React from 'react'

export default function PageTest() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}
