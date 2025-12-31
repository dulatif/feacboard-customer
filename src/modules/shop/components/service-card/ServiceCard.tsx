import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import React from 'react'
import styles from './ServiceCard.module.scss'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { formatNumberCurrency } from '@/shared/utils/number'

export interface ServiceCardProps {
  image: string
  price: string
  name: string
  id: number
  variants: any[]
  originalPrice?: string
  discountPercent?: number
  handleAddToCart?: (serviceId: number) => void
  handleDirectBuy?: (serviceId: number) => void
  loading?: boolean
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  price,
  name,
  id,
  variants,
  originalPrice,
  discountPercent,
  handleAddToCart,
  handleDirectBuy,
  loading = false,
}) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  return (
    <>
      <BaseBox
        borderColor="neutral-300"
        padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
        className={styles['service-card']}
      >
        <BaseImage
          src={image}
          height={isMobile ? 200 : 274}
          width={282}
          radius={largeScreen ? 'radius-8px' : 'radius-0px'}
          alt=""
        />
        <BaseFlex
          vertical
          gap="spacing-16px"
          padding={{ x: isMobile ? 'spacing-12px' : 'spacing-16px', y: isMobile ? 'spacing-12px' : 'spacing-16px' }}
          justify="space-between"
          className={styles['service-card__content']}
        >
          <div className={styles['service-card__content__header']}>
            <BaseTypography as="h1" size="body1" weight="medium" lineClamp={2}>
              {name}
            </BaseTypography>
            {discountPercent && discountPercent > 0 ? (
              <div>
                <BaseBadge variant="danger-100">
                  <BaseTypography as="span" size="caption" weight="semibold" color="inherit">
                    {discountPercent}% 할인
                  </BaseTypography>
                </BaseBadge>
              </div>
            ) : null}
          </div>
          <BaseFlex vertical gap="spacing-8px">
            <BaseFlex vertical={isMobile} justify="end" align={isMobile ? 'flex-start' : 'center'} gap="spacing-8px">
              {originalPrice && (
                <BaseTypography
                  as="h1"
                  size="body2"
                  weight="medium"
                  color="neutral-500"
                  style={{ textDecoration: 'line-through' }}
                >
                  {formatNumberCurrency(Number(originalPrice))} 원
                </BaseTypography>
              )}
              <BaseTypography
                as="h1"
                size="subtitle2"
                weight="semibold"
                color={discountPercent && discountPercent > 0 ? 'danger-500' : undefined}
              >
                {formatNumberCurrency(Number(price))} 원
              </BaseTypography>
            </BaseFlex>
            <BaseFlex
              justify="space-between"
              align="center"
              gap="spacing-8px"
              className={styles['service-card__content__footer']}
            >
              {handleAddToCart && (
                <BaseButton
                  size="sm"
                  color="secondary"
                  icon={<CartIcon width={20} height={20} />}
                  onClick={() => handleAddToCart(id)}
                  loading={loading}
                />
              )}
              {handleDirectBuy && (
                <BaseButton size="sm" variant="fullwidth" onClick={() => handleDirectBuy(id)} loading={loading}>
                  예약하기
                </BaseButton>
              )}
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </BaseBox>
    </>
  )
}
