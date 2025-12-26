'use client'
import { BaseBreadcrumb, BaseBreadcrumbProps } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseFloatButton } from '@/shared/components/base-float-button/BaseFloatButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useApp } from '@/shared/providers/AppProvider'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { Banner } from './components/banner/Banner'
import { Filter } from './components/filter/Filter'
import { StakeHolderWrapper } from './components/stakeholder-wrapper/StakeHolderWrapper'
import styles from './ShopView.module.scss'
import { TCategoryLabel } from './ShopView.utils'

const categoryMap: Record<TCategoryLabel, string> = {
  nail: '네일',
  hair: '머리카락',
  makeup: '메이크업',
  studio: '스튜디오',
}

const ShopViewContent = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as unknown as TCategoryLabel
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
            <StakeHolderWrapper />
          </BaseFlex>
        </BaseContainer>
      </div>
      <Link href={'/cart'}>
        <BaseFloatButton
          withBadge
          badgeProps={{ count: totalCart }}
          size="xl"
          shape="square"
          icon={<CartIcon width={22} height={22} />}
        />
      </Link>
    </div>
  )
}

export const ShopView = () => {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ShopViewContent />
    </Suspense>
  )
}
