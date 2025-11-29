'use client'
import React from 'react'
import styles from './Service.module.scss'
import { Col, Row } from 'antd'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const Service = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const containerPadding = largeScreen ? 'spacing-64px' : isTablet ? 'spacing-48px' : 'spacing-24px'
  const services = [
    {
      icon: '/icons/shop.svg',
      labelKey: 'home.service.shopping',
      link: '/',
    },
    {
      icon: '/icons/personal-color.svg',
      labelKey: 'home.service.personalColor',
      link: '/',
    },
    {
      icon: '/icons/ar.svg',
      labelKey: 'home.service.ar',
      link: '/',
    },
    {
      icon: '/icons/facial-skeleton.svg',
      labelKey: 'home.service.facialSkeleton',
      link: '/',
    },
    {
      icon: '/icons/percal-shop.svg',
      labelKey: 'home.service.personalColorShop',
      link: '/',
    },
    {
      icon: '/icons/hair.svg',
      labelKey: 'home.service.hair',
      link: '/shop?category=hair',
    },
    {
      icon: '/icons/makeup.svg',
      labelKey: 'home.service.makeup',
      link: '/shop?category=makeup',
    },
    {
      icon: '/icons/nail.svg',
      labelKey: 'home.service.nail',
      link: '/shop?category=nail',
    },
    {
      icon: '/icons/studio.svg',
      labelKey: 'home.service.studio',
      link: '/shop?category=studio',
    },
    {
      icon: '/icons/treatment.svg',
      labelKey: 'home.service.beautyProcedure',
      link: '/',
    },
    {
      icon: '/icons/color-talk.svg',
      labelKey: 'home.service.colorTalk',
      link: '/',
    },
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
        {services.map((e, i) => (
          <Col
            key={i}
            xs={8}
            sm={8}
            lg={6}
            xl={4}
            className={styles['service__item']}
            onClick={() => handleRedirect(e.link)}
          >
            <BaseFlex vertical gap="spacing-12px" justify="center" align="center" style={{ cursor: 'pointer' }}>
              <Image src={e.icon} width={40} height={40} alt={e.labelKey} />
              <BaseTypography as="p" size="body1" textAlign="center">
                {t(e.labelKey)}
              </BaseTypography>
            </BaseFlex>
          </Col>
        ))}
      </Row>
    </BaseBox>
  )
}
