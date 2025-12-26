'use client'
import React from 'react'
import styles from './Service.module.scss'
import { Col, Row, Skeleton } from 'antd'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useShopCategoryQuery } from '@/shared/hooks/shop/useShopQuery'

export const Service = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { data: categories, isLoading: isLoadingCategories } = useShopCategoryQuery()
  const { largeScreen, isTablet } = useResponsive()
  const containerPadding = largeScreen ? 'spacing-64px' : isTablet ? 'spacing-48px' : 'spacing-24px'
  const featuredCategories = [
    {
      icon: '/icons/shop.svg',
      labelKey: 'home.service.shopping',
      link: '/',
    },
    {
      icon: '/icons/personal-color.svg',
      labelKey: 'home.service.personalColor',
      link: '/ai-diagnosis',
    },
    // {
    //   icon: '/icons/ar.svg',
    //   labelKey: 'home.service.ar',
    //   link: '/',
    // },
    // {
    //   icon: '/icons/color-talk.svg',
    //   labelKey: 'home.service.colorTalk',
    //   link: '/',
    // },
    {
      icon: '/icons/community.svg',
      labelKey: 'home.service.community',
      link: '/community',
    },
  ]

  const handleRedirect = (link: string) => {
    router.push(link)
  }
  return (
    <BaseBox radius="radius-24px" padding={{ x: containerPadding, y: containerPadding }} shadow="lg">
      <Row gutter={[largeScreen ? 120 : 0, 56]} className={styles['home__service']}>
        {featuredCategories.map((category, i) => (
          <Col key={i} xs={8} sm={8} lg={6} xl={4} className={styles['service__item']}>
            <BaseFlex vertical gap="spacing-12px" justify="center" align="center" style={{ cursor: 'pointer' }}>
              <Image src={category.icon} width={40} height={40} alt={category.labelKey} />
              <BaseTypography as="p" size="body1" textAlign="center">
                {t(category.labelKey)}
              </BaseTypography>
            </BaseFlex>
          </Col>
        ))}
        {isLoadingCategories
          ? // Show skeleton loading while fetching categories
            Array.from({ length: 7 }).map((_, i) => (
              <Col key={`skeleton-${i}`} xs={8} sm={8} lg={6} xl={4} className={styles['service__item']}>
                <BaseFlex vertical gap="spacing-12px" justify="center" align="center">
                  <Skeleton.Avatar size={40} shape="square" active />
                  <Skeleton.Input active size="small" style={{ width: 60, height: 16 }} />
                </BaseFlex>
              </Col>
            ))
          : // Show actual categories when data is loaded
            categories?.map(
              (category, i) =>
                !!category.icon && (
                  <Col
                    key={i}
                    xs={8}
                    sm={8}
                    lg={6}
                    xl={4}
                    className={styles['service__item']}
                    onClick={() =>
                      handleRedirect('/shop?category=' + category.name.en.toLowerCase() + '&category_id=' + category.id)
                    }
                  >
                    <BaseFlex vertical gap="spacing-12px" justify="center" align="center" style={{ cursor: 'pointer' }}>
                      <Image src={category.icon} width={40} height={40} alt={category.name.ko} />
                      <BaseTypography as="p" size="body1" textAlign="center">
                        {/* TODO: implement i18n */}
                        {t(category.name.ko)}
                      </BaseTypography>
                    </BaseFlex>
                  </Col>
                ),
            )}
      </Row>
    </BaseBox>
  )
}
