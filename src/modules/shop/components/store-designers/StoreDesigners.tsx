import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'
import { useResponsive } from '@/shared/hooks/useResponsive'
import {
  GetShopCalendarHourResponse,
  GetShopServicesResponse,
  isDesignerServicesResponse,
  ShopService,
  ShopServicesDesigner,
} from '@/api/shop'
import { ServiceCardProps } from '../service-card/ServiceCard'
import { getServiceImage } from '../store-services/StoreServices'
import { useAddToCart } from '@/shared/hooks/cart/useAddToCart'
import { useGetShopServicesQuery, useGetShopCalendarHourQuery } from '@/shared/hooks/shop/useShopQuery'
import { ID } from '@/app/interface/general'
import dynamic from 'next/dynamic'

const AppointmentModal = dynamic(
  () => import('../appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)
const DiffProviderConfirmModal = dynamic(
  () => import('../diff-provider-confirm-modal/DiffProviderConfirmModal').then((mod) => mod.DiffProviderConfirmModal),
  { ssr: false },
)

// Map ShopServicesDesigner to DesignerCardProps
const mapDesignerToCardProps = (designer: ShopServicesDesigner): DesignerCardProps => {
  // Map services to ServiceCardProps format
  const services: ServiceCardProps[] = (designer.services || []).map((service) => ({
    id: service.id,
    name: service.name,
    price: service.price,
    image: getServiceImage(service.images),
    variants: [],
  }))

  return {
    id: String(designer.id),
    picture: '/dummy/designer01.jpg', // Default since not in response
    name: designer.name,
    rating: 0, // Default since not in response
    company: '', // Not available in response
    location: '', // Not available in response
    availableHour: '', // Not available in response
    availableService: designer.services?.length || 0,
    specialties: [], // Not available in response
    services,
  }
}

export interface StoreDesignersProps {
  shopId: ID | number
}
export const StoreDesigners: React.FC<StoreDesignersProps> = ({ shopId }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  // Fetch calendar hour
  const { data: calendarHour = {} } = useGetShopCalendarHourQuery({
    shopId: Number(shopId),
  })

  // Fetch shop services (should return designers with services)
  const { data: shopServicesData, isLoading } = useGetShopServicesQuery({
    shopId: Number(shopId),
  })

  const {
    handleAddToCart,
    handleDirectBuy,
    isAppointmentModalOpen,
    isDiffProviderModalOpen,
    isCheckingCartStatus,
    isStoreServiceToCartPending,
    handleSubmitAppointment,
    handleDiffProviderConfirm,
    handleDiffProviderCancel,
    handleAppointmentModalCancel,
  } = useAddToCart()

  // Only render if data is array of designers with services
  if (!shopServicesData?.data || !isDesignerServicesResponse(shopServicesData.data)) {
    return null
  }

  const data = shopServicesData.data

  return (
    <>
      <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-24px'}>
        <BaseFlex gap="spacing-16px">
          <BaseInput size="large" placeholder="디자이너 이름으로 검색" />
          <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
            검색
          </BaseButton>
        </BaseFlex>
        {data.map((designer) => {
          const cardProps = mapDesignerToCardProps(designer)
          return (
            <DesignerCard
              key={designer.id}
              {...cardProps}
              handleAddToCart={handleAddToCart}
              handleDirectBuy={handleDirectBuy}
              loading={isStoreServiceToCartPending || isCheckingCartStatus}
            />
          )
        })}
      </BaseFlex>

      <DiffProviderConfirmModal
        open={isDiffProviderModalOpen}
        onCancel={handleDiffProviderCancel}
        onConfirm={handleDiffProviderConfirm}
      />
      <AppointmentModal
        width={880}
        calendarHour={calendarHour}
        open={isAppointmentModalOpen}
        onCancel={handleAppointmentModalCancel}
        onSubmit={handleSubmitAppointment}
        isSubmitting={isStoreServiceToCartPending}
      />
    </>
  )
}
