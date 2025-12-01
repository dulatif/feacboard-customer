import React, { useState, useEffect } from 'react'
import './Banner.scss'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const Banner = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const slidesToShow = isMobile || isTablet ? 1 : 3
  const slidesToScroll = isMobile || isTablet ? 1 : 3

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow,
    slidesToScroll,
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
    {
      image: '/dummy/banner01.png',
    },
    {
      image: '/dummy/banner02.png',
    },
    {
      image: '/dummy/banner03.png',
    },
    {
      image: '/dummy/banner01.png',
    },
    {
      image: '/dummy/banner02.png',
    },
    {
      image: '/dummy/banner03.png',
    },
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
    <div className="shop-banner">
      <Slider {...settings}>
        {sliderItems.map((e, i) => (
          <div key={i} className={'shop-banner__carousel__item'}>
            <Image src={e.image} fill alt="" />
          </div>
        ))}
      </Slider>
    </div>
  )
}
