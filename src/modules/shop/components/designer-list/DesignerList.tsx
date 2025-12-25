import React from 'react'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'
import { useGetAllDesignerQuery } from '@/shared/hooks/designer/useDesignerQuery'
import { Designer, DesignerService } from '@/app/interface/designers'
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

  return {
    id: String(designer.id),
    picture: '/dummy/designer01.jpg', // Default since not in response
    name: designer.name,
    rating: 0, // Default since not in response
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
      with: ['services'],
    },
    enabled: true,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading designers</div>
  }

  if (!designers || designers.length === 0) {
    return <div>No designers found</div>
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
