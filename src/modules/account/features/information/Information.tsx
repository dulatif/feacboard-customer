import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import React, { SetStateAction } from 'react'
import { MenuKey } from '../../MyAccountView.utils'
import { EventCard } from '../../components/event-card/EventCard'

export interface InformationProps {
  setSelectedMenu: React.Dispatch<SetStateAction<MenuKey>>
  setId: React.Dispatch<SetStateAction<string | number | undefined>>
}

export const Information: React.FC<InformationProps> = ({ setSelectedMenu, setId }) => {
  const data = [
    {
      id: 1,
      banner: '/dummy/banner04.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner04.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner04.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
  ]
  const handleRedirect = (id: number) => {
    setSelectedMenu(MenuKey['InformationDetail'])
    setId(id)
  }
  return (
    <BaseBox padding={{ x: 'spacing-48px', y: 'spacing-48px' }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          발표
        </BaseTypography>
        <BaseInput prefix={<SearchIcon width={20} height={20} />} placeholder="상품명 검색" size="large" />
        <BaseFlex vertical gap="spacing-48px">
          {data.map((e, i) => (
            <div key={i} onClick={() => handleRedirect(e.id)}>
              <EventCard banner={e.banner} date={e.date} title={e.title} />
            </div>
          ))}
          <BasePagination defaultCurrent={1} pageSize={2} total={50} />
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
