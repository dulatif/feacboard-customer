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
import { useState } from 'react'
import { AppContextType, useApp } from '@/shared/providers/AppProvider'

const AppointmentModal = dynamic(
  () => import('@/modules/shop/components/appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)

export interface ServiceInformationProps {
  onNext: () => void
}
export const ServiceInformation: React.FC<ServiceInformationProps> = ({ onNext }) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const { setAppointment, appointment } = useApp()
  const handleSubmitAppointment = (value: AppContextType['appointment']) => {
    setAppointment(value)
    setIsAppointmentModalOpen(false)
  }
  const data: CartServiceItemCardProps[] = [
    {
      image: '/dummy/service01.jpg',
      service: '헤어 염색',
      addons: `샴푸 + 3,000원`,
      normalPrice: 10000,
      discountPrice: 8000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 염색',
      normalPrice: 10000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 염색',
      normalPrice: 10000,
      discountPrice: 8000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 염색',
      normalPrice: 10000,
    },
  ]

  return (
    <>
      <BaseContainer variant={1440}>
        <div className={styles['container']}>
          {/* ITEMS */}
          <div className={styles['items']}>
            <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
              <BaseFlex vertical gap="spacing-32px">
                <BaseFlex justify="space-between" align="center">
                  <BaseFlex vertical gap="spacing-8px">
                    <BaseTypography as="p" size="caption" weight="regular">
                      예약 시간
                    </BaseTypography>
                    <BaseTypography as="p" size="subtitle2" weight="medium">
                      2025년 5월 25일 목요일 오후 3시 25분
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
                    <BaseFlex vertical gap="spacing-8px" align="flex-end">
                      <BaseFlex gap="spacing-8px" align="center">
                        <div>
                          <BuildingsIcon width={20} height={20} color="#292D32" />
                        </div>
                        <BaseTypography as="p" size="body1" weight="medium">
                          강남 살롱
                        </BaseTypography>
                      </BaseFlex>
                      <BaseTypography as="p" size="caption" color="neutral-500">
                        서울 강남로 46
                      </BaseTypography>
                    </BaseFlex>
                  </BaseFlex>
                </BaseFlex>
                <BaseFlex vertical gap="spacing-16px">
                  {data.map((e, i) => (
                    <CartServiceItemCard key={i} {...e} />
                  ))}
                </BaseFlex>
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
                        포인트 잔액 : 5,000 P
                      </BaseTypography>
                      <BaseFlex gap="spacing-8px">
                        <BaseInput value={3000} prefix={<PointIcon width={20} height={20} color="#667085" />} />
                        <BaseButton size="lg">입력</BaseButton>
                      </BaseFlex>
                    </BaseFlex>
                    <Checkbox>포인트 전액 사용</Checkbox>
                  </BaseFlex>
                  {[
                    { title: '소계', total: 24000 },
                    { title: '동전 적용', total: -3000 },
                  ].map((e, i) => (
                    <BaseFlex key={i} justify="space-between" gap="spacing-24px">
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {e.title}
                      </BaseTypography>
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {e.total} 원
                      </BaseTypography>
                    </BaseFlex>
                  ))}
                  <BaseDivider />
                  <BaseFlex justify="space-between" gap="spacing-24px">
                    <BaseTypography as="p" size="body1" weight="semibold">
                      총
                    </BaseTypography>
                    <BaseTypography as="p" size="body1" weight="semibold">
                      21000 원
                    </BaseTypography>
                  </BaseFlex>
                  <BaseButton variant="fullwidth" onClick={onNext}>
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
        defaultSelectedDate={appointment?.date}
        defaultSelectedTime={appointment?.time}
      />
    </>
  )
}
