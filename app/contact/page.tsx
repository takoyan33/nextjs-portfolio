'use client'
import ContactForm from '../../components/Components/ui/ContactForm'
import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import type { NextPage } from 'next'

const Contact = () => {
  return (
    <main>
      <div className='max_width'>
        <BreadList name='お問い合わせ' link={PATH.CONTACT} />
      </div>
      <div className='lower_bg'>
        <div className='max_width'>
          <h2 className='lower__title' data-ja='contact'>
            お問い合わせ
          </h2>
        </div>
      </div>
      <div className='max_width'>
        <ContactForm />
      </div>
    </main>
  )
}

export default Contact
