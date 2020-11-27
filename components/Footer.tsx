import React from 'react'
import {NewsletterForm} from '.'

const Footer = () => {
  return (
    <footer className='footer'>
       <NewsletterForm />
       <div className='copyright-container'>
        &copy;  Daniel Orpi
       </div>
    </footer>
  )
}

export {Footer}