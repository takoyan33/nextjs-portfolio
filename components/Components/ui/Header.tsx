'use client'
import styles from '../../index.module.scss'
import Link from 'next/link'
import React, { useState } from 'react'
import { PATH } from '../../../utils/path'

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const menuFunction = () => {
    setOpenMenu(!openMenu)
  }

  type MenuItem = {
    title: string
    link: string
  }

  const MENU_ITEMS: MenuItem[] = [
    {
      title: 'About',
      link: PATH.ABOUT,
    },
    {
      title: 'ポートフォリオ',
      link: PATH.PORTFOLIO,
    },
    {
      title: 'ブログ',
      link: PATH.BLOG,
    },
  ]
  return (
    <>
      <header id='header' className='header'>
        <div className='header_flx'>
          <div>
            <Link className='logo' href='/'>
              To You Design
            </Link>
          </div>
          <nav>
            <ul>
              {MENU_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='container'>
          <div className='humburger' onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className={`drawerMenu ${openMenu ? 'open' : undefined}`}>
        <ul>
          <div className='close' onClick={() => menuFunction()}>
            <span></span>
            <span></span>
          </div>
          {MENU_ITEMS.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>
                <p className='mainTitle'>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
