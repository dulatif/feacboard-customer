import React, { SetStateAction } from 'react'
import { MenuKey } from '../../MyAccountView.utils'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CalendarIcon from '@/shared/components/icons/CalendarIcon'
import styles from './EventDetail.module.scss'
import { EventCard } from '../../components/event-card/EventCard'

export interface EventDetailProps {
  setSelectedMenu: React.Dispatch<SetStateAction<MenuKey>>
  id?: string | number
  setId: React.Dispatch<SetStateAction<string | number | undefined>>
}
export const EventDetail: React.FC<EventDetailProps> = ({ setSelectedMenu, id, setId }) => {
  const handleBack = () => {
    setSelectedMenu(MenuKey['Event'])
  }
  const handleRedirect = (id: number) => {
    setSelectedMenu(MenuKey['EventDetail'])
    setId(id)
  }

  const data = [
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
    {
      id: 1,
      banner: '/dummy/banner05.png',
      title: '앱 유지보수로 인한 일시 운영 중단의 건',
      date: '2024-11-15',
    },
  ]
  if (id) {
    return (
      <BaseBox
        padding={{ x: 'spacing-48px', y: 'spacing-48px' }}
        radius="radius-16px"
        shadow="lg"
        className={styles['event-detail']}
      >
        <BaseFlex vertical gap="spacing-24px">
          <div>
            <BaseButton
              onClick={handleBack}
              color="secondary-neutral"
              icon={<ChevronLeftIcon width={20} height={20} />}
            >
              반품
            </BaseButton>
          </div>
          <BaseImage src={'/dummy/banner05.png'} alt="" height={428} />
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
실시할 예정입니다. 해당 시간 동안에는 앱을 사용하실 수 없으니, 이 점 참고하시기 바랍니다. 기타 문의사항은 고객센터로 전화주세요...
감사합니다.
`}
            </BaseTypography>
            <BaseFlex vertical gap="spacing-24px">
              <BaseTypography as="h6" size="header6" weight="semibold" color="neutral-700">
                기타 정보
              </BaseTypography>
              <div className={styles['event-detail__other']}>
                {data.map((e, i) => (
                  <div
                    className={styles['event-detail__other__item']}
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
  }
  setSelectedMenu(MenuKey['PointEarned'])
  return null
}
