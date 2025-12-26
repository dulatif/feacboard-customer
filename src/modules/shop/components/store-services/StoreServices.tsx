import {
  GetShopCalendarHourResponse,
  GetShopServicesResponse,
  isDesignerServicesResponse,
  ShopService,
} from '@/api/shop'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useAddToCart } from '@/shared/hooks/cart/useAddToCart'
import {
  useGetShopServicesQuery,
  useGetShopServiceCategoriesQuery,
  useGetShopCalendarHourQuery,
} from '@/shared/hooks/shop/useShopQuery'
import { ServiceCard, ServiceCardProps } from '../service-card/ServiceCard'
import { ID } from '@/shared/interface/general'
import dynamic from 'next/dynamic'
import { MagnifyingGlass } from 'phosphor-react'
import { useState, useEffect, useMemo } from 'react'
import styles from './StoreServices.module.scss'

const AppointmentModal = dynamic(
  () => import('../appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)
const DiffProviderConfirmModal = dynamic(
  () => import('../diff-provider-confirm-modal/DiffProviderConfirmModal').then((mod) => mod.DiffProviderConfirmModal),
  { ssr: false },
)
const ServiceVariantModal = dynamic(
  () => import('../service-variant-modal/ServiceVariantModal').then((mod) => mod.ServiceVariantModal),
  { ssr: false },
)

export interface StoreServicesProps {
  shopId: ID | number
}

// Helper function to get first available image from service images
export const getServiceImage = (images: {
  'image-1': string | null
  'image-2': string | null
  'image-3': string | null
  'image-4': string | null
  'image-5': string | null
}): string => {
  return (
    images['image-1'] ||
    images['image-2'] ||
    images['image-3'] ||
    images['image-4'] ||
    images['image-5'] ||
    '/dummy/service01.jpg' // fallback image
  )
}
// Transform ShopService to ServiceCardProps
const mapServiceToCardProps = (service: ShopService): ServiceCardProps => {
  return {
    id: service.id,
    name: service.name,
    price: service.price,
    image: getServiceImage(service.images),
    variants: [],
  }
}

export const StoreServices: React.FC<StoreServicesProps> = ({ shopId }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | string | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchName, setSearchName] = useState<string>('')

  // Fetch service categories
  const { data: categories = [], isLoading: isLoadingCategories } = useGetShopServiceCategoriesQuery({
    shopId: Number(shopId),
  })

  // Fetch calendar hour
  const { data: calendarHour = {}, isLoading: isCalendarHourLoading } = useGetShopCalendarHourQuery({
    shopId: Number(shopId),
  })

  // Fetch services with filters
  const { data: servicesResponse, isLoading: isLoadingServices } = useGetShopServicesQuery({
    shopId: Number(shopId),
    category_id: selectedCategoryId ? Number(selectedCategoryId) : undefined,
    name: searchName || undefined,
    per_page: 15,
    page: currentPage,
  })

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategoryId, searchName])

  // Transform services data to ServiceCardProps
  const services: ServiceCardProps[] = useMemo(() => {
    if (!servicesResponse?.data) return []
    // Only handle direct services (not designer services)
    if (isDesignerServicesResponse(servicesResponse.data)) {
      return []
    }
    return (servicesResponse.data as ShopService[]).map(mapServiceToCardProps)
  }, [servicesResponse?.data])

  // Handle category filter click
  const handleCategoryClick = (categoryId?: number | string) => {
    setSelectedCategoryId(categoryId)
  }

  // Handle pagination change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Handle search
  const handleSearch = () => {
    setCurrentPage(1)
  }

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

  const isLoading = isLoadingServices || isLoadingCategories || isCalendarHourLoading

  return (
    <BaseSpin spinning={isLoading}>
      <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-24px'}>
        <BaseFlex vertical gap="spacing-24px">
          <BaseFlex gap="spacing-16px">
            <BaseInput
              size="large"
              placeholder="서비스 이름으로 검색"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onPressEnter={handleSearch}
            />
            <BaseButton icon={<MagnifyingGlass size={24} />} size="xl" onClick={handleSearch}>
              검색
            </BaseButton>
          </BaseFlex>
          {categories.length > 0 && (
            <BaseFlex gap={largeScreen ? 'spacing-16px' : 'spacing-8px'} wrap="wrap">
              <BaseButton
                onClick={() => handleCategoryClick(undefined)}
                color={selectedCategoryId === undefined ? 'primary' : 'secondary-neutral'}
              >
                전체
              </BaseButton>
              {categories.map((category) => (
                <BaseButton
                  key={category.id}
                  onClick={() => handleCategoryClick(Number(category.id))}
                  color={selectedCategoryId === Number(category.id) ? 'primary' : 'secondary-neutral'}
                >
                  {category.name}
                </BaseButton>
              ))}
            </BaseFlex>
          )}
        </BaseFlex>
        <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-24px'}>
          {isLoading ? (
            <BaseFlex justify="center" padding={{ y: 'spacing-48px' }}>
              <BaseTypography as="p" size="body1">
                로딩 중...
              </BaseTypography>
            </BaseFlex>
          ) : services.length === 0 ? (
            <BaseFlex justify="center" padding={{ y: 'spacing-48px' }}>
              <BaseTypography as="p" size="body1">
                서비스를 찾을 수 없습니다.
              </BaseTypography>
            </BaseFlex>
          ) : (
            <>
              <div className={styles['service']}>
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    handleDirectBuy={handleDirectBuy}
                    handleAddToCart={handleAddToCart}
                    loading={isStoreServiceToCartPending || isCheckingCartStatus}
                  />
                ))}
              </div>
              {servicesResponse?.meta && servicesResponse.meta.last_page > 1 && (
                <BasePagination
                  current={servicesResponse.meta.current_page}
                  total={servicesResponse.meta.total}
                  pageSize={servicesResponse.meta.per_page}
                  onChange={handlePageChange}
                />
              )}
            </>
          )}
        </BaseFlex>
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
    </BaseSpin>
  )
}
