'use client'
import ContactForm from '../../components/Components/ui/ContactForm'
import Head from 'next/head'
import React from 'react'
import { PATH } from '../../utils/path'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>To You Design - Contact</title>
      </Head>

      <div className='contact max_width'>
        <p className='bread__title'>
          <Link href='/'>トップ</Link> ＞ <Link href={PATH.CONTACT}>お問い合わせ</Link>
        </p>
        <h2 className='main__title' data-ja='contact'>
          お問い合わせ
        </h2>
        <ContactForm />
      </div>
    </>
  )
}
