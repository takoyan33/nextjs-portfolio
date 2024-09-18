'use client'
import ContactForm from '../../components/Components/ui/ContactForm'
import Head from 'next/head'
import React from 'react'

export default function Contact() {
  return (
    <>
      <Head>
        <title>To You Design - Contact</title>
      </Head>

      <div className='contact max_width'>
        <h2 className='main__title' data-ja='contact'>
          お問い合わせ
        </h2>
        <ContactForm />
      </div>
    </>
  )
}
