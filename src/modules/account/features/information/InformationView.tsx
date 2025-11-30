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
import React from 'react'
import { EventCard } from '../../components/event-card/EventCard'
import { useResponsive } from '@/shared/hooks/useResponsive'

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
  const redirectToInformationDetail = (id: number) => {
    router.push(`/my-account/information/${id}`)
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          발표
        </BaseTypography>
        <BaseInput prefix={<SearchIcon width={20} height={20} />} placeholder="상품명 검색" size="large" />
        <BaseFlex vertical gap="spacing-48px">
          {data.map((e, i) => (
            <div key={i} onClick={() => redirectToInformationDetail(e.id)} style={{ cursor: 'pointer' }}>
              <EventCard banner={e.banner} date={e.date} title={e.title} />
            </div>
          ))}
          <BasePagination defaultCurrent={1} pageSize={2} total={50} />
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Information)
