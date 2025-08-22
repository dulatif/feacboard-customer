import React from 'react'
import styles from './Service.module.scss'
import { Col, Row } from 'antd'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import BaseBox from '@/shared/components/base-box/BaseBox'

export const Service = () => {
  const services = [
    {
      icon: '/icons/shop.svg',
      label: '쇼핑',
    },
    {
      icon: '/icons/personal-color.svg',
      label: '퍼스널컬러',
    },
    {
      icon: '/icons/color-playground.svg',
      label: '컬러놀이터',
    },
    {
      icon: '/icons/face-shape.svg',
      label: '얼굴형',
    },
    {
      icon: '/icons/percal-shop.svg',
      label: '퍼컬샵',
    },
    {
      icon: '/icons/hair.svg',
      label: '헤어',
    },
    {
      icon: '/icons/makeup.svg',
      label: '메이크업',
    },
    {
      icon: '/icons/nail.svg',
      label: '네일',
    },
    {
      icon: '/icons/studio.svg',
      label: '스튜디오',
    },
    {
      icon: '/icons/treatment.svg',
      label: '미용/시술',
    },
    {
      icon: '/icons/color-talk.svg',
      label: '컬러톡',
    },
    {
      icon: '/icons/community.svg',
      label: '커뮤니티',
    },
  ]
  return (
    <BaseBox radius="radius-24px" padding={{ x: 'spacing-64px', y: 'spacing-64px' }} shadow="lg">
      <Row gutter={[120, 56]} className={styles['home__service']}>
        {services.map((e, i) => (
          <Col key={i} xs={8} sm={8} lg={6} xl={4} className={styles['service__item']}>
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
