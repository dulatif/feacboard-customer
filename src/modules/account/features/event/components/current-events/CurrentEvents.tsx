import { EventCard } from '@/modules/account/components/event-card/EventCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import { useRouter } from 'next/navigation'
import React from 'react'

export const CurrentEvents = () => {
  const router = useRouter()
  const data = [
    {
      id: 1,
      banner: '/dummy/banner03.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner03.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner03.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
  ]
  const handleRedirect = (id: number) => {
    router.push(`/my-account/event/${id}`)
  }
  return (
    <BaseFlex vertical gap="spacing-24px">
      <BaseInput prefix={<SearchIcon width={20} height={20} />} placeholder="상품명 검색" size="large" />
      <BaseFlex vertical gap="spacing-48px">
        {data.map((e, i) => (
          <div key={i} onClick={() => handleRedirect(e.id)} style={{ cursor: 'pointer' }}>
            <EventCard banner={e.banner} date={e.date} title={e.title} />
          </div>
        ))}
        <BasePagination defaultCurrent={1} pageSize={2} total={50} />
      </BaseFlex>
    </BaseFlex>
  )
}
