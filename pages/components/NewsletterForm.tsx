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
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' onChange={e => setName(e.target.value)} />
        <input type='text' onChange={e => setEmail(e.target.value)} />
        <button disabled={name.length < 1 || email.length < 1} onClick={handleSubmit}>Subscribe</button>
      </form>
      {message.length && <h2>{message}</h2>}
    </div>
  )
}

export { NewsletterForm }