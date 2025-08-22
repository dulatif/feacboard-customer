'use client'
import { Carousel } from 'antd'
import React, { useRef } from 'react'
import Image from 'next/image'
import styles from './Banner.module.scss'
import './Banner.scss'
import BaseButton from '@/shared/components/base-button/BaseButton'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'

export const Banner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  const carouselRef = useRef<any>(null)

  const next = () => {
    carouselRef.current?.next()
  }

  const prev = () => {
    carouselRef.current?.prev()
  }

  const sliderItems = [
    {
      image: '/dummy/banner01.png',
    },
    {
      image: '/dummy/banner02.png',
    },
    {
      image: '/dummy/banner03.png',
    },
  ]

  return (
    <div className={styles['banner']}>
      <Carousel ref={carouselRef} afterChange={onChange} className="banner__carousel">
        {sliderItems.map((e, i) => (
          <div key={i} className={styles['banner__carousel-item']}>
            <Image src={e.image} fill alt="" />
          </div>
        ))}
      </Carousel>
      <BaseButton
        onClick={prev}
        color="secondary-neutral"
        size="xl"
        shape="circle"
        icon={<ChevronLeftIcon />}
        className={styles['banner__carousel__prev']}
      />
      <BaseButton
        onClick={next}
        color="secondary-neutral"
        size="xl"
        shape="circle"
        icon={<ChevronRightIcon />}
        className={styles['banner__carousel__next']}
      />
    </div>
  )
}
