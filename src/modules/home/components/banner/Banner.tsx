'use client'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'

export const Banner = () => {
  const sliderItems = ['/dummy/banner01.png', '/dummy/banner02.png', '/dummy/banner03.png']

  return <BaseImageCarousel images={sliderItems} />
}
