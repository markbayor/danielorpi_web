import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../common/functions'
import HeroSlider, {Slide, Nav, OverlayContainer} from 'hero-slider'

import { ImageParams } from '../../../common/types'

import styles from '../../../styles/Slider.module.scss'
// import Slide from './Slide'

interface SliderProps {
  images?: ImageParams[]
}

export default function Slider({images}: SliderProps) {
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
      height: '50vh',
      width: '99vw'
    }}>
      <OverlayContainer>

      </OverlayContainer>
      {/* @ts-ignore*/}
      {
      images && images.map(image => <Slide key={image.id} background={{
          backgroundImage: `${process.env.NEXT_PUBLIC_CMS_URL}${image.image.url}`,
          backgroundAttachment: 'fixed'
      }}>
      </Slide>)}
    </HeroSlider>
  )
}




// const SliderContent = ({ transition, translate, children, images }: any) => {
//   const {width, height} = useWindowSize()
//   return (
//     <div style={{
//       transform: `translateX ${translate}px`,
//       transition: `transform ease-out ${transition}s`,
//       height: '30vh',
//       width: `${images ? width * images.length : 0}px`,
//       display: 'flex',
//     }}>
//       {children}
//     </div >
//   )
// }

// export default function Slider({ images }: SliderProps) {
//   const {width, height} = useWindowSize()

//   const [state, setState] = useState({ activeIdx: 0, translate: 0, transition: 0.45 })
//   const { translate, transition } = state

//   console.log('WIDTH', width)
//   console.log('WIDTH2', images && width * images.length)
//   return (
//     <div className={styles.container}>
//       <SliderContent transition={transition} translate={translate} images={images}>
//         {images && images.map(image => <Slide key={image.name} imageUrl={`${process.env.NEXT_PUBLIC_CMS_URL}${image.image.url}`} />)}
//       </SliderContent>
//     </div>
//   )
// }



