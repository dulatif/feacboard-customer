'use client'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { CurrentEvents } from './components/current-events/CurrentEvents'
import { EndedEvents } from './components/ended-events/EndedEvents'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const EventView = () => {
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
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '현재 진행중인 이벤트',
      children: <CurrentEvents />,
    },
    {
      key: '2',
      label: '종료된 이벤트',
      children: <EndedEvents />,
    },
  ]
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTabs defaultActiveKey="1" items={tabItems} />
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Event)
