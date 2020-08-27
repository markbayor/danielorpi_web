import React from 'react'


const Slide = ({ imageUrl }: any) => (
  <div
    style={{
      height: 100,
      width: '100%',
      backgroundImage: `${imageUrl}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}
  />
)

export default Slide