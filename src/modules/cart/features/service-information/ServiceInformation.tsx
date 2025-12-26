'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import PointIcon from '@/shared/components/icons/PointIcon'
import { Avatar, Checkbox } from 'antd'
import { Calendar } from 'phosphor-react'
import {
  CartServiceItemCard,
  CartServiceItemCardProps,
} from '../../components/cart-service-item-card/CartServiceItemCard'
import styles from './ServiceInformation.module.scss'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import { useApp } from '@/shared/providers/AppProvider'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { formatNumberCurrency } from '@/shared/utils/number'
import { GetShopCalendarHourResponse } from '@/api/shop'
import { useUpdateCartMutation } from '@/shared/hooks/cart/useCartMutation'

const AppointmentModal = dynamic(
  () => import('@/modules/shop/components/appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)

export interface ServiceInformationProps {
  onNext: () => void
  calendarHour: GetShopCalendarHourResponse
}
export const ServiceInformation: React.FC<ServiceInformationProps> = ({ onNext, calendarHour }) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const { appointment } = useApp()
  const { mutate: updateCartMutate, isPending: isUpdateCartPending } = useUpdateCartMutation()

  const handleSubmitAppointment = ({ date, time }: { date: string; time: string }) => {
    updateCartMutate(
      {
        date,
        time,
      },
      {
        onSuccess: () => {
          setIsAppointmentModalOpen(false)
        },
        onError: () => {},
        onSettled: () => {},
      },
    )
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  const total = useMemo(() => {
    return appointment?.data?.items.reduce((total, item) => {
      return total + Number(item.service.price)
    }, 0)
  }, [appointment?.data?.items])

  return (
    <>
      <BaseContainer variant={1440}>
        <div className={styles['container']}>
          {/* ITEMS */}
          <div className={styles['items']}>
            <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
              <BaseFlex vertical gap="spacing-32px">
                <BaseFlex gap="spacing-20px" justify="space-between" align="center">
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseTypography as="p" size="caption" weight="regular">
                      예약 시간
                    </BaseTypography>
                    <BaseTypography as="p" size="subtitle2" weight="medium">
                      {appointment?.data?.date || ''} {appointment?.data?.start_at || ''}
                    </BaseTypography>
                  </BaseFlex>
                  <BaseButton icon={<Calendar />} onClick={() => setIsAppointmentModalOpen(true)}>
                    변경 시간
                  </BaseButton>
                </BaseFlex>
                <BaseFlex vertical gap="spacing-24px">
                  <BaseTypography as="p" size="body1" weight="semibold">
                    제품 서비스 정보
                  </BaseTypography>
                  <BaseFlex gap="spacing-24px" justify="space-between" align="center">
                    {appointment?.data?.provider_type === 'designer' ? (
                      <BaseFlex vertical gap="spacing-8px">
                        <BaseTypography as="p" size="caption" color="neutral-500">
                          디자이너
                        </BaseTypography>
                        <BaseFlex gap="spacing-8px" align="center">
                          <Avatar src={'/dummy/face03.png'} style={{ background: '#CFC3A7' }} size={40} />
                          <BaseTypography as="p" size="body1" weight="medium">
                            강남 살롱
                          </BaseTypography>
                        </BaseFlex>
                      </BaseFlex>
                    ) : (
                      <div />
                    )}
                    <BaseFlex vertical gap="spacing-8px" align="flex-end">
                      <BaseFlex gap="spacing-8px" align="center">
                        <div>
                          <BuildingsIcon width={20} height={20} color="#292D32" />
                        </div>
                        <BaseTypography as="p" size="body1" weight="medium">
                          {appointment?.data?.provider.name || ''}
                        </BaseTypography>
                      </BaseFlex>
                      <BaseTypography as="p" size="caption" color="neutral-500">
                        {appointment?.data?.provider.address || ''}
                      </BaseTypography>
                    </BaseFlex>
                  </BaseFlex>
                </BaseFlex>
                {appointment?.data && (
                  <BaseFlex vertical gap="spacing-16px">
                    {appointment?.data.items.map((e, i) => (
                      <CartServiceItemCard
                        key={i}
                        id={Number(e.id)}
                        image={e.service.image}
                        normalPrice={Number(e.service.price)}
                        service={e.service.name}
                        addons=""
                        discountPrice={0}
                        deletable
                      />
                    ))}
                  </BaseFlex>
                )}
              </BaseFlex>
            </BaseBox>
          </div>

          {/* SUMMARY */}
          <div className={styles['summary']}>
            <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
              <BaseFlex vertical gap="spacing-40px">
                <BaseTypography as="p" size="body1" weight="semibold">
                  결제 요약
                </BaseTypography>
                <BaseFlex vertical gap="spacing-24px">
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseFlex vertical gap="spacing-6px" justify="flex-end">
                      <BaseTypography as="p" size="body2" weight="medium">
                        포인트 잔액 : 0 P
                      </BaseTypography>
                      <BaseFlex gap="spacing-8px">
                        <BaseInput prefix={<PointIcon width={20} height={20} color="#667085" />} />
                        <BaseButton size="lg">입력</BaseButton>
                      </BaseFlex>
                    </BaseFlex>
                    <Checkbox>포인트 전액 사용</Checkbox>
                  </BaseFlex>
                  {appointment?.data?.items
                    .map((e) => ({
                      title: e.service.name,
                      total: e.service.price,
                    }))
                    .map((e, i) => (
                      <BaseFlex key={i} justify="space-between" gap="spacing-24px">
                        <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                          {e.title}
                        </BaseTypography>
                        <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                          {formatNumberCurrency(Number(e.total))} 원
                        </BaseTypography>
                      </BaseFlex>
                    ))}
                  <BaseDivider />
                  <BaseFlex justify="space-between" gap="spacing-24px">
                    <BaseTypography as="p" size="body1" weight="semibold">
                      총
                    </BaseTypography>
                    <BaseTypography as="p" size="body1" weight="semibold">
                      {formatNumberCurrency(Number(total))} 원
                    </BaseTypography>
                  </BaseFlex>
                  <BaseButton variant="fullwidth" onClick={onNext} loading={isUpdateCartPending}>
                    계속 결제하기
                  </BaseButton>
                </BaseFlex>
              </BaseFlex>
            </BaseBox>
          </div>
        </div>
      </BaseContainer>
      <AppointmentModal
        width={880}
        open={isAppointmentModalOpen}
        onCancel={() => setIsAppointmentModalOpen(false)}
        onSubmit={handleSubmitAppointment}
        defaultSelectedDate={appointment?.data?.date}
        defaultSelectedTime={appointment?.data?.start_at}
        calendarHour={calendarHour}
      />
    </>
  )
}
