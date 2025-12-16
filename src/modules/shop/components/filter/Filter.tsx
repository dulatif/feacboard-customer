import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import MapMarkerIcon from '@/shared/components/icons/MapMarkerIcon'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import React, { useState } from 'react'
import styles from './Filter.module.scss'
import { useFilterStore } from '@/shared/hooks/state/useFilter'

export interface FilterProps {
  compact?: boolean
}
export const Filter: React.FC<FilterProps> = ({ compact = false }) => {
  const [locationValue, setLocationValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const { setLocation, setName } = useFilterStore()

  const onSubmit = () => {
    setLocation(locationValue)
    setName(nameValue)
  }

  return (
    <div className={styles['filter']}>
      <BaseBox
        padding={{ x: compact ? 'spacing-0px' : 'spacing-24px', y: compact ? 'spacing-0px' : 'spacing-24px' }}
        radius={compact ? `radius-8px` : `radius-16px`}
        borderWidth={0}
        shadow={compact ? 'no-shadow' : 'lg'}
        className={styles['filter__content']}
      >
        <BaseInput
          size="large"
          prefix={<MapMarkerIcon />}
          placeholder="강남"
          value={locationValue}
          onChange={(e) => setLocationValue(e.target.value)}
        />
        <BaseInput
          size="large"
          placeholder="디자이너 이름으로 검색"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <BaseButton icon={<SearchIcon />} size="xl" onClick={onSubmit}>
          검색
        </BaseButton>
      </BaseBox>
    </div>
  )
}
