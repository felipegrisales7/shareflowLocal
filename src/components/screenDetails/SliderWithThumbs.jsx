import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import image1 from '@/assets/images/place1.png'
import image2 from '@/assets/images/place2.png'
import image3 from '@/assets/images/place3.png'
import image4 from '@/assets/images/place4.png'

export function SliderWithThumbs() {
  const mainRef = useRef(null)
  const thumbsRef = useRef(null)

  useEffect(() => {
    if (
      mainRef.current?.splide &&
      thumbsRef.current?.splide &&
      typeof mainRef.current.sync === 'function'
    ) {
      mainRef.current.sync(thumbsRef.current.splide)
    }
  }, [])

  const images = [image1, image2, image3, image4]

  return (
    <div className="slider-layout">
      <Splide
        ref={mainRef}
        options={{
          type: 'fade',
          heightRatio: 0.5,
          pagination: false,
          arrows: true,
        }}
        aria-label="Main slider"
        className="main-slider"
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        ref={thumbsRef}
        options={{
          fixedWidth: 100,
          height: 400,
          isNavigation: true,
          gap: '8px',
          direction: 'ttb',
          pagination: false,
          cover: true,
          arrows: false,
        }}
        aria-label="Thumbnail nav"
        className="thumb-slider"
      >
        {images.map((src, index) => (
          <SplideSlide key={index}>
            <img src={src} alt={`Thumb ${index + 1}`} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
