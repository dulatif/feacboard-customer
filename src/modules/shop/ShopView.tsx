'use client'
import { BaseBreadcrumb, BaseBreadcrumbProps } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { useState } from 'react'
import { Banner } from './components/banner/Banner'
import { Filter } from './components/filter/Filter'
import styles from './ShopView.module.scss'

export const ShopView = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState<BaseBreadcrumbProps['items']>([
    {
      title: '홈',
    },
    {
      title: '머리카락',
    },
  ])
  return (
    <div className={styles['shop-view']}>
      <div className={styles['shop-view__banner']}>
        <div className={styles['shop-view__banner__overlay']}></div>
        <div className={styles['shop-view__banner__content']}>
          <BaseContainer variant={1440}>
            <BaseBreadcrumb color="white" items={breadcrumbItems} className={styles['shop-view__banner__breadcrumb']} />
            <Filter />
          </BaseContainer>
        </div>
      </div>
      <div className={styles['shop-view__content']}>
        <BaseContainer variant={1440}>
          <Banner />
        </BaseContainer>
      </div>
    </div>
  )
}
