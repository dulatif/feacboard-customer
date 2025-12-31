import React from 'react'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'
import { useGetAllDesignerQuery } from '@/shared/hooks/designer/useDesignerQuery'
import { Designer, DesignerService } from '@/shared/interface/designers'
import { ServiceCardProps } from '../service-card/ServiceCard'

const mapDesignerToCardProps = (designer: Designer): DesignerCardProps => {
  // Get first image from services or use default
  const getServiceImage = (service: DesignerService) => {
    if (!service.images || service.images.length === 0) return '/dummy/service01.jpg'
    return service.images[0] || '/dummy/service01.jpg'
  }

  // Map services to ServiceCardProps format
  const services: ServiceCardProps[] = (designer.services || []).map((service) => ({
    id: Number(service.id),
    name: service.name,
    price: service.price,
    image: getServiceImage(service),
    variants: [],
  }))

  // Get specialties from category - use localized_name or fallback to ko name
  const specialties = designer.category
    ? [designer.category.localized_name || designer.category.name.ko || designer.category.name.en]
    : []

  // Since employment doesn't have shop info in the response, we'll use empty strings
  // You may need to fetch shop details separately if needed
  const company = ''
  const location = ''

  // Get available hour - not available in current response structure
  const availableHour = ''

  // Get picture from user.profile_image_url or use default
  const picture = designer.user?.profile_image_url || ''

  // Get rating from designer.rating or default to 0
  const rating = designer.rating ? Number(designer.rating) : 0

  return {
    id: String(designer.id),
    picture,
    name: designer.name,
    rating,
    company,
    location,
    availableHour,
    availableService: designer.services?.length || 0,
    specialties,
    services,
  }
}

interface DesignerListProps {
  categoryId?: string
}

export const DesignerList: React.FC<DesignerListProps> = ({ categoryId }) => {
  const {
    data: designers = [],
    isLoading,
    isError,
  } = useGetAllDesignerQuery({
    params: {
      ...(categoryId && { category_id: Number(categoryId) }),
      status: 'all',
      with: ['services', 'user.profileImage'],
    },
    enabled: true,
  })

  if (isLoading) {
    return (
      <BaseFlex justify="center" align="center" style={{ padding: '48px 0' }}>
        <BaseSpin size="large" />
      </BaseFlex>
    )
  }

  if (isError) {
    return (
      <BaseFlex justify="center" align="center" style={{ padding: '48px 0' }}>
        <BaseTypography as="p" size="body1" style={{ color: '#ff4d4f' }}>
          디자이너를 불러오는 중 오류가 발생했습니다
        </BaseTypography>
      </BaseFlex>
    )
  }

  if (!designers || designers.length === 0) {
    return (
      <BaseFlex justify="center" align="center" style={{ padding: '48px 0' }}>
        <BaseTypography as="p" size="body1" color="neutral-500">
          디자이너를 찾을 수 없습니다
        </BaseTypography>
      </BaseFlex>
    )
  }

  return (
    <BaseFlex vertical gap="spacing-80px">
      {designers.map((designer) => {
        const cardProps = mapDesignerToCardProps(designer)
        return <DesignerCard key={designer.id} {...cardProps} />
      })}
    </BaseFlex>
  )
}
