'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
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

export const Home = () => {
  const { isAuthenticated } = useApp()
  return (
    <div>
      <BaseFlex vertical gap="spacing-80px" className={styles['container']}>
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
