import React from 'react'
import {NewsletterForm} from '.'

interface FooterProps {
  style?: React.CSSProperties;
}

const Footer = ({style}: FooterProps) => {
  return (
    <footer className='footer'>
       <NewsletterForm />
       <div className='copyright-container'>
        &copy; 2020 Daniel Orpi
       </div>
    </footer>
  )
}

export {Footer}