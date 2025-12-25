import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useDeleteServiceFromCartMutation } from '@/shared/hooks/cart/useCartMutation'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { formatNumberCurrency } from '@/shared/utils/number'
import { NotePencil, Trash } from 'phosphor-react'
import React from 'react'

export interface CartServiceItemCardProps {
  id: number
  image: string
  service: string
  addons?: string
  normalPrice: number
  discountPrice?: number
  deletable?: boolean
}
export const CartServiceItemCard: React.FC<CartServiceItemCardProps> = ({
  id,
  addons,
  image,
  normalPrice,
  service,
  discountPrice,
  deletable = false,
}) => {
  const handleEditItem = () => {}

  const { mutate: deleteServiceFromCartMutate, isPending: isDeleteServiceFromCartPending } =
    useDeleteServiceFromCartMutation()
  const handleRemoveItem = () => {
    deleteServiceFromCartMutate(
      { cartId: id },
      {
        onSuccess: () => {},
      },
    )
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <>
      <BaseFlex justify="space-between" gap="spacing-16px">
        <BaseFlex gap="spacing-16px">
          <BaseImage src={image} alt="" width={72} height={72} radius="radius-8px" />
          <BaseFlex vertical gap="spacing-8px">
            <BaseFlex vertical={isMobile} gap="spacing-8px">
              <BaseTypography as="p" size="body1" weight="medium">
                {service}
              </BaseTypography>
              {discountPrice ? (
                <BaseBadge variant="danger-100" textProps={{ size: 'caption' }}>
                  10% 할인
                </BaseBadge>
              ) : null}
            </BaseFlex>
            {addons ? (
              <BaseTypography as="p" size="caption" color="neutral-500">
                {addons}
              </BaseTypography>
            ) : null}
          </BaseFlex>
        </BaseFlex>
        <BaseFlex vertical justify="space-between" align="flex-end">
          <BaseFlex gap="spacing-8px" align="center">
            {discountPrice ? (
              <BaseTypography as="p" size="caption" color="danger-500">
                {discountPrice} 원
              </BaseTypography>
            ) : null}
            <BaseTypography as="p" size="body1" weight="semibold">
              {formatNumberCurrency(normalPrice)} 원
            </BaseTypography>
          </BaseFlex>
          <BaseFlex gap="spacing-16px">
            {addons && (
              <BaseFlex gap="spacing-8px" align="center" style={{ cursor: 'pointer' }} onClick={() => handleEditItem()}>
                <NotePencil size={12} color="#49C3D0" />
                <BaseTypography as="p" size="caption" color="primary-600">
                  편집하다
                </BaseTypography>
              </BaseFlex>
            )}
            {deletable && (
              <BaseButton
                size="sm"
                color="text-danger"
                icon={<Trash size={16} color="#FF5744" />}
                onClick={() => handleRemoveItem()}
                loading={isDeleteServiceFromCartPending}
              >
                삭제
              </BaseButton>
            )}
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>
    </>
  )
}
