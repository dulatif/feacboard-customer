import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { Avatar, Space, Typography } from 'antd'
import React from 'react'
import styles from '../AIOnboardingView.module.scss'
import DiagnosisTypeBadge, { TDiagnosisType } from './DiagnosisTypeBadge'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

const { Text } = Typography

interface CardReviewProps {
  type: TDiagnosisType
  avatarUrl: string
  userName: string
  rating: number
  reviewText: string
}

const CardReview: React.FC<CardReviewProps> = ({ type, avatarUrl, userName, rating, reviewText }) => {
  return (
    <BaseBox shadow="md" className={styles['card-review']}>
      {/* Header: User Info and Rating */}
      <div className={styles['card-header']}>
        <Space className={styles['user-info']} align="center">
          <Avatar src={avatarUrl} alt={`${userName}'s avatar`} size={40} className={styles['user-avatar']} />
          <Text strong className={styles['user-name']}>
            {userName}
          </Text>
        </Space>

        <Space align="center" className={styles['rating-info']}>
          <BaseRate disabled allowHalf defaultValue={rating} />
          <BaseTypography as="p" size="subtitle1" weight="bold" className={styles['rating-score']}>
            {rating}/5
          </BaseTypography>
        </Space>
      </div>

      {/* AI Diagnosis Tag (Conditional) */}
      <div style={{ margin: '24px auto' }}>
        <DiagnosisTypeBadge type={type} />
      </div>

      {/* Review Text */}
      <BaseTypography as="p" color="neutral-500" size="body1">
        {reviewText}
      </BaseTypography>
    </BaseBox>
  )
}

export default CardReview
