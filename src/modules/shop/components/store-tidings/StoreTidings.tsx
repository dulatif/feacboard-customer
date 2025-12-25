import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import { TidingsCard, TidingsCardProps } from '../tidings-card/TidingsCard'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { useShopEventListQuery } from '@/shared/hooks/event/useEventQuery'
import { Spin } from 'antd'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

export interface StoreTidingsProps {
  shopId: number
}

export const StoreTidings: React.FC<StoreTidingsProps> = ({ shopId }) => {
  const { data: events, isLoading } = useShopEventListQuery({ shopId })

  if (isLoading) {
    return (
      <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
        <Spin />
      </BaseFlex>
    )
  }

  if (!events || events.length === 0) {
    return (
      <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
        <BaseTypography as="p" size="body1" color="neutral-500">
          등록된 소식이 없습니다.
        </BaseTypography>
      </BaseFlex>
    )
  }

  // Map Event data to TidingsCardProps format with IDs
  const tidingsData = events.map((event) => ({
    id: event.id,
    props: {
      title: event.title,
      date: new Date(event.publish_date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      images: event.thumbnails && event.thumbnails.length > 0 ? event.thumbnails : undefined,
      subtitle: event.type === 'event' ? '이벤트' : '웹 정보',
      description: event.content,
    },
  }))

  return (
    <BaseFlex vertical gap="spacing-40px">
      {tidingsData.map((item, i) => (
        <React.Fragment key={item.id}>
          <TidingsCard {...item.props} />
          {i + 1 !== tidingsData.length && <BaseDivider />}
        </React.Fragment>
      ))}
    </BaseFlex>
  )
}
