import React from 'react'

const Slide = ({ imageUrl }: any) => {
  return(
    <div
      style={{
        height: '40vh',
        width: '100%',
        backgroundImage: `url(${`${imageUrl}`})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    />
  )
}
export default Slide