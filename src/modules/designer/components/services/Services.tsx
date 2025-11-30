import React from 'react'
import styles from './Service.module.scss'
import { ServiceCard, ServiceCardProps } from '@/modules/shop/components/service-card/ServiceCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface ServicesProps {
  data: ServiceCardProps[]
}
export const Services: React.FC<ServicesProps> = ({ data }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-12px'}>
      <BaseFlex gap={largeScreen ? 'spacing-16px' : 'spacing-8px'} wrap="wrap">
        <BaseButton>헤어</BaseButton>
        <BaseButton color="secondary-neutral">헤어 커트</BaseButton>
        <BaseButton color="secondary-neutral">헤어 트리트먼트</BaseButton>
        <BaseButton color="secondary-neutral">헤어 염색</BaseButton>
        <BaseButton color="secondary-neutral">헤어 펌</BaseButton>
      </BaseFlex>
      <BaseFlex vertical gap="spacing-24px">
        <div className={styles['service']}>
          {data.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
        <BasePagination defaultCurrent={1} pageSize={2} total={50} />
      </BaseFlex>
    </BaseFlex>
  )
}
