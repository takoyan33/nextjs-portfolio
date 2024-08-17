import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
// import { Grid, TextField } from "@material-ui/core";
import Grid from '@mui/material/Grid'
import { init, sendForm, send } from 'emailjs-com'
import { title } from 'process'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = () => {
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

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('push submit')
    sendEmail()
  }

  return (
    <div className='contact-page'>
      <p className='contact-top'>Contact</p>
      <Grid>
        <Grid item xs={8}>
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
              InputProps={{ disableUnderline: true }}
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
              InputProps={{ disableUnderline: true }}
            />
            <TextField
              className='contact-title'
              type='text'
              label='件名'
              fullWidth
              margin='normal'
              onChange={onChangeTitle}
              value={title}
              InputProps={{ disableUnderline: true }}
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
              InputProps={{ disableUnderline: true }}
            />
            <input className='contact-submit' type='submit' />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
export default Contact

function setTitle(value: string) {
  throw new Error('Function not implemented.')
}
