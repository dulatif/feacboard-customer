'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Flex, Space } from 'antd'
import Link from 'next/link'
import { CaretLeft } from 'phosphor-react'
import React, { useState } from 'react'
import UploadReviewPhotos from '../components/UploadReviewPhotos'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'

const ReviewHairMakeUpView = () => {
  const [reviewType, setReviewType] = useState('text')
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
    <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
      <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '16px' }} />
      <Link href="/">
        <BaseButton
          color="secondary-neutral"
          icon={<CaretLeft weight="bold" size={20} />}
          style={{ marginBottom: '48px ' }}
        >
          프로필
        </BaseButton>
      </Link>

      <Space direction="vertical" size={16} style={{ marginTop: '40px', width: '100%' }}>
        <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
          <Flex justify="space-between" align="center">
            <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
              1. 청결은 어떤가요?
            </BaseTypography>
            <BaseRate defaultValue={0} />
          </Flex>
        </BaseBox>
        <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
          <Flex justify="space-between" align="center">
            <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
              2. 환대는 어때요?
            </BaseTypography>
            <BaseRate defaultValue={0} />
          </Flex>
        </BaseBox>
        <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
          <Flex justify="space-between" align="center">
            <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
              3. 속도는 어때요?
            </BaseTypography>
            <BaseRate defaultValue={0} />
          </Flex>
        </BaseBox>
        <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
          <Flex justify="space-between" align="center">
            <Space align="center" size={8}>
              <Avatar src={'/dummy/face03.png'} alt="user avatar" size={40} />
              <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
                한별 팀장 (글래드 강남점)
              </BaseTypography>
            </Space>
            <BaseRate defaultValue={0} />
          </Flex>
        </BaseBox>
      </Space>

      <Space direction="vertical" size={40} style={{ marginTop: '40px', width: '100%' }}>
        <Space size={16}>
          <BaseButton
            onClick={() => setReviewType('text')}
            color={reviewType === 'text' ? 'primary' : 'secondary-neutral'}
          >
            텍스트만
          </BaseButton>
          <BaseButton
            onClick={() => setReviewType('media')}
            color={reviewType === 'media' ? 'primary' : 'secondary-neutral'}
          >
            사진이나 영상으로
          </BaseButton>
          <BaseButton
            onClick={() => setReviewType('both')}
            color={reviewType === 'both' ? 'primary' : 'secondary-neutral'}
          >
            이전과 이후를 함께
          </BaseButton>
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
  )
}

export default ReviewHairMakeUpView
