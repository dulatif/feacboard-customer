import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import TrashIcon from '@/shared/components/icons/TrashIcon'
import React from 'react'

export interface CartServiceItemCardProps {
  image: string
  service: string
  addons?: string
  normalPrice: number
  discountPrice?: number
}
export const CartServiceItemCard: React.FC<CartServiceItemCardProps> = ({
  addons,
  image,
  normalPrice,
  service,
  discountPrice,
}) => {
  return (
    <BaseFlex justify="space-between" gap="spacing-16px">
      <BaseFlex gap="spacing-16px">
        <BaseImage src={image} alt="" width={72} height={72} radius="radius-8px" />
        <BaseFlex vertical gap="spacing-8px">
          <BaseFlex gap="spacing-8px">
            <BaseTypography as="p" size="body1" weight="medium">
              {service}
            </BaseTypography>
            {discountPrice && (
              <BaseBadge variant="danger-100" textProps={{ size: 'caption' }}>
                10% 할인
              </BaseBadge>
            )}
          </BaseFlex>
          {addons && (
            <BaseTypography as="p" size="caption" color="neutral-500">
              {addons}
            </BaseTypography>
          )}
        </BaseFlex>
      </BaseFlex>
      <BaseFlex vertical justify="space-between" align="flex-end">
        <BaseFlex gap="spacing-8px" align="center">
          {discountPrice && (
            <BaseTypography as="p" size="caption" color="danger-500">
              {discountPrice} 원
            </BaseTypography>
          )}
          <BaseTypography as="p" size="body1" weight="semibold">
            {normalPrice} 원
          </BaseTypography>
        </BaseFlex>
        <BaseFlex gap="spacing-8px" align="center" style={{ cursor: 'pointer' }} onClick={() => alert('delete')}>
          <TrashIcon width={12} height={12} color="#FF5744" />
          <BaseTypography as="p" size="caption" color="danger-500">
            삭제
          </BaseTypography>
        </BaseFlex>
      </BaseFlex>
    </BaseFlex>
  )
}
