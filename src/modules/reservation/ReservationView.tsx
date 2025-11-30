'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import React from 'react'
import { ReservationList } from './features/reservation-list/ReservationList'
import './ReservationView.scss'
import { ColorAnalyst } from './features/color-analyst/ColorAnalyst'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const ReservationView = () => {
  const [breadcrumbItems, setBreadcrumbItems] = React.useState([
    {
      title: '홈',
    },
    {
      title: '예약 내역',
    },
    {
      title: '예약',
    },
  ])
  const { largeScreen, isTablet, isMobile } = useResponsive()

  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '예약',
      children: <ReservationList />,
    },
    {
      key: '2',
      label: '색상 분석',
      children: <ColorAnalyst />,
    },
  ]
  const onChange = (key: string) => {
    const activeTab = tabItems.find((item) => item.key === key)
    if (activeTab) {
      setBreadcrumbItems((prev) => [...prev.slice(0, 2), { title: activeTab.label as string }])
    }
  }

  const boxPadding = largeScreen ? 'spacing-48px' : 'spacing-20px'
  return (
    <div>
      <BaseContainer variant={1440}>
        <BaseFlex vertical gap={boxPadding} padding={{ y: largeScreen ? 'spacing-80px' : 'spacing-40px' }}>
          <BaseBreadcrumb items={breadcrumbItems} />
          <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" borderColor="neutral-300">
            <BaseFlex vertical gap="spacing-32px">
              <BaseTypography as="h6" weight="semibold" size="header6">
                예약 세부 정보
              </BaseTypography>
              <BaseTabs defaultActiveKey="1" items={tabItems} onChange={onChange} />
            </BaseFlex>
          </BaseBox>
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
