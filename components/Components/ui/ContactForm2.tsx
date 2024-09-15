import { ChangeEvent, useState } from 'react'
import type { NextPage } from 'next'
import { emailjsConfig } from '../../../utils/Emailjs'
import { send } from 'emailjs-com'

const Index: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const sendMail = () => {
    if (emailjsConfig.serviceId !== undefined && emailjsConfig.templateId !== undefined) {
      const template_param = {
        to_name: name,
        from_email: email,
        message: message,
      }

      send(emailjsConfig.serviceId, emailjsConfig.templateId, template_param).then(() => {
        window.alert('お問い合わせを送信致しました。')
        setName('')
        setEmail('')
        setMessage('')
      })
    }
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMail()
  }

  return (
    <div className='m-8 flex justify-center items-center flex-col'>
      <div className='text-5xl'>Contact</div>

      <div className='md:m-10 md:w-3/4 w-11/12 '>
        <form onSubmit={onSubmit}>
          <div className='m-5'>
            <label htmlFor='name' className='block'>
              name
            </label>
            <input
              type='text'
              id='name'
              className='border-solid border border-black rounded w-full p-2'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='m-5'>
            <label htmlFor='email' className='block'>
              email
            </label>
            <input
              type='text'
              id='email'
              className='border-solid border border-black rounded w-full p-2'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='m-5'>
            <label htmlFor='message' className='block'>
              message
            </label>
            <textarea
              id='message'
              className='border-solid border border-black rounded w-full p-2'
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className='text-center'>
            <button className='border-solid border rounded p-2 bg-green-500 text-white text-xl hover:opacity-70'>
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Index
