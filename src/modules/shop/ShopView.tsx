'use client'
import { BaseBreadcrumb, BaseBreadcrumbProps } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { useEffect, useState } from 'react'
import { Banner } from './components/banner/Banner'
import { Filter } from './components/filter/Filter'
import styles from './ShopView.module.scss'
import { useSearchParams } from 'next/navigation'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Hair } from './components/hair/Hair'
import { BaseFloatButton } from '@/shared/components/base-float-button/BaseFloatButton'
import CartIcon from '@/shared/components/icons/CartIcon'
import { Makeup } from './components/makeup/Makeup'
import { Nail } from './components/nail/Nail'
import { Studio } from './components/studio/Studio'
import { Suspense } from 'react'
import { useApp } from '@/shared/providers/AppProvider'
import { Category } from './ShopView.utils'
import { useResponsive } from '@/shared/hooks/useResponsive'

const categoryMap: Record<Category, string> = {
  nail: '네일',
  hair: '머리카락',
  makeup: '메이크업',
  studio: '스튜디오',
}

const ShopViewContent = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as unknown as Category
  const { totalCart } = useApp()
  const [breadcrumbItems, setBreadcrumbItems] = useState<BaseBreadcrumbProps['items']>([
    {
      title: '홈',
    },
    { title: categoryMap[category as keyof typeof categoryMap] ?? '' },
  ])
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const { isMobile } = useResponsive()

  return (
    <div className={styles['shop-view']}>
      <div className={styles['shop-view__banner']}>
        <div className={styles['shop-view__banner__overlay']}></div>
        <div className={styles['shop-view__banner__content']}>
          <BaseContainer variant={1440}>
            <BaseBreadcrumb color="white" items={breadcrumbItems} className={styles['shop-view__banner__breadcrumb']} />
            <BaseFlex vertical gap="spacing-48px">
              <BaseTypography as="h4" size="header4" weight="semibold" color="white">
                당신에게 맞는 헤어 트리트먼트를 찾으세요 😊
              </BaseTypography>
              <Filter />
            </BaseFlex>
          </BaseContainer>
        </div>
      </div>
      <div className={styles['shop-view__content']}>
        {!isMobile && scrollY > 260 && (
          <div className={styles['shop-view__content__filter']}>
            <BaseContainer variant={1440}>
              <Filter compact />
            </BaseContainer>
          </div>
        )}
        <BaseContainer variant={1440}>
          <BaseFlex vertical gap={isMobile ? 'spacing-40px' : 'spacing-80px'}>
            <Banner />
            {category === 'hair' ? (
              <Hair />
            ) : category === 'makeup' ? (
              <Makeup />
            ) : category === 'nail' ? (
              <Nail />
            ) : category === 'studio' ? (
              <Studio />
            ) : null}
          </BaseFlex>
        </BaseContainer>
      </div>
      <BaseFloatButton
        withBadge
        badgeProps={{ count: totalCart }}
        size="xl"
        shape="square"
        href="/cart"
        icon={<CartIcon width={22} height={22} />}
      />
    </div>
  )
}

export const ShopView = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopViewContent />
    </Suspense>
  )
}
