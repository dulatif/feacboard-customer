import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import React from 'react'
import styles from './ServiceCard.module.scss'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'

export interface ServiceCardProps {
  image: string
  title: string
  price: number
}
export const ServiceCard: React.FC<ServiceCardProps> = ({ image, price, title }) => {
  return (
    <BaseBox
      borderColor="neutral-300"
      padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
      className={styles['service-card']}
    >
      <BaseImage src={image} height={274} width={270} radius="radius-8px" alt="" />
      <BaseFlex
        vertical
        gap="spacing-16px"
        padding={{ x: 'spacing-16px', y: 'spacing-16px' }}
        justify="space-between"
        className={styles['service-card__content']}
      >
        <div className={styles['service-card__content__header']}>
          <BaseTypography as="h1" size="body1" weight="medium" lineClamp={2}>
            {title}
          </BaseTypography>
          <div>
            <BaseBadge variant="danger-100">
              <BaseTypography as="span" size="caption" weight="semibold" color="inherit">
                10% 할인
              </BaseTypography>
            </BaseBadge>
          </div>
        </div>
        <BaseFlex vertical gap="spacing-8px">
          <BaseFlex justify="end" align="center" gap="spacing-8px">
            <BaseTypography as="h1" size="body2" weight="medium" color="danger-500">
              {price} 원
            </BaseTypography>
            <BaseTypography as="h1" size="subtitle2" weight="semibold">
              {price} 원
            </BaseTypography>
          </BaseFlex>
          <BaseFlex
            justify="space-between"
            align="center"
            gap="spacing-8px"
            className={styles['service-card__content__footer']}
          >
            <BaseButton size="sm" color="secondary" icon={<CartIcon width={20} height={20} />} />
            <BaseButton size="sm" variant="fullwidth">
              구입하다
            </BaseButton>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
