'use client'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useActiveBannersQuery } from '@/shared/hooks/banner/useBannerQuery'
import { Spin } from 'antd'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { useMemo } from 'react'

export const Banner = () => {
  const { largeScreen, isTablet } = useResponsive()
  const { data: banners, isLoading } = useActiveBannersQuery()

  const bannerImages = useMemo(() => {
    if (!banners || banners.length === 0) return []
    return banners.map((banner) => banner.image)
  }, [banners])

  if (isLoading) {
    return (
      <BaseFlex
        justify="center"
        align="center"
        style={{ height: largeScreen ? 490 : isTablet ? 400 : 300, width: '100%' }}
      >
        <Spin size="large" />
      </BaseFlex>
    )
  }

  if (!banners || banners.length === 0) {
    return null
  }

  return (
    <BaseImageCarousel
      images={bannerImages}
      imageStyle={{
        width: '100%',
        height: largeScreen ? 490 : isTablet ? 400 : 300,
      }}
    />
  )
}
