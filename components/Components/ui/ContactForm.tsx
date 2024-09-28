import { useState } from 'react'
import type { NextPage } from 'next'
import { emailjsConfig } from '../../../utils/Emailjs'
import { send } from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Index: NextPage = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
    } else {
      window.alert('お問い合わせを送信失敗しました。')
    }
  }

  const onSubmit = () => {
    sendMail()
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register('name', { required: '名前を入力してください' })}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className='form-box-error'>{errors.name.message}</p>}
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
            {...register('email', {
              required: 'メールアドレスを入力してください',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: '有効なメールアドレスを入力してください',
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className='form-box-error'>{errors.email.message}</p>}
        </div>

        <div className='form-box'>
          <label htmlFor='message' className='form-box-label'>
            メッセージ<span className='form-box-label-required'>必須</span>
          </label>
          <textarea
            id='message'
            className='form-box-textarea'
            {...register('message', { required: 'メッセージを入力してください' })}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className='form-box-error'>{errors.message.message}</p>}
        </div>

        <div className='text-center'>
          <button className='form-box-btn'>送信</button>
        </div>
      </form>
    </div>
  )
}

export default Index
