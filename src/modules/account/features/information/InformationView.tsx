'use client'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { EventCard } from '../../components/event-card/EventCard'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useEventListQuery } from '@/shared/hooks/event/useEventQuery'
import { EventType } from '@/shared/interface/event'
import { Spin } from 'antd'
import { InfoCircle } from 'iconsax-reactjs'

export const InformationView = () => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '정보',
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
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6

  // Fetch only web-info events from the API
  const { data: events, isLoading } = useEventListQuery({
    params: {
      type: EventType.WEBINFO,
      sort_by: 'publish_date',
      sort_order: 'desc',
    },
  })

  // Apply search filter
  const filteredEvents = useMemo(() => {
    if (!events) return []

    if (!searchQuery) return events

    return events.filter((event) => event.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [events, searchQuery])

  // Paginate events
  const paginatedEvents = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = start + pageSize
    return filteredEvents.slice(start, end)
  }, [filteredEvents, currentPage])

  const redirectToInformationDetail = (id: number) => {
    router.push(`/my-account/information/${id}`)
  }

  const { largeScreen, isTablet } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'

  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          발표
        </BaseTypography>
        <BaseInput
          prefix={<SearchIcon width={20} height={20} />}
          placeholder="정보 검색"
          size="large"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <BaseFlex vertical gap="spacing-48px">
          {isLoading ? (
            <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
              <Spin />
            </BaseFlex>
          ) : paginatedEvents.length === 0 ? (
            <BaseFlex justify="center" vertical align="center" style={{ minHeight: '200px' }}>
              <InfoCircle
                size={100}
                variant="Bulk"
                style={{ display: 'block', color: 'var(--color-neutral-400)', marginBottom: '16px' }}
              />
              <BaseTypography as="p" size="body1" color="neutral-500">
                등록된 이벤트가 없습니다.
              </BaseTypography>
            </BaseFlex>
          ) : (
            <>
              {paginatedEvents.map((event) => (
                <div key={event.id} onClick={() => redirectToInformationDetail(event.id)} style={{ cursor: 'pointer' }}>
                  <EventCard
                    banner={event.thumbnail}
                    date={new Date(event.publish_date).toLocaleDateString('ko-KR')}
                    title={event.title}
                  />
                </div>
              ))}
              <BasePagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredEvents.length}
                onChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Information)
