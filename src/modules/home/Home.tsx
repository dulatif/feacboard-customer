'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React, { useEffect } from 'react'
import { Service } from './components/service/Service'
import { Banner } from './components/banner/Banner'
import { DiagnosticHistory } from './components/diagnostic-history/DiagnosticHistory'
import { NearbyService } from './components/nearby-service/NearbyService'
import { Community } from './components/community/Community'
import { PopularDesigner } from './components/popular-designer/PopularDesigner'
import { ProductsSold } from './components/products-sold/ProductsSold'
import styles from './Home.module.scss'
import { BeforeAfter } from './components/before-after/BeforeAfter'
import { useApp } from '@/shared/providers/AppProvider'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useQueryClient } from '@tanstack/react-query'
import { getShopCategory } from '@/api/category'

export const Home = () => {
  const { isAuthenticated } = useApp()
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const queryClient = useQueryClient()

  // Prefetch shop categories saat Home component mount untuk cache awal
  useEffect(() => {
    const prefetchCategories = async () => {
      const queryKey = ['get-shop-category']
      // Prefetch jika belum ada data di cache
      if (!queryClient.getQueryData(queryKey)) {
        await queryClient.prefetchQuery({
          queryKey,
          queryFn: async () => await getShopCategory(),
          staleTime: 1000 * 60 * 30, // 30 minutes
        })
      }
    }
    prefetchCategories()
  }, [queryClient])
  return (
    <div>
      <BaseFlex
        vertical
        gap={largeScreen ? 'spacing-80px' : isTablet ? 'spacing-64px' : 'spacing-24px'}
        className={styles['container']}
      >
        <Service />
        <Banner />
        {isAuthenticated && <DiagnosticHistory />}
        <BeforeAfter />
        <NearbyService />
        <Community />
        <PopularDesigner />
        <ProductsSold />
      </BaseFlex>
    </div>
  )
}
