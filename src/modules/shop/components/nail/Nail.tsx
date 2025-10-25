import React from 'react'
import { StoreCard } from '../store-card/StoreCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { nail } from '@/shared/dummy/data'

export const Nail = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {nail.shop.map((e, i) => (
        <StoreCard category="nail" key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
