import React from 'react'
import { StoreCard } from '../store-card/StoreCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { makeup } from '@/shared/dummy/data'

export const MakeupByShop = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {makeup.shop.map((e, i) => (
        <StoreCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
