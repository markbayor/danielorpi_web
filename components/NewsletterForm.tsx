import React, { useState } from 'react'
import axios from 'axios'

const NewsletterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_CMS_URL}/subscribers`, { name, email })
    setMessage(`Thank you ${name}! News will be sent to ${email} from now on.`)
    setTimeout(() => {
      setMessage('')
      setName('')
      setEmail('')
    }, 5000)
  }

  return (
    <div className='subscription'>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <h2 className='heading__secondary'>Sign up for news from Daniel Orpi</h2>
        <input className='form__input' placeholder='Name' type='text' onChange={e => setName(e.target.value)} />
        <input className='form__input' placeholder='E-mail' type='text' onChange={e => setEmail(e.target.value)} />
        <button disabled={name.length < 1 || email.length < 1} onClick={handleSubmit}>Subscribe</button>
      </form>
      {message.length ? <h2>{message}</h2> : ''}
    </div>
  )
}

export default NewsletterForm 