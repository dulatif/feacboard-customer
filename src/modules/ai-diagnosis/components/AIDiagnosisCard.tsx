import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Flex, Rate, Row, Space } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from '../AIOnboardingView.module.scss'
import DiagnosisTypeBadge, { TDiagnosisType } from './DiagnosisTypeBadge'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'

interface AIDIagnosisCardProps {
  imageUrl: string
  type: TDiagnosisType
  title: string
  rating: number
  reviewCount: number
  originalPrice: string
  currentPriceText: string
  onButtonClick: () => void
}

const AIDIagnosisCard: React.FC<AIDIagnosisCardProps> = ({
  type,
  imageUrl,
  title,
  rating,
  reviewCount,
  originalPrice,
  currentPriceText,
  onButtonClick,
}) => {
  return (
    <div className={styles['ai_diagnosis_card']}>
      <Row gutter={20} align="top">
        {/* Left Column: Image */}
        <Col span={10}>
          <Image src={imageUrl} alt="Personal Color Model" width={251} height={251} className={styles['image']} />
        </Col>

        {/* Right Column: Content */}
        <Col span={14}>
          <Flex vertical justify="space-between" style={{ minHeight: '240px' }}>
            <Space direction="vertical" size={20}>
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
            </Space>

            <Row align={'bottom'} justify={'space-between'}>
              {/* Price */}
              <div style={{ margin: '10px 0' }}>
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

              {/* Button */}
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <BaseButton onClick={onButtonClick}>지금 시도해보세요</BaseButton>
              </div>
            </Row>
          </Flex>
        </Col>
      </Row>
    </div>
  )
}

export default AIDIagnosisCard
