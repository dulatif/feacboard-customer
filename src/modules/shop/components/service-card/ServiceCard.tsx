import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import React from 'react'
import styles from './ServiceCard.module.scss'

export interface ServiceCardProps {
  image: string
  title: string
  price: number
  categories?: string[]
}
export const ServiceCard: React.FC<ServiceCardProps> = ({ image, price, title, categories }) => {
  return (
    <BaseBox
      borderColor="neutral-300"
      padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
      className={styles['service-card']}
    >
      <BaseImage src={image} height={274} width={270} radius="radius-8px" alt="" />
      <BaseFlex
        vertical
        gap="spacing-20px"
        padding={{ x: 'spacing-16px', y: 'spacing-16px' }}
        justify="space-between"
        className={styles['service-card__content']}
      >
        <BaseTypography as="h1" size="subtitle1" weight="semibold">
          {title}
        </BaseTypography>
        {categories && (
          <BaseFlex gap="spacing-14px">
            <BaseButton size="sm" color="secondary-neutral">
              {categories[0]}
            </BaseButton>
            <BaseButton size="sm" color="secondary-neutral">
              {categories[1]}
            </BaseButton>
            <BaseButton size="sm" color="secondary-neutral">
              {categories[2]}
            </BaseButton>
            <BaseButton size="sm" color="secondary-neutral">
              {categories[1]}
            </BaseButton>
            <BaseButton size="sm" color="secondary-neutral">
              {categories[2]}
            </BaseButton>
          </BaseFlex>
        )}
        <BaseFlex justify="space-between" align="center" className={styles['service-card__content__footer']}>
          <BaseTypography as="h1" size="subtitle1" weight="semibold">
            {price} 원
          </BaseTypography>
          <BaseFlex gap="spacing-8px">
            <BaseButton size="sm" color="secondary" icon={<CartIcon width={20} height={20} />} />
            <BaseButton size="sm">구입하다</BaseButton>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
