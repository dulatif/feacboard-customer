'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseSwitch } from '@/shared/components/base-switch/BaseSwitch'
import BellIcon from '@/shared/components/icons/BellIcon'
import { BaseCircleWave } from '@/shared/components/base-circle-wave/BaseCircleWave'
import SmsIcon from '@/shared/components/icons/SmsIcon'
import DocumentNormalIcon from '@/shared/components/icons/DocumentNormalIcon'
import CommandIcon from '@/shared/components/icons/CommandIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const NotificationSettingsView = () => {
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
    <BaseBox padding={{ x: boxPadding, y: boxPadding }} radius="radius-16px" shadow="lg">
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
          알림 설정
        </BaseTypography>
        <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
          <BaseFlex vertical gap="spacing-20px">
            <BaseFlex justify="space-between" align="center" gap="spacing-20px">
              <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                전체 알림 허용
              </BaseTypography>
              <BaseSwitch />
            </BaseFlex>
            <BaseDivider />
          </BaseFlex>

          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex gap="spacing-16px" align="center">
              <BaseCircleWave>
                <BellIcon color="#49C3D0" />
              </BaseCircleWave>
              <BaseTypography as="p" size="subtitle1" weight="semibold" color="neutral-700">
                앱 알림
              </BaseTypography>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-40px">
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    공지사항 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    이벤트 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>

          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex gap="spacing-16px" align="center">
              <BaseCircleWave>
                <CommandIcon color="#49C3D0" />
              </BaseCircleWave>
              <BaseTypography as="p" size="subtitle1" weight="semibold" color="neutral-700">
                커뮤니티 알림
              </BaseTypography>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-40px">
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    댓글/ 대댓글 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    좋아요 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    커뮤니티 인기글 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>

          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex gap="spacing-16px" align="center">
              <BaseCircleWave>
                <DocumentNormalIcon color="#49C3D0" />
              </BaseCircleWave>
              <BaseTypography as="p" size="subtitle1" weight="semibold" color="neutral-700">
                예약 / 결제 알림
              </BaseTypography>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-40px">
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    예약 하루 전 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    결제 완료 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>

          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex gap="spacing-16px" align="center">
              <BaseCircleWave>
                <SmsIcon color="#49C3D0" />
              </BaseCircleWave>
              <BaseTypography as="p" size="subtitle1" weight="semibold" color="neutral-700">
                메시지 알림
              </BaseTypography>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-40px">
              <BaseFlex vertical gap="spacing-20px">
                <BaseFlex justify="space-between" align="center" gap="spacing-20px">
                  <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-700">
                    새 메시지 알림
                  </BaseTypography>
                  <BaseSwitch />
                </BaseFlex>
                <BaseDivider />
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.NotificationSettings)
