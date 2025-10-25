import React from 'react'
import { StoreCard } from '../store-card/StoreCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { studio } from '@/shared/dummy/data'

export const Studio = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {studio.shop.map((e, i) => (
        <StoreCard category="studio" key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
