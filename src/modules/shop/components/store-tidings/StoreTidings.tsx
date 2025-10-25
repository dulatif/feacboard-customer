import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import { TidingsCard, TidingsCardProps } from '../tidings-card/TidingsCard'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'

export interface StoreTidingsProps {
  data: TidingsCardProps[]
}
export const StoreTidings: React.FC<StoreTidingsProps> = ({ data }) => {
  return (
    <BaseFlex vertical gap="spacing-40px">
      {data.map((e, i) => (
        <>
          <TidingsCard key={i} {...e} />
          {i + 1 !== data.length && <BaseDivider />}
        </>
      ))}
    </BaseFlex>
  )
}
