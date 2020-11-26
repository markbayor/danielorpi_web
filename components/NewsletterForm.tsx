import React, { useState } from 'react'
import axios from 'axios'

const NewsletterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (name.length > 1 || email.length > 1) {
      await axios.post(`${process.env.NEXT_PUBLIC_CMS_URL}/subscribers`, { name, email })
      setMessage(`Thank you ${name}! News will be sent to ${email} from now on.`)
      setTimeout(() => {
        setMessage('')
        setName('')
        setEmail('')
      }, 5000)
    } else {
      setMessage(`Please enter a valid name and email.`)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  return (
    <div className='subscription'>
      <form className='subscription__form' onSubmit={(e) => e.preventDefault()}>
        <h2 className='heading__secondary' style={{ fontWeight: 300, marginBottom: '.7rem'}}>Sign up for news from Daniel Orpi</h2>
        <div className='subscription__form-inputs'>
          <input className='subscription__form-input' placeholder='Name' type='text' onChange={e => setName(e.target.value)} />
          <input className='subscription__form-input' placeholder='E-mail' type='email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className={`subscription__form-button subscription__form-button--${name.length < 1 || email.length < 1 ? 'disabled' : 'enabled'}`} onClick={handleSubmit}>
          <span style={{fontSize: '1.5rem'}}>Subscribe</span>
        </div>
      </form>
      {message.length ? <h2 style={{color: 'red', textAlign: 'center'}}>{message}</h2> : ''}
    </div>
  )
}

export {NewsletterForm}