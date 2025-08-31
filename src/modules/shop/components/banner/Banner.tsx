import React from 'react'
import './Banner.scss'
import Image from 'next/image'
import Slider, { Settings } from 'react-slick'

export const Banner = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
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
