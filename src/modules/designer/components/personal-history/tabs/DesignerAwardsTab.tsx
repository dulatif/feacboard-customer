'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { Col, Empty, Row } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from '../PersonalHistory.module.scss'

interface DesignerAwardsTabProps {
  awards: string[]
}

export const DesignerAwardsTab: React.FC<DesignerAwardsTabProps> = ({ awards }) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()

  if (!awards || awards.length === 0) {
    return (
      <BaseFlex justify="center" padding={{ y: 'spacing-20px' }}>
        <Empty description="수상 내역이 없습니다." />
      </BaseFlex>
    )
  }

  return (
    <Row gutter={[24, 40]}>
      {awards.map((award, i) => (
        <Col key={i} span={12}>
          <div className={styles['award-card']}>
            <BaseFlex vertical={isMobile} gap={isMobile ? 'spacing-12px' : 'spacing-24px'} align="center">
              <Image src="/dummy/award.png" width={isMobile ? 70 : 100} height={isMobile ? 49 : 74} alt="" />
              <BaseTypography
                as="p"
                size={largeScreen ? 'header4' : isTablet ? 'header6' : 'body1'}
                weight="bold"
                color="white"
                lineClamp={1}
              >
                {award}
              </BaseTypography>
            </BaseFlex>
          </div>
        </Col>
      ))}
    </Row>
  )
}
