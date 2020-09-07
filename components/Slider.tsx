import React, { useState, useEffect } from 'react'
import HeroSlider, { Slide, Nav, OverlayContainer } from 'hero-slider'

import { ImageParams } from '../common/types'
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
        autoplayDuration: 10000,
        height: '65vh',
        width: '100%'
      }}>
      <OverlayContainer>

      </OverlayContainer>
      {/* @ts-ignore */}
      {
        images && images.map(image => {
          return (<Slide
            key={image.id}
            // @ts-ignore
            background={{
              backgroundImage: `${process.env.NEXT_PUBLIC_CMS_URL}${image.image.url}`,
              backgroundAttachment: 'initial'
            }}>
          </Slide>)
        })}
      {/* @ts-ignore */}
      <Nav />
    </HeroSlider>
  )
}
