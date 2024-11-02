import ContactForm from '../../components/Components/ui/ContactForm'
import React from 'react'
import { PATH } from '../../utils/path'
import BreadList from '../../components/Components/ui/BreadList'
import { LowerTitle } from '../../components/Components/ui/LowerTitle'

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
      <LowerTitle title='お問い合わせ' enTitle='contact' />
      <div className='max_width'>
        <ContactForm />
      </div>
    </main>
  )
}

export default Contact
