import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import MapMarkerIcon from '@/shared/components/icons/MapMarkerIcon'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import React from 'react'
import styles from './Filter.module.scss'

export interface FilterProps {
  compact?: boolean
}
export const Filter: React.FC<FilterProps> = ({ compact = false }) => {
  return (
    <div className={styles['filter']}>
      <BaseBox
        padding={{ x: compact ? 'spacing-0px' : 'spacing-24px', y: compact ? 'spacing-0px' : 'spacing-24px' }}
        radius={compact ? `radius-8px` : `radius-16px`}
        borderWidth={0}
        shadow={compact ? 'no-shadow' : 'lg'}
        className={styles['filter__content']}
      >
        <BaseInput size="large" prefix={<MapMarkerIcon />} placeholder="강남" />
        <BaseInput size="large" placeholder="무언가를 검색하다" />
        <BaseButton icon={<SearchIcon />} size="xl">
          찾다
        </BaseButton>
      </BaseBox>
    </div>
  )
}
