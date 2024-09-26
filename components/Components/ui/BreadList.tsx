import React from 'react'
import Link from 'next/link'

interface BreadListProps {
  name: string
  link: string
}

const BreadList: React.FC<BreadListProps> = ({ name, link }) => {
  return (
    <p className='bread__title'>
      <Link href='/'>トップ</Link> ＞ <Link href={link}>{name}</Link>
    </p>
  )
}

export default BreadList
