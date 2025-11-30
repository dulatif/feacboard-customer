'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseCollapse, BaseCollapseProps } from '@/shared/components/base-collapse/BaseCollapse'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const FaqView = () => {
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

const items: BaseCollapseProps['items'] = [
  {
    key: '1',
    label: 'Q. 진단은 얼마나 정확한가요?',
    children: (
      <p>
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의
        정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한
        컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100%
        정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
        <br />
        <br />
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
      </p>
    ),
  },
  {
    key: '2',
    label: 'Q. 과거 진단 내역을 보려면 어떻게 해야 하나요?',
    children: (
      <p>
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의
        정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한
        컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100%
        정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
        <br />
        <br />
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
      </p>
    ),
  },
  {
    key: '3',
    label: 'Q. 커뮤니티에 광고를 기재할 수 있나요?',
    children: (
      <p>
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의
        정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한
        컬러를 찾아보시길 권장드립니다J AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100%
        정확한 진단은 아니기 때문에, 컬러 놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
        <br />
        <br />
        AI 기반으로 진단하기 때문에, 90%이상의 정확도를 보이고 있습니다. 다만, 100% 정확한 진단은 아니기 때문에, 컬러
        놀이터에서 실제로 테스트 해보면서 적합한 컬러를 찾아보시길 권장드립니다J
      </p>
    ),
  },
]

const Content = withMenu(() => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          자주묻는질문
        </BaseTypography>
        <BaseCollapse items={items} expandIconPosition="end" />
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Faq)
