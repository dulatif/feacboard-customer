'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CalendarIcon from '@/shared/components/icons/CalendarIcon'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { useParams, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { EventCard } from '../../components/event-card/EventCard'
import styles from './EventDetailView.module.scss'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { withMenu } from '../../hoc/withMenu'
import { MenuKey } from '../../components/menu/Menu'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useEventDetailQuery, useEventListQuery } from '@/shared/hooks/event/useEventQuery'
import { EventType } from '@/shared/interface/event'
import DOMPurify from 'dompurify'
import { Spin } from 'antd'

export interface EventDetailViewProps {}
export const EventDetailView: React.FC<EventDetailViewProps> = ({}) => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '이벤트',
    },
  ]
  return (
    <div>
      <BannerProfile breadcrumbItems={breadcrumbItems} />
      <Content />
    </div>
  )
}

const Content = withMenu(() => {
  const router = useRouter()
  const params = useParams()
  const eventId = Number(params.id)

  const { data: event, isLoading: isEventLoading } = useEventDetailQuery({ eventId })

  // Fetch all events (both current and ended) from the API
  const { data: allEvents, isLoading: isAllEventsLoading } = useEventListQuery({
    params: {
      type: EventType.EVENT,
      sort_by: 'publish_date',
      sort_order: 'desc',
    },
  })

  const handleBack = () => {
    router.push(`/my-account/event`)
  }

  const handleRedirect = (id: number) => {
    router.push(`/my-account/event/${id}`)
  }

  // Filter other events (exclude current event)
  const otherEvents = useMemo(() => {
    if (!allEvents) return []
    return allEvents.filter((e) => e.id !== eventId).slice(0, 3) // Show only 3 other events
  }, [allEvents, eventId])

  const { largeScreen, isTablet } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'

  // Sanitize HTML content
  const sanitizedContent = event ? DOMPurify.sanitize(event.content) : ''

  if (isEventLoading) {
    return (
      <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
        <BaseFlex justify="center" align="center" style={{ minHeight: '400px' }}>
          <Spin size="large" />
        </BaseFlex>
      </BaseBox>
    )
  }

  if (!event) {
    return (
      <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
        <BaseFlex justify="center" align="center" style={{ minHeight: '400px' }}>
          <BaseTypography as="p" size="body1" color="neutral-500">
            이벤트를 찾을 수 없습니다.
          </BaseTypography>
        </BaseFlex>
      </BaseBox>
    )
  }

  return (
    <BaseBox
      padding={{ x: boxPadding, y: boxPadding }}
      radius="radius-16px"
      shadow="lg"
      className={styles['event-detail']}
    >
      <BaseFlex vertical gap="spacing-24px">
        <div>
          <BaseButton onClick={handleBack} color="secondary-neutral" icon={<ChevronLeftIcon width={20} height={20} />}>
            반품
          </BaseButton>
        </div>
        <BaseImage src={event.thumbnail} alt={event.title} height={428} />
        <BaseFlex vertical gap="spacing-40px">
          <BaseFlex vertical gap="spacing-8px">
            <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
              {event.title}
            </BaseTypography>
            <BaseFlex gap="spacing-8px" align="center">
              <CalendarIcon />
              <BaseTypography as="p" size="body1" color="neutral-500">
                {new Date(event.publish_date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
          <div
            className="rich-text-content"
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              fontSize: '16px',
              lineHeight: '1.5',
              color: '#737373',
            }}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          {otherEvents.length > 0 && (
            <BaseFlex vertical gap="spacing-24px">
              <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
                기타 이벤트
              </BaseTypography>
              <div className={styles['event-detail__other']}>
                {isAllEventsLoading ? (
                  <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
                    <Spin />
                  </BaseFlex>
                ) : (
                  otherEvents.map((e) => (
                    <div
                      className={styles['event-detail__other__item']}
                      key={e.id}
                      onClick={() => handleRedirect(e.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <EventCard
                        banner={e.thumbnail}
                        date={new Date(e.publish_date).toLocaleDateString('ko-KR')}
                        title={e.title}
                      />
                    </div>
                  ))
                )}
              </div>
            </BaseFlex>
          )}
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Event)
