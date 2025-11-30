'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseCircleWave } from '@/shared/components/base-circle-wave/BaseCircleWave'
import { Activity, ArrowRight2, DeviceMessage, DocumentForward, MessageQuestion } from 'iconsax-reactjs'
import { CaretRight, Smiley } from 'phosphor-react'
import Link from 'next/link'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const CustomerServiceView = () => {
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
        <BaseTypography as="h6" size="header6" weight="semibold">
          고객센터
        </BaseTypography>
        <BaseFlex vertical gap="spacing-48px">
          <BaseFlex vertical gap="spacing-24px">
            <BaseTypography as="h6" size="subtitle1" weight="semibold">
              페이스보드 고객센터입니다. 무엇을 도와드릴까요?
            </BaseTypography>
            <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
              <Link href={'/my-account/customer-service/inquiry'}>
                <BaseBox
                  padding={{ x: 'spacing-20px', y: 'spacing-20px' }}
                  borderWidth={0}
                  shadow={'md'}
                  radius="radius-16px"
                  style={{ cursor: 'pointer' }}
                >
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <BaseCircleWave>
                        <DeviceMessage color="#49C3D0" />
                      </BaseCircleWave>
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="h6" size="subtitle1" weight="semibold">
                          서비스 문의
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="medium" color="neutral-500">
                          로그인, 파트너 초대, 사용법 등
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                    <CaretRight size={20} />
                  </BaseFlex>
                </BaseBox>
              </Link>
              <Link href={'/my-account/customer-service'}>
                <BaseBox
                  padding={{ x: 'spacing-20px', y: 'spacing-20px' }}
                  borderWidth={0}
                  shadow={'md'}
                  radius="radius-16px"
                  style={{ cursor: 'pointer' }}
                >
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <BaseCircleWave>
                        <Smiley size={24} color="#49C3D0" />
                      </BaseCircleWave>
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="h6" size="subtitle1" weight="semibold">
                          의견과 제안
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="medium" color="neutral-500">
                          제안, 불편사항 등
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                    <CaretRight size={20} />
                  </BaseFlex>
                </BaseBox>
              </Link>
              <Link href={'/my-account/customer-service'}>
                <BaseBox
                  padding={{ x: 'spacing-20px', y: 'spacing-20px' }}
                  borderWidth={0}
                  shadow={'md'}
                  radius="radius-16px"
                  style={{ cursor: 'pointer' }}
                >
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <BaseCircleWave>
                        <Activity color="#49C3D0" />
                      </BaseCircleWave>
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="h6" size="subtitle1" weight="semibold">
                          광고 / 제휴 문의
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="medium" color="neutral-500">
                          다양한 제안을 기다립니다
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                    <CaretRight size={20} />
                  </BaseFlex>
                </BaseBox>
              </Link>
            </BaseFlex>
          </BaseFlex>

          <BaseFlex vertical gap="spacing-24px">
            <BaseTypography as="h6" size="subtitle1" weight="semibold">
              고객센터 안내사항
            </BaseTypography>
            <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
              <Link href={'/my-account/faq'}>
                <BaseBox
                  padding={{ x: 'spacing-20px', y: 'spacing-20px' }}
                  borderWidth={0}
                  shadow={'md'}
                  radius="radius-16px"
                  style={{ cursor: 'pointer' }}
                >
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <BaseCircleWave>
                        <MessageQuestion color="#49C3D0" />
                      </BaseCircleWave>
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="h6" size="subtitle1" weight="semibold">
                          FAQ
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="medium" color="neutral-500">
                          자주 묻는 질문에서 빠른 답변을 확인할 수 있습니다.
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                    <CaretRight size={20} />
                  </BaseFlex>
                </BaseBox>
              </Link>
              <Link href={'/my-account/customer-service'}>
                <BaseBox
                  padding={{ x: 'spacing-20px', y: 'spacing-20px' }}
                  borderWidth={0}
                  shadow={'md'}
                  radius="radius-16px"
                  useDefaultBackground={false}
                  style={{ cursor: 'pointer', background: 'linear-gradient(79.64deg, #923058 0%, #D86F87 100%)' }}
                >
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <BaseCircleWave color="secondary">
                        <DocumentForward color="#D86F87" />
                      </BaseCircleWave>
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="h6" size="subtitle1" weight="semibold" color="white">
                          빠른 회신을 원하시나요?
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="medium" color="white">
                          카카오톡 채널톡으로 문의주시면, 채팅으로 빠르게 회신드립니다.
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                    <CaretRight size={20} color="#ffffff" />
                  </BaseFlex>
                </BaseBox>
              </Link>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.CustomerService)
