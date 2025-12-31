import React, { useMemo, useState, useEffect } from 'react'
import styles from './Service.module.scss'
import { ServiceCard, ServiceCardProps } from '@/modules/shop/components/service-card/ServiceCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useResponsive } from '@/shared/hooks/useResponsive'
import {
  useGetDesignerServicesQuery,
  useGetDesignerServiceCategoriesQuery,
} from '@/shared/hooks/designer/useDesignerQuery'
import { DesignerServiceDetail } from '@/shared/interface/designers'
import { ID } from '@/shared/interface/general'
import { useAddToCart } from '@/shared/hooks/cart/useAddToCart'
import { useGetShopCalendarHourQuery } from '@/shared/hooks/shop/useShopQuery'
import { MagnifyingGlass } from 'phosphor-react'
import dynamic from 'next/dynamic'

const AppointmentModal = dynamic(
  () => import('@/modules/shop/components/appointment-modal/AppointmentModal').then((mod) => mod.AppointmentModal),
  { ssr: false },
)
const DiffProviderConfirmModal = dynamic(
  () =>
    import('@/modules/shop/components/diff-provider-confirm-modal/DiffProviderConfirmModal').then(
      (mod) => mod.DiffProviderConfirmModal,
    ),
  { ssr: false },
)

export interface ServicesProps {
  designerId: ID | string
  shopId?: ID | number
}

// Helper function to get first available image from service images
const getServiceImage = (images: { [key: string]: string | null }): string => {
  const imageKeys = Object.keys(images).sort()
  for (const key of imageKeys) {
    if (images[key]) {
      return images[key]!
    }
  }
  return '/dummy/service01.jpg' // fallback image
}

// Transform DesignerServiceDetail to ServiceCardProps
const mapServiceToCardProps = (service: DesignerServiceDetail): ServiceCardProps => {
  return {
    id: Number(service.id),
    name: service.name,
    price: service.price,
    image: getServiceImage(service.images),
    variants: [],
  }
}

export const Services: React.FC<ServicesProps> = ({ designerId, shopId }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | string | undefined>(undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchName, setSearchName] = useState<string>('')

  // Fetch service categories
  const { data: categories = [], isLoading: isLoadingCategories } = useGetDesignerServiceCategoriesQuery({
    designerId: String(designerId),
    enabled: !!designerId,
  })

  // Fetch calendar hour if shopId is provided
  const { data: calendarHour = {}, isLoading: isCalendarHourLoading } = useGetShopCalendarHourQuery({
    shopId: Number(shopId || 0),
    enabled: !!shopId,
  })

  // Fetch services with filters
  const { data: servicesResponse, isLoading: isLoadingServices } = useGetDesignerServicesQuery({
    params: {
      id: String(designerId),
      category_id: selectedCategoryId,
      name: searchName || undefined,
      per_page: 15,
      page: currentPage,
    },
    enabled: !!designerId,
  })

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategoryId, searchName])

  // Transform services data to ServiceCardProps
  const services: ServiceCardProps[] = useMemo(() => {
    if (!servicesResponse?.data) return []
    return servicesResponse.data.map(mapServiceToCardProps)
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

  const isLoading = isLoadingServices || isLoadingCategories || (shopId ? isCalendarHourLoading : false)

  return (
    <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-12px'}>
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
      <BaseFlex vertical gap="spacing-24px">
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
                  handleAddToCart={handleAddToCart}
                  handleDirectBuy={handleDirectBuy}
                  loading={isStoreServiceToCartPending || isCheckingCartStatus}
                />
              ))}
            </div>
            {servicesResponse?.meta && servicesResponse.meta.last_page > 1 && (
              <BasePagination
                current={servicesResponse.meta.current_page}
                pageSize={servicesResponse.meta.per_page}
                total={servicesResponse.meta.total}
                onChange={handlePageChange}
              />
            )}
          </>
        )}
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
    </BaseFlex>
  )
}
