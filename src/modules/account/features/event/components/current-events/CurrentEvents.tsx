import { EventCard } from '@/modules/account/components/event-card/EventCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { useEventListQuery } from '@/shared/hooks/event/useEventQuery'
import { EventStatus, EventType } from '@/shared/interface/event'
import { Spin } from 'antd'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

export const CurrentEvents = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6

  // Fetch current events from the API
  const { data: events, isLoading } = useEventListQuery({
    params: {
      type: EventType.EVENT,
      status: EventStatus.CURRENT,
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

  const handleRedirect = (id: number) => {
    router.push(`/my-account/event/${id}`)
  }

  return (
    <BaseFlex vertical gap="spacing-24px">
      <BaseInput
        prefix={<SearchIcon width={20} height={20} />}
        placeholder="이벤트 검색"
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
          <BaseFlex justify="center" align="center" style={{ minHeight: '200px' }}>
            <BaseTypography as="p" size="body1" color="neutral-500">
              등록된 이벤트가 없습니다.
            </BaseTypography>
          </BaseFlex>
        ) : (
          <>
            {paginatedEvents.map((event) => (
              <div key={event.id} onClick={() => handleRedirect(event.id)} style={{ cursor: 'pointer' }}>
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
  )
}
