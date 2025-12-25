import { GetShopCalendarHourResponse, GetShopServicesResponse } from '@/api/shop'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { useStoreServiceToCartMutation } from '@/shared/hooks/cart/useCartMutation'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useApp } from '@/shared/providers/AppProvider'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import { ServiceCard } from '../service-card/ServiceCard'
import styles from './StoreServices.module.scss'

const AppointmentModal = dynamic(
  () => import('../appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)
const ServiceVariantModal = dynamic(
  () => import('../service-variant-modal/ServiceVariantModal').then((mod) => mod.ServiceVariantModal),
  { ssr: false },
)

export interface StoreServicesProps {
  data?: GetShopServicesResponse['data']
  meta?: GetShopServicesResponse['meta']
  loading: boolean
  calendarHour: GetShopCalendarHourResponse
}
export const StoreServices: React.FC<StoreServicesProps> = ({ data, meta, calendarHour, loading }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const router = useRouter()
  const { appointment } = useApp()

  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState<number>()
  const handleAddToCart = (serviceId: number) => {
    if (appointment?.data?.date && appointment?.data?.start_at) {
      handleSubmitAppointment({
        date: appointment.data?.date,
        time: appointment.data?.start_at,
        serviceId,
      })
    } else {
      setSelectedServiceId(serviceId)
      setIsAppointmentModalOpen(true)
    }
  }
  const handleDirectBuy = (serviceId: number) => {
    if (appointment?.data?.date && appointment?.data?.start_at) {
      handleSubmitAppointment({
        date: appointment.data?.date,
        time: appointment.data?.start_at,
        serviceId,
      })
    } else {
      setSelectedServiceId(serviceId)
      setIsAppointmentModalOpen(true)
    }
  }

  const { mutate: storeServiceToCartMutate, isPending: isStoreServiceToCartPending } = useStoreServiceToCartMutation()
  const handleSubmitAppointment = ({ date, time, serviceId }: { date: string; time: string; serviceId?: number }) => {
    const id = serviceId || selectedServiceId
    if (id) {
      storeServiceToCartMutate(
        {
          body: {
            date,
            time,
          },
          serviceId: id,
        },
        {
          onSuccess: () => {
            setIsAppointmentModalOpen(false)
            router.push('/cart')
          },
        },
      )
    }
  }

  return (
    <BaseSpin spinning={loading}>
      <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-24px'}>
        <BaseFlex vertical gap="spacing-24px">
          <BaseFlex gap="spacing-16px">
            <BaseInput size="large" placeholder="디자이너 이름으로 검색" />
            <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
              검색
            </BaseButton>
          </BaseFlex>
          <BaseFlex gap={largeScreen ? 'spacing-16px' : 'spacing-8px'} wrap="wrap">
            <BaseButton color="secondary-neutral">헤어</BaseButton>
            <BaseButton color="secondary-neutral">할인</BaseButton>
            <BaseButton color="secondary-neutral">신상품</BaseButton>
            <BaseButton color="secondary-neutral">신상품</BaseButton>
            <BaseButton color="secondary-neutral">신상품</BaseButton>
            <BaseButton color="secondary-neutral">신상품</BaseButton>
          </BaseFlex>
        </BaseFlex>
        <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-24px'}>
          {data && (
            <div className={styles['service']}>
              {data.map((service, i) => (
                <ServiceCard
                  key={i}
                  id={service.id}
                  image={
                    service.images['image-1'] ||
                    service.images['image-2'] ||
                    service.images['image-3'] ||
                    service.images['image-4'] ||
                    service.images['image-5']
                  }
                  name={service.name}
                  price={service.price}
                  variants={[]}
                  handleDirectBuy={handleDirectBuy}
                  handleAddToCart={handleAddToCart}
                  loading={isStoreServiceToCartPending}
                />
              ))}
            </div>
          )}
          {meta && (
            <BasePagination defaultCurrent={meta.current_page} pageSize={meta.per_page} total={meta.last_page} />
          )}
        </BaseFlex>
      </BaseFlex>

      <AppointmentModal
        width={880}
        calendarHour={calendarHour}
        open={isAppointmentModalOpen}
        onCancel={() => setIsAppointmentModalOpen(false)}
        onSubmit={handleSubmitAppointment}
        isSubmitting={isStoreServiceToCartPending}
      />
      {/* {variants && variants?.length > 0 && (
        <ServiceVariantModal
          variants={variants}
          zIndex={1100}
          width={880}
          open={isVariantModalOpen}
          onCancel={() => setIsVariantModalOpen(false)}
          onSubmit={handleSubmitSelectVariant}
        />
      )} */}
    </BaseSpin>
  )
}
