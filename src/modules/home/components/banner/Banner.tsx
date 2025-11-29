'use client'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const Banner = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const sliderItems = ['/dummy/banner01.png', '/dummy/banner02.png', '/dummy/banner03.png']

  return (
    <BaseImageCarousel
      images={sliderItems}
      imageStyle={{
        width: '100%',
        height: largeScreen ? 490 : isTablet ? 400 : 300,
      }}
    />
  )
}
