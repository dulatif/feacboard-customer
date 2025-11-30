'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CalendarIcon from '@/shared/components/icons/CalendarIcon'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { useRouter } from 'next/navigation'
import React from 'react'
import { EventCard } from '../../components/event-card/EventCard'
import { MenuKey } from '../../components/menu/Menu'
import styles from './InformationDetailView.module.scss'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { withMenu } from '../../hoc/withMenu'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface InformationDetailViewProps {}
export const InformationDetailView: React.FC<InformationDetailViewProps> = ({}) => {
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
  const handleBack = () => {
    router.push('/my-account/information')
  }
  const handleRedirect = (id: number) => {
    router.push(`/my-account/information/${id}`)
  }

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
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <BaseBox
      padding={{ x: boxPadding, y: boxPadding }}
      radius="radius-16px"
      shadow="lg"
      className={styles['information-detail']}
    >
      <BaseFlex vertical gap="spacing-24px">
        <div>
          <BaseButton onClick={handleBack} color="secondary-neutral" icon={<ChevronLeftIcon width={20} height={20} />}>
            반품
          </BaseButton>
        </div>
        <BaseImage src={'/dummy/banner04.png'} alt="" height={428} />
        <BaseFlex vertical gap="spacing-40px">
          <BaseFlex vertical gap="spacing-8px">
            <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
              앱 유지보수로 인한 일시 운영 중단의 건
            </BaseTypography>
            <BaseFlex gap="spacing-8px" align="center">
              <CalendarIcon />
              <BaseTypography as="p" size="body1" color="neutral-500">
                2024-11-15
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
          <BaseTypography
            as="p"
            size="body1"
            color="neutral-500"
            style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          >
            {`안녕하세요. 페이스보드 개발팀 입니다.
금일 원활한 앱 사용을 위해
새벽 02:00 – 06:00 까지 유지보수 작업을
실시할 예정입니다. 해당 시간 동안에는 앱을 사용하실 수 없으니, 이 점 참고하시기 바랍니다. 기타 문의사항은 고객센터로 전화주세요. 감사합니다.
`}
          </BaseTypography>
          <BaseFlex vertical gap="spacing-24px">
            <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
              기타 정보
            </BaseTypography>
            <div className={styles['information-detail__other']}>
              {data.map((e, i) => (
                <div
                  className={styles['information-detail__other__item']}
                  key={i}
                  onClick={() => handleRedirect(e.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <EventCard banner={e.banner} date={e.date} title={e.title} />
                </div>
              ))}
            </div>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.Information)
