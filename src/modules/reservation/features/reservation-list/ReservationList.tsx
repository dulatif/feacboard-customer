import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseRangePicker, BaseRangePickerProps } from '@/shared/components/base-rangepicker/BaseRangePicker'
import { BaseSelect } from '@/shared/components/base-select/BaseSelect'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import styles from './ReservationList.module.scss'
import { ReservationCard, ReservationCardProps } from '../../components/reservation-card/ReservationCard'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { Empty } from 'antd'
import { useGetOrderQuery } from '@/shared/hooks/order/useOrderQuery'

export type OrderStatus = 'pending' | 'paid' | 'cancelled' | 'completed' | 'expired' | undefined

export interface ReservationListProps {}
export const ReservationList = ({}: ReservationListProps) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()

  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>(undefined)

  const { data: getOrderData, isLoading: loading } = useGetOrderQuery({
    enabled: true,
    params: selectedStatus ? { status: selectedStatus } : undefined,
  })
  const data = getOrderData?.data || []

  const [selectedDate, setSelectedDate] = useState<{ from: Dayjs | null; to: Dayjs | null } | undefined>()
  const handleOnChaneDateRangePicker: BaseRangePickerProps['onChange'] = (value) => {
    setSelectedDate(value)
  }

  const handleStatusClick = (status: OrderStatus) => {
    setSelectedStatus(selectedStatus === status ? undefined : status)
  }
  return (
    <div className={styles['reservation-list']}>
      <BaseFlex
        vertical
        gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}
        className={styles['reservation-list__wrapper']}
      >
        <BaseFlex vertical gap={largeScreen ? 'spacing-24px' : 'spacing-12px'}>
          {/* <div className={styles['reservation-list__filter']}>
            <BaseInput placeholder="검색 ..." prefix={<SearchIcon width={20} height={20} />} />
            <div className={styles['reservation-list__filter__right']}>
              <BaseSelect defaultValue="모든 제품" options={[{ value: '모든 제품', label: '모든 제품' }]} />
              <BaseRangePicker
                onChange={handleOnChaneDateRangePicker}
                value={selectedDate}
                {...(selectedDate
                  ? {
                    title: `
                    ${selectedDate?.from ? selectedDate.from.format('MMM DD, YYYY') : ''}
                    ${selectedDate?.to ? ` - ${selectedDate.to.format('MMM DD, YYYY')}` : ''}
                  `,
                  }
                  : {})}
              />
            </div>
          </div> */}
          <BaseFlex
            vertical={isMobile}
            gap={largeScreen ? 'spacing-24px' : 'spacing-12px'}
            align={isMobile ? 'flex-start' : 'center'}
            justify="space-between"
          >
            <BaseFlex
              vertical={isTablet || isMobile}
              gap={largeScreen ? 'spacing-24px' : 'spacing-12px'}
              align={largeScreen ? 'center' : 'flex-start'}
            >
              <BaseTypography as="p" size="body1" weight="semibold">
                상태
              </BaseTypography>
              <BaseFlex gap={largeScreen ? 'spacing-16px' : 'spacing-8px'} wrap="wrap" align="flex-start">
                <BaseButton
                  onClick={() => handleStatusClick(undefined)}
                  color={selectedStatus === undefined ? undefined : 'secondary-neutral'}
                >
                  모두
                </BaseButton>
                <BaseButton
                  onClick={() => handleStatusClick('pending')}
                  color={selectedStatus === 'pending' ? undefined : 'secondary-neutral'}
                >
                  진행 중
                </BaseButton>
                <BaseButton
                  onClick={() => handleStatusClick('paid')}
                  color={selectedStatus === 'paid' ? undefined : 'secondary-neutral'}
                >
                  결제 완료
                </BaseButton>
                <BaseButton
                  onClick={() => handleStatusClick('completed')}
                  color={selectedStatus === 'completed' ? undefined : 'secondary-neutral'}
                >
                  완료
                </BaseButton>
                <BaseButton
                  onClick={() => handleStatusClick('cancelled')}
                  color={selectedStatus === 'cancelled' ? undefined : 'secondary-neutral'}
                >
                  실패한
                </BaseButton>
              </BaseFlex>
            </BaseFlex>
            {/* <BaseButton color="secondary">필터 재설정</BaseButton> */}
          </BaseFlex>
        </BaseFlex>
        <BaseSpin spinning={loading}>
          {!data || !data.length ? (
            <Empty />
          ) : (
            <BaseFlex vertical gap="spacing-24px">
              {data.map((e, i) => (
                <ReservationCard key={i} data={e} />
              ))}
            </BaseFlex>
          )}
        </BaseSpin>
      </BaseFlex>
    </div>
  )
}
