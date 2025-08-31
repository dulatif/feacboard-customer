import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import React from 'react'
import styles from './Filter.module.scss'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import MapMarkerIcon from '@/shared/components/icons/MapMarkerIcon'
import SearchIcon from '@/shared/components/icons/SearchIcon'

export const Filter = () => {
  return (
    <div className={styles['filter']}>
      <BaseFlex vertical gap="spacing-48px">
        <BaseTypography as="h4" size="header4" weight="semibold" color="white">
          당신에게 맞는 헤어 트리트먼트를 찾으세요 😊
        </BaseTypography>
        <BaseBox
          padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
          radius="radius-16px"
          borderWidth={0}
          shadow="lg"
          className={styles['filter__content']}
        >
          <BaseInput size="large" prefix={<MapMarkerIcon />} placeholder="강남" />
          <BaseInput size="large" placeholder="무언가를 검색하다" />
          <BaseButton icon={<SearchIcon />} size="xl">
            찾다
          </BaseButton>
        </BaseBox>
      </BaseFlex>
    </div>
  )
}
