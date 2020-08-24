import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { ImageParams } from '../../common/types'

import styles from '../../styles/Slider.module.scss'
import Slide from './Slide'

interface SliderProps {
  images?: ImageParams[]
}

const SliderContent = ({ transition, translate, width }: any) => {
  return (
    <div style={{
      transform: `translateX ${translate}px`,
      transition: `transform ease-out ${transition}s`,
      height: '30vh',
      width: `${width}`,
      display: 'flex',
    }}>
    </div >
  )
}

export default function Slider({ images }: SliderProps) {
  console.log('IMAGES2', images)
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })
  const { translate, transition } = state


  return (
    <div className={styles.container}>
      <SliderContent transition={transition} translate={translate} width={images && getWidth() * images.length}>
        {images?.map(image => <Slide key={image.name} imageUrl={`${process.env.NEXT_PUBLIC_CMS_URL}${image.image.url}`} />)}
      </SliderContent>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const images: ImageParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/banner-images`)).data

  console.log('IMAGES', images)
  return {
    props: {
      images
    },
  }
}
