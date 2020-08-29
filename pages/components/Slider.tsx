import React, { useState, useEffect } from 'react'
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider'

import { ImageParams } from '../../common/types'

import styles from '../../../styles/Slider.module.scss'
interface SliderProps {
  images?: ImageParams[]
}

export default function Slider({ images }: SliderProps) {
  return (
    <HeroSlider
      // @ts-ignore
      slidingAnimation='left_to_right'
      orientatio='horizontal'
      initialSlide={1}
      // @ts-ignore
      settings={{
        slidingDuration: 300,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '60vh',
        width: '99vw'
      }}>
      <OverlayContainer>

      </OverlayContainer>
      {/* @ts-ignore */}
      {
        images && images.map(image => {
          console.log('IMAGE', image)
          return (<Slide
            key={image.id}
            // @ts-ignore
            background={{
              backgroundImage: `${process.env.NEXT_PUBLIC_CMS_URL}${image.image.url}`,
              backgroundAttachment: 'fixed'
            }}>
          </Slide>)
        })}
      {/* @ts-ignore */}
      <Nav />
    </HeroSlider>
  )
}
