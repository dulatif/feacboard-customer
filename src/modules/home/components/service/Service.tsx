'use client'
import React from 'react'
import styles from './Service.module.scss'
import { Col, Row } from 'antd'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { useRouter } from 'next/navigation'

export const Service = () => {
  const router = useRouter()
  const services = [
    {
      icon: '/icons/shop.svg',
      label: '쇼핑',
      link: '/',
    },
    {
      icon: '/icons/personal-color.svg',
      label: '퍼스널컬러',
      link: '/',
    },
    {
      icon: '/icons/color-playground.svg',
      label: '컬러놀이터',
      link: '/',
    },
    {
      icon: '/icons/face-shape.svg',
      label: '얼굴형',
      link: '/',
    },
    {
      icon: '/icons/percal-shop.svg',
      label: '퍼컬샵',
      link: '/shop?category=퍼컬샵',
    },
    {
      icon: '/icons/hair.svg',
      label: '헤어',
      link: '/',
    },
    {
      icon: '/icons/makeup.svg',
      label: '메이크업',
      link: '/',
    },
    {
      icon: '/icons/nail.svg',
      label: '네일',
      link: '/shop?category=네일',
    },
    {
      icon: '/icons/studio.svg',
      label: '스튜디오',
      link: '/shop?category=스튜디오',
    },
    {
      icon: '/icons/treatment.svg',
      label: '미용/시술',
      link: '/shop?category=미용/시술',
    },
    {
      icon: '/icons/color-talk.svg',
      label: '컬러톡',
      link: '/',
    },
    {
      icon: '/icons/community.svg',
      label: '커뮤니티',
      link: '/',
    },
  ]

  const handleRedirect = (link: string) => {
    router.push(link)
  }
  return (
    <BaseBox radius="radius-24px" padding={{ x: 'spacing-64px', y: 'spacing-64px' }} shadow="lg">
      <Row gutter={[120, 56]} className={styles['home__service']}>
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
              <Image src={e.icon} width={40} height={40} alt={e.label} />
              <BaseTypography as="p" size="body1">
                {e.label}
              </BaseTypography>
            </BaseFlex>
          </Col>
        ))}
      </Row>
    </BaseBox>
  )
}
