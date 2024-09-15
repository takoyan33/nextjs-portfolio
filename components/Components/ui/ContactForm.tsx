import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
// import { Grid, TextField } from "@material-ui/core";
import Grid from '@mui/material/Grid'
import { init, sendForm, send } from 'emailjs-com'
import emailJs from 'emailjs-com'
import { title } from 'process'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault() // ページのリロードを防ぐ
    const user_id = process.env.REACT_APP_USER_ID
    const service_id = process.env.REACT_APP_SERVICE_ID
    const template_id = process.env.REACT_APP_TEMPLATE_ID
    if (user_id != undefined && service_id != undefined && template_id != undefined) {
      init(user_id)

      const template_param = {
        to_name: name,
        email: mail,
        message: message,
      }

      send(service_id, template_id, template_param).then(() => {
        console.log('success to send email')
      })
    }
  }
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value)
  }
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  // const onSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault() // ページのリロードを防ぐ
  //   const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  //   const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  //   const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  //   //emailjsを初期化する

  //   console.log(userId)
  //   if (userId && serviceId && templateId) {
  //     init(userId)

  //     console.log(userId)
  //     console.log(templateId)
  //     console.log(serviceId)

  //     const params = {
  //       name: name,
  //       email: mail,
  //       content: message,
  //     }

  //     emailJs
  //       .send(serviceId ?? '', templateId ?? '', params, userId)
  //       .then((res) => {
  //         console.log(res)
  //         alert('送信完了しました')
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         alert('送信に失敗しました')
  //       })
  //   }
  // }

  return (
    <div className='contact-page max_width container'>
      <Grid>
        <Grid item xs={8}>
          <h2 className='contact-top'>Contact</h2>
          <form onSubmit={onSubmit}>
            <TextField
              className='contact-name'
              type='text'
              required
              label='氏名(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeName}
              value={name}
            />
            <TextField
              className='contact-mail'
              type='text'
              required
              label='メールアドレス(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeMail}
              value={mail}
            />
            <TextField
              className='contact-title'
              type='text'
              label='件名'
              fullWidth
              margin='normal'
              onChange={onChangeTitle}
              value={title}
            />
            <TextField
              className='contact-message'
              type='text'
              required
              label='お問い合わせ内容(必須)'
              fullWidth
              margin='normal'
              onChange={onChangeMessage}
              value={message}
            />
            <button className='contact-submit' onClick={onSubmit}>
              送信
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
export default Contact
