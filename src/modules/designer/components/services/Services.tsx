import React from 'react'
import styles from './Service.module.scss'
import { ServiceCard, ServiceCardProps } from '@/modules/shop/components/service-card/ServiceCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'

export interface ServicesProps {
  data: ServiceCardProps[]
}
export const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <BaseFlex vertical gap="spacing-48px">
      <BaseFlex gap="spacing-16px">
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
