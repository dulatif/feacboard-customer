import React, { useRef } from 'react'
import './BaseImageCarousel.scss'
import { Carousel } from 'antd'
import { BaseButton } from '../base-button/BaseButton'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Image from 'next/image'

export interface BaseImageCarouselProps {
  images: string[]
  imageStyle?: React.CSSProperties
  btnOffset?: number
  onChange?: (currentSlide: number) => void
}
export const BaseImageCarousel: React.FC<BaseImageCarouselProps> = ({
  images,
  onChange: onChangeProps,
  imageStyle = {
    width: '100%',
    height: 490,
  },
  btnOffset = 40,
}) => {
  const onChange = (currentSlide: number) => {
    onChangeProps && onChangeProps(currentSlide)
  }

  const carouselRef = useRef<any>(null)

  const next = () => {
    carouselRef.current?.next()
  }

  const prev = () => {
    carouselRef.current?.prev()
  }
  return (
    <div className={'base-image-carousel'}>
      <Carousel ref={carouselRef} afterChange={onChange}>
        {images.map((e, i) => (
          <div key={i} className={`base-image-carousel__item`}>
            <div style={imageStyle}>
              <Image src={e} fill alt="" objectFit="cover" />
            </div>
          </div>
        ))}
      </Carousel>
      <BaseButton
        onClick={prev}
        color="secondary-neutral"
        size="xl"
        shape="circle"
        icon={<CaretLeft color="#49C3D0" />}
        className={`base-image-carousel__prev`}
        style={{
          left: btnOffset,
        }}
      />
      <BaseButton
        onClick={next}
        color="secondary-neutral"
        size="xl"
        shape="circle"
        icon={<CaretRight color="#49C3D0" />}
        className={`base-image-carousel__next`}
        style={{
          right: btnOffset,
        }}
      />
    </div>
  )
}
