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
import React, { useMemo } from 'react'
import styles from './ReservationCard.module.scss'
import { BaseAlert } from '@/shared/components/base-alert/BaseAlert'
import Link from 'next/link'
import { Status } from '../../ReservationView.utils'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { GetOrderResponse } from '@/api/order'
import { formatNumberCurrency } from '@/shared/utils/number'

type Category = 'nail' | 'hair' | 'makeup'
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
  data: GetOrderResponse['data'][0]
}
export const ReservationCard: React.FC<ReservationCardProps> = ({ data }) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()

  const total = useMemo(() => {
    return data.items.reduce((total, item) => {
      return total + Number(item.service_price)
    }, 0)
  }, [data?.items])

  return (
    <BaseBox
      className={styles['reservation-card']}
      padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
      radius="radius-16px"
      borderColor="neutral-300"
      shadow="no-shadow"
    >
      <BaseFlex vertical gap="spacing-16px">
        <Link href={`/reservation/${data.id}`}>
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
                  <Image src={data.shop_category_icon_url} width={24} height={24} alt={data.shop_category_icon_url} />
                  <BaseTypography as="p" size="body2">
                    {data.shop_category}
                  </BaseTypography>
                </BaseFlex>
                <BaseTypography as="p" size="body2">
                  {data.date}
                </BaseTypography>
              </BaseFlex>
              <BaseBadge variant={statusMap[data.status].color}>
                {statusMap[data.status].label}
                {data.status === 'pending' && data.start_at}
              </BaseBadge>
            </BaseFlex>

            {/* Alert */}
            {data.status === 'failed' && (
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
                    {data.shop_name}
                  </BaseTypography>
                </BaseFlex>
                {/* {designer && (
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
                )} */}
              </BaseFlex>
              <BaseFlex vertical gap="spacing-8px">
                {!isMobile && (
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    예약된 날짜
                  </BaseTypography>
                )}
                <BaseButton color="grey" icon={<CalendarSuccessIcon width={20} height={20} />}>
                  {data.date} {data.start_at}
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
                    {data.items.map((item, i) => (
                      <div key={i} className={styles['reservation-card__items__item']}>
                        <BaseTypography as="p" size="body1" color="neutral-900">
                          {item.service_name}
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" color="neutral-900">
                          {formatNumberCurrency(Number(item.service_price))}원
                        </BaseTypography>
                      </div>
                    ))}
                    {/* {addons && (
                      <div className={styles['reservation-card__items__item']}>
                        <BaseTypography as="p" size="caption" color="neutral-500">
                          추가 : {addons.items.join(', ')} (+{addons.total}원)
                        </BaseTypography>
                        <BaseTypography as="p" size="caption" color="neutral-500">
                          전체 추가 비용 포함
                        </BaseTypography>
                      </div>
                    )} */}
                  </BaseFlex>
                </BaseFlex>
              </div>
              <BaseTypography as="h6" size="header6" weight="bold" color="neutral-900">
                총액 : {formatNumberCurrency(Number(total))}원
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
        </Link>

        {/* Footer */}
        <BaseFlex justify="flex-end">
          {data.status === 'completed' && data.rate ? (
            <BaseRate value={data.rate} disabled />
          ) : data.status === 'completed' ? (
            <BaseFlex gap="spacing-8px" align="center">
              <BaseTypography as="p" size="body1" color="success-600">
                + 100점
              </BaseTypography>
              <BaseButton
                icon={<Edit02Icon width={20} height={20} />}
                href={`/review/${data.shop_category === 'Nail' ? 'nail-studio' : 'hair-makeup'}`}
              >
                리뷰를 쓰다
              </BaseButton>
            </BaseFlex>
          ) : data.status === 'in-progress' ? (
            <BaseTypography as="h6" size="header6" weight="bold" color="success-600">
              예약 코드: {'-'}
            </BaseTypography>
          ) : null}
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
