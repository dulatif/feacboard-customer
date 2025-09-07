import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import React, { SetStateAction } from 'react'
import { EventCard } from '../../components/event-card/EventCard'
import { MenuKey } from '../../MyAccountView.utils'
import styles from './Event.module.scss'

export interface EventProps {
  setSelectedMenu: React.Dispatch<SetStateAction<MenuKey>>
  setId: React.Dispatch<SetStateAction<string | number | undefined>>
}

export const Event: React.FC<EventProps> = ({ setId, setSelectedMenu }) => {
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '예약',
      children: <EventList setId={setId} setSelectedMenu={setSelectedMenu} />,
    },
    {
      key: '2',
      label: '색상 분석',
      children: <EventList setId={setId} setSelectedMenu={setSelectedMenu} />,
    },
  ]
  return (
    <BaseBox
      padding={{ x: 'spacing-48px', y: 'spacing-48px' }}
      radius="radius-16px"
      shadow="lg"
      className={styles['my-account__event']}
    >
      <BaseFlex vertical gap="spacing-24px">
        <BaseTabs defaultActiveKey="1" items={tabItems} className={'reservation-view__tabs'} />
      </BaseFlex>
    </BaseBox>
  )
}

const EventList: React.FC<EventProps> = ({ setId, setSelectedMenu }) => {
  const data = [
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '[페보 앱 후기 이벤트]앱 후기 쓰고, 경품 이벤트에 응모해보세요 :)',
      date: '2024-11-15',
    },
  ]
  const handleRedirect = (id: number) => {
    setSelectedMenu(MenuKey['EventDetail'])
    setId(id)
  }
  return (
    <BaseFlex vertical gap="spacing-24px" className={styles['my-account__event-list']}>
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
