'use client'
import ContactForm from '../../components/Components/ui/ContactForm'
import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import type { NextPage } from 'next'

const Contact = () => {
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

export default Contact
