'use client'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Flex, Space } from 'antd'
import Link from 'next/link'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import UploadReviewPhotos from '../components/UploadReviewPhotos'
import ReviewRatingRow from '../components/ReviewRatingRow'
import ReviewTypeButton, { reviewTypes } from '../components/ReviewTypeButton'
import ModalCancelReview from '../components/ModalCancelReview'

const ReviewNailStuidioView = () => {
  const [reviewType, setReviewType] = useState('text')
  const [showModalCancel, setShowModalCancel] = useState(false)
  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: '예약 내역',
    },
    {
      title: '리뷰 작성',
    },
  ]

  return (
    <>
      <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
        <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '16px' }} />
        <BaseButton
          color="secondary-neutral"
          icon={<CaretLeft weight="bold" size={20} />}
          style={{ marginBottom: '40px ' }}
          onClick={() => setShowModalCancel(true)}
        >
          프로필
        </BaseButton>

        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <ReviewRatingRow label="1. 청결은 어떤가요?" />
          <ReviewRatingRow label="2. 환대는 어때요?" />
          <ReviewRatingRow label="3. 속도는 어때요?" />
        </Space>

        <Space direction="vertical" size={40} style={{ marginTop: '40px', width: '100%' }}>
          <Space size={16}>
            {reviewTypes.map(({ value, label }) => (
              <ReviewTypeButton key={value} value={value} active={reviewType === value} onClick={setReviewType}>
                {label}
              </ReviewTypeButton>
            ))}
          </Space>
          {reviewType === 'media' && (
            <>
              <UploadReviewPhotos />
            </>
          )}
          {reviewType === 'both' && (
            <>
              <Space direction="vertical" size={16}>
                <BaseBadge variant="danger-100">~ 전에</BaseBadge>
                <UploadReviewPhotos />
              </Space>
              <Space direction="vertical" size={16}>
                <BaseBadge variant="success-100">~ 후에</BaseBadge>
                <UploadReviewPhotos />
              </Space>
            </>
          )}
          <BaseTextarea placeholder="뭔가 신나는 걸 써봐" autoSize={{ minRows: 5, maxRows: 6 }} />
          <BaseButton size="xl" variant="fullwidth">
            작성 완료
          </BaseButton>
        </Space>
      </BaseContainer>
      <ModalCancelReview
        isOpen={showModalCancel}
        onConfirm={() => setShowModalCancel(false)}
        onCancel={() => setShowModalCancel(false)}
      />
    </>
  )
}

export default ReviewNailStuidioView
