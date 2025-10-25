import React from 'react'
import { StoreCard } from '../store-card/StoreCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { hair } from '@/shared/dummy/data'

export const HairByShop = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {hair.shop.map((e, i) => (
        <StoreCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
