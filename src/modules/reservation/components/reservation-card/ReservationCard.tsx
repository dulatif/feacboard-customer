import { BaseBadge, BaseBadgeProps } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CalendarSuccessIcon from '@/shared/components/icons/CalendarSuccessIcon'
import Edit02Icon from '@/shared/components/icons/Edit02Icon'
import ReceiptIcon from '@/shared/components/icons/ReceiptIcon'
import { Avatar } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from './ReservationCard.module.scss'
import { BaseAlert } from '@/shared/components/base-alert/BaseAlert'
import Link from 'next/link'
import { Status } from '../../ReservationView.utils'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'

type Category = 'nail' | 'hair' | 'makeup'
const categoryMap: Record<Category, { label: string; icon: string }> = {
  nail: {
    label: '네일',
    icon: '/icons/nail.svg',
  },
  hair: {
    label: '머리카락',
    icon: '/icons/hair.svg',
  },
  makeup: {
    label: '메이크업',
    icon: '/icons/makeup.svg',
  },
}
const statusMap: Record<Status, { label: string; color: BaseBadgeProps['variant'] }> = {
  'in-progress': {
    label: '진행 중',
    color: 'info-100',
  },
  pending: {
    label: '결제 대기 중',
    color: 'warning-100',
  },
  completed: {
    label: '완료',
    color: 'success-100',
  },
  failed: {
    label: '실패한',
    color: 'danger-100',
  },
}
interface Item {
  title: string
  price: number
}
export interface ReservationCardProps {
  data: {
    category: Category
    status: Status
    date: string
    reservedDate: string
    reservationCode?: string
    rate?: number
    store: string
    designer?: {
      picture: string
      name: string
    }
    items: Item[]
    addons?: {
      items: string[]
      total: number
    }
  }
}
export const ReservationCard: React.FC<ReservationCardProps> = ({ data }) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const { category, status, date, reservedDate, reservationCode, rate, store, designer, items, addons } = data
  return (
    <BaseBox
      className={styles['reservation-card']}
      padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
      radius="radius-16px"
      borderColor="neutral-300"
      shadow="no-shadow"
    >
      <BaseFlex vertical gap="spacing-16px">
        <Link href={`/reservation/123?status=${status}`}>
          <BaseFlex vertical gap="spacing-16px">
            {/* Header */}
            <BaseFlex
              vertical={isMobile}
              justify="space-between"
              gap={largeScreen ? 'spacing-24px' : 'spacing-12px'}
              align={isMobile ? 'flex-start' : 'center'}
            >
              <BaseFlex gap="spacing-24px" align="center">
                <BaseFlex gap="spacing-8px" align="center">
                  <Image src={categoryMap[category].icon} width={24} height={24} alt={category} />
                  <BaseTypography as="p" size="body2">
                    {categoryMap[category].label}
                  </BaseTypography>
                </BaseFlex>
                <BaseTypography as="p" size="body2">
                  {date}
                </BaseTypography>
              </BaseFlex>
              <BaseBadge variant={statusMap[status].color}>
                {statusMap[status].label}
                {status === 'pending' && '4:59:12'}
              </BaseBadge>
            </BaseFlex>

            {/* Alert */}
            {status === 'failed' && (
              <BaseAlert message="결제가 거부되었습니다. 다시 시도하거나 다른 결제 방법을 시도해 보세요." />
            )}

            {/* Header Extra */}
            <BaseFlex vertical={isMobile} justify="space-between" gap={largeScreen ? 'spacing-24px' : 'spacing-12px'}>
              <BaseFlex gap="spacing-24px">
                <BaseFlex vertical gap="spacing-8px">
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    가게
                  </BaseTypography>
                  <BaseTypography as="p" size="body1" color="neutral-900">
                    {store}
                  </BaseTypography>
                </BaseFlex>
                {designer && (
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseTypography as="span" size="caption" color="neutral-500">
                      디자이너
                    </BaseTypography>
                    <BaseFlex gap="spacing-8px" align="center">
                      <Avatar src={designer?.picture} size={24} />
                      <BaseTypography as="p" size="body1" color="neutral-900">
                        {designer?.name}
                      </BaseTypography>
                    </BaseFlex>
                  </BaseFlex>
                )}
              </BaseFlex>
              <BaseFlex vertical gap="spacing-8px">
                {!isMobile && (
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    예약된 날짜
                  </BaseTypography>
                )}
                <BaseButton color="grey" icon={<CalendarSuccessIcon width={20} height={20} />}>
                  {/* {reservedDate} */}
                  2024년 12월 1일 , 오후 11:00
                </BaseButton>
              </BaseFlex>
            </BaseFlex>

            {/* Body */}
            <BaseFlex
              vertical={isMobile}
              gap="spacing-24px"
              justify="space-between"
              align={isMobile ? 'flex-start' : 'flex-end'}
            >
              <div>
                <BaseFlex vertical gap="spacing-16px">
                  <BaseFlex gap="spacing-8px">
                    <ReceiptIcon width={20} height={20} />
                    <BaseTypography as="p" size="body2" weight="semibold" color="neutral-900">
                      주문된 서비스
                    </BaseTypography>
                  </BaseFlex>
                  <BaseFlex vertical gap="spacing-8px">
                    {items.map((item, i) => (
                      <div key={i} className={styles['reservation-card__items__item']}>
                        <BaseTypography as="p" size="body1" color="neutral-900">
                          {item.title}
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" color="neutral-900">
                          {item.price}원
                        </BaseTypography>
                      </div>
                    ))}
                    {addons && (
                      <div className={styles['reservation-card__items__item']}>
                        <BaseTypography as="p" size="caption" color="neutral-500">
                          추가 : {addons.items.join(', ')} (+{addons.total}원)
                        </BaseTypography>
                        <BaseTypography as="p" size="caption" color="neutral-500">
                          전체 추가 비용 포함
                        </BaseTypography>
                      </div>
                    )}
                  </BaseFlex>
                </BaseFlex>
              </div>
              <BaseTypography as="h6" size="header6" weight="bold" color="neutral-900">
                총액 : 17000원
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
        </Link>

        {/* Footer */}
        <BaseFlex justify="flex-end">
          {status === 'completed' && rate ? (
            <BaseRate value={rate} disabled />
          ) : status === 'completed' ? (
            <BaseFlex gap="spacing-8px" align="center">
              <BaseTypography as="p" size="body1" color="success-600">
                + 100점
              </BaseTypography>
              <BaseButton
                icon={<Edit02Icon width={20} height={20} />}
                href={`/review/${category === 'nail' ? 'nail-studio' : 'hair-makeup'}`}
              >
                리뷰를 쓰다
              </BaseButton>
            </BaseFlex>
          ) : status === 'in-progress' && reservationCode ? (
            <BaseTypography as="h6" size="header6" weight="bold" color="success-600">
              예약 코드: {reservationCode}
            </BaseTypography>
          ) : null}
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
