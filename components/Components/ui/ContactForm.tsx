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
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-box'>
          <label htmlFor='name' className='form-box-label'>
            名前<span className='form-box-label-required'>必須</span>
          </label>
          <input
            type='text'
            id='name'
            placeholder='山田 太郎'
            className='form-box-textarea'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-box'>
          <label htmlFor='email' className='form-box-label'>
            メールアドレス<span className='form-box-label-required'>必須</span>
          </label>
          <input
            type='text'
            id='email'
            placeholder='sample@email.com'
            className='form-box-textarea'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-box'>
          <label htmlFor='message' className='form-box-label'>
            メッセージ<span className='form-box-label-required'>必須</span>
          </label>
          <textarea
            id='message'
            className='form-box-textarea'
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className='text-center'>
          <button className='form-box-btn'>送信</button>
        </div>
      </form>
    </div>
  )
}

export default Index
