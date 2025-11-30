'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { CaretLeft } from 'phosphor-react'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const CustomerServiceInquiryView = () => {
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
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <BaseBox borderWidth={0} shadow="lg" padding={{ x: boxPadding, y: boxPadding }}>
      <BaseFlex vertical gap="spacing-24px">
        <div>
          <BaseButton href="/my-account/customer-service" color="secondary-neutral" icon={<CaretLeft />}>
            반품
          </BaseButton>
        </div>
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          문의 양식
        </BaseTypography>

        <BaseFlex vertical gap="spacing-6px">
          <BaseTypography as="h6" size="body2" weight="medium">
            제목
          </BaseTypography>
          <BaseInput placeholder="제목 입력" />
        </BaseFlex>
        <BaseFlex vertical gap="spacing-6px">
          <BaseTypography as="h6" size="body2" weight="medium">
            내용
          </BaseTypography>
          <BaseFlex vertical gap="spacing-4px">
            <BaseTextarea placeholder="내용 입력" rows={5} />
            <BaseTypography as="h6" size="body2" weight="regular" color="neutral-500">
              문의사항을 작성해 주시면, 관리자가 확인 후,
            </BaseTypography>
            <BaseTypography as="h6" size="body2" weight="regular" color="neutral-500">
              순차적으로 가입하신 이메일로 답변을 드립니다.
            </BaseTypography>
          </BaseFlex>
        </BaseFlex>

        <BaseButton>문의사항 전송</BaseButton>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.CustomerService)
