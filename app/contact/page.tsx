'use client'
import ContactForm from '../../components/Components/ui/ContactForm'
import Head from 'next/head'
import React from 'react'
import { PATH } from '../../utils/path'
import Link from 'next/link'
import BreadList from '../../components/Components/ui/BreadList'

// SSGとしてレンダリングされる
export const dynamic = 'force-static'

export default function Contact() {
  return (
    <>
      <div className='contact max_width'>
        <BreadList name='お問い合わせ' link={PATH.CONTACT} />
        <h2 className='main__title' data-ja='contact'>
          お問い合わせ
        </h2>
        <ContactForm />
      </div>
    </>
  )
}
