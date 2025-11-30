import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import React, { useState } from 'react'
import styles from './ServiceCard.module.scss'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { AppContextType, useApp } from '@/shared/providers/AppProvider'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useResponsive } from '@/shared/hooks/useResponsive'

const AppointmentModal = dynamic(
  () => import('../appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)
const ServiceVariantModal = dynamic(
  () => import('../service-variant-modal/ServiceVariantModal').then((mod) => mod.ServiceVariantModal),
  { ssr: false },
)
export interface ServiceCardProps {
  image: string
  title: string
  price: number
  variants?: {
    title: string
    options: string[]
  }[]
}
export const ServiceCard: React.FC<ServiceCardProps> = ({ image, price, title, variants }) => {
  const router = useRouter()
  const { setTotalCart, setAppointment, appointment } = useApp()
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false)
  const handleBuy = () => {
    if (appointment) {
      if (variants?.length) {
        setIsVariantModalOpen(true)
      } else {
        setTotalCart((prev) => prev + 1)
        router.push('/cart')
      }
    } else {
      setIsAppointmentModalOpen(true)
    }
  }
  const handleSubmitAppointment = (value: AppContextType['appointment']) => {
    if (variants?.length) {
      setIsAppointmentModalOpen(false)
      setIsVariantModalOpen(true)
    } else {
      setAppointment(value)
      setTotalCart((prev) => prev + 1)
      setIsAppointmentModalOpen(false)
      router.push('/cart')
    }
  }
  const handleSubmitSelectVariant = () => {
    setTotalCart((prev) => prev + 1)
    setIsVariantModalOpen(false)
    router.push('/cart')
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  return (
    <>
      <BaseBox
        borderColor="neutral-300"
        padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
        className={styles['service-card']}
      >
        <BaseImage
          src={image}
          height={isMobile ? 200 : 274}
          width={282}
          radius={largeScreen ? 'radius-8px' : 'radius-0px'}
          alt=""
        />
        <BaseFlex
          vertical
          gap="spacing-16px"
          padding={{ x: isMobile ? 'spacing-12px' : 'spacing-16px', y: isMobile ? 'spacing-12px' : 'spacing-16px' }}
          justify="space-between"
          className={styles['service-card__content']}
        >
          <div className={styles['service-card__content__header']}>
            <BaseTypography as="h1" size="body1" weight="medium" lineClamp={2}>
              {title}
            </BaseTypography>
            <div>
              <BaseBadge variant="danger-100">
                <BaseTypography as="span" size="caption" weight="semibold" color="inherit">
                  10% 할인
                </BaseTypography>
              </BaseBadge>
            </div>
          </div>
          <BaseFlex vertical gap="spacing-8px">
            <BaseFlex vertical={isMobile} justify="end" align={isMobile ? 'flex-start' : 'center'} gap="spacing-8px">
              <BaseTypography as="h1" size="body2" weight="medium" color="danger-500">
                {price} 원
              </BaseTypography>
              <BaseTypography as="h1" size="subtitle2" weight="semibold">
                {price} 원
              </BaseTypography>
            </BaseFlex>
            <BaseFlex
              justify="space-between"
              align="center"
              gap="spacing-8px"
              className={styles['service-card__content__footer']}
            >
              <BaseButton size="sm" color="secondary" icon={<CartIcon width={20} height={20} />} onClick={handleBuy} />
              <BaseButton size="sm" variant="fullwidth" onClick={handleBuy}>
                예약하기
              </BaseButton>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseBox>
      <AppointmentModal
        width={880}
        open={isAppointmentModalOpen}
        onCancel={() => setIsAppointmentModalOpen(false)}
        onSubmit={handleSubmitAppointment}
      />
      {variants && variants?.length > 0 && (
        <ServiceVariantModal
          variants={variants}
          zIndex={1100}
          width={880}
          open={isVariantModalOpen}
          onCancel={() => setIsVariantModalOpen(false)}
          onSubmit={handleSubmitSelectVariant}
        />
      )}
    </>
  )
}
