import { BaseBox, BaseBoxProps } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex, BaseFlexProps } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ClockIcon from '@/shared/components/icons/ClockIcon'
import InstagramIcon from '@/shared/components/icons/InstagramIcon'
import NavigationIcon from '@/shared/components/icons/NavigationIcon'
import ProfileCircleIcon from '@/shared/components/icons/ProfileCircleIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useRouter } from 'next/navigation'
import React from 'react'
import { TCategoryLabel } from '../../ShopView.utils'
import styles from './StoreCard.module.scss'

export interface StoreCardProps {
  id: string
  images: string[]
  storeName: string
  rating: number
  reviewersCount: number
  open_and_close: string
  availableDesigners?: number
  location?: string
  instagram?: string
  containerProps?: BaseBoxProps
  metaInformationProps?: Omit<BaseFlexProps, 'children'>
  category?: TCategoryLabel
}
export const StoreCard: React.FC<StoreCardProps> = ({
  id,
  availableDesigners,
  open_and_close,
  images,
  rating,
  reviewersCount,
  storeName,
  instagram,
  location,
  containerProps = {
    borderColor: 'neutral-300',
    padding: { x: 'spacing-24px', y: 'spacing-24px' },
  },
  metaInformationProps = {
    vertical: false,
    gap: 'spacing-24px',
  },
  category,
}) => {
  const router = useRouter()
  const handleRedirect = (id: string) => {
    router.push(`/shop/${id}/details${category ? `?category=${category}` : ''}`)
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseBox className={styles['store-card']} {...containerProps}>
      <BaseFlex vertical gap="spacing-24px">
        <div onClick={() => handleRedirect(id)} style={{ cursor: 'pointer' }}>
          <div className={styles['store-card__images']}>
            <div className={styles['store-card__images__primary']}>
              <BaseImage src={images[0]} height={427} alt="" />
            </div>
            <div className={styles['store-card__images__others']}>
              {Array.from({ length: isMobile ? 2 : 4 }).map((e, i) => (
                <BaseImage key={i} src={images[i + 1]} height={204} alt="" />
              ))}
            </div>
          </div>
        </div>
        <BaseFlex
          vertical={isMobile}
          justify="space-between"
          gap="spacing-14px"
          align={isMobile ? 'flex-start' : 'center'}
        >
          <BaseFlex vertical gap="spacing-16px">
            <div onClick={() => handleRedirect(id)} style={{ cursor: 'pointer' }}>
              <BaseTypography as="h6" size="header6" weight="semibold">
                {storeName}
              </BaseTypography>
            </div>
            <BaseFlex {...metaInformationProps}>
              <BaseFlex gap="spacing-8px" align="center">
                <StarIcon width={20} height={20} color="#FFB43F" />
                <BaseTypography as="span" size="caption" color="neutral-500">
                  {rating} ({reviewersCount} 리뷰)
                </BaseTypography>
              </BaseFlex>
              <BaseFlex gap="spacing-8px" align="center">
                <ClockIcon width={16} height={16} color="#667085" />
                <BaseTypography as="span" size="caption" color="neutral-500">
                  {open_and_close}
                </BaseTypography>
              </BaseFlex>
              {availableDesigners ? (
                <BaseFlex gap="spacing-8px" align="center">
                  <ProfileCircleIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {availableDesigners ? `${availableDesigners} 명의 디자이너가 이용 가능합니다` : ''}
                  </BaseTypography>
                </BaseFlex>
              ) : null}
              {instagram && (
                <BaseFlex gap="spacing-8px" align="center">
                  <InstagramIcon width={16} height={16} color="#667085" />
                  <BaseTypography as="span" size="caption" color="neutral-500">
                    {instagram}
                  </BaseTypography>
                </BaseFlex>
              )}
            </BaseFlex>
          </BaseFlex>
          <BaseButton
            outlined
            size={isMobile ? 'md' : 'xl'}
            color="tertiary"
            icon={<NavigationIcon />}
            iconPosition="end"
          >
            {location}
          </BaseButton>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
