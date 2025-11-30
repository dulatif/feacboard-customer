import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Flex, Rate, Row, Space } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from '../AIOnboardingView.module.scss'
import DiagnosisTypeBadge, { TDiagnosisType } from './DiagnosisTypeBadge'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import Link from 'next/link'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'

interface AIDIagnosisCardProps {
  imageUrl: string
  type: TDiagnosisType
  title: string
  rating: number
  reviewCount: number
  originalPrice: string
  currentPriceText: string
}

const AIDIagnosisCard: React.FC<AIDIagnosisCardProps> = ({
  type,
  imageUrl,
  title,
  rating,
  reviewCount,
  originalPrice,
  currentPriceText,
}) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <div className={styles['ai_diagnosis_card']}>
      <Row gutter={largeScreen ? 20 : 12} align="top">
        {/* Left Column: Image */}
        <Col span={largeScreen ? 10 : 8}>
          <Image src={imageUrl} alt="Personal Color Model" width={251} height={251} className={styles['image']} />
        </Col>

        {/* Right Column: Content */}
        <Col span={largeScreen ? 14 : 16}>
          <BaseFlex
            gap={largeScreen ? 'spacing-0px' : 'spacing-20px'}
            vertical
            justify="space-between"
            style={{ minHeight: largeScreen ? 240 : 'auto' }}
          >
            <BaseFlex vertical gap={largeScreen ? 'spacing-20px' : 'spacing-12px'}>
              {/* Title/Header */}
              <DiagnosisTypeBadge type={type} />

              {/* Description */}
              <BaseTypography as="p" size="body1" weight="semibold">
                {title}
              </BaseTypography>

              {/* Rating */}
              <Space align="center">
                <BaseRate disabled allowHalf defaultValue={rating} />
                <BaseTypography as="p" size="body1" color="neutral-500">
                  ({reviewCount} 리뷰)
                </BaseTypography>
              </Space>
            </BaseFlex>

            <BaseFlex justify="space-between" align="center">
              <div>
                <BaseTypography
                  as="p"
                  size="subtitle1"
                  weight="medium"
                  color="danger-500"
                  style={{ textDecoration: 'line-through' }}
                >
                  {originalPrice}
                </BaseTypography>
                <BaseTypography as="h6" size="header6" weight="semibold">
                  {currentPriceText}
                </BaseTypography>
              </div>
              <BaseButton href={`/ai-diagnosis/${type}`}>지금 시도해보세요</BaseButton>
            </BaseFlex>
          </BaseFlex>
        </Col>
      </Row>
    </div>
  )
}

export default AIDIagnosisCard
