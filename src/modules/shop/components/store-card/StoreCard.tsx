import React from 'react'
import styles from './StoreCard.module.scss'
import { BaseBox, BaseBoxProps } from '@/shared/components/base-box/BaseBox'
import { BaseFlex, BaseFlexProps } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import NavigationIcon from '@/shared/components/icons/NavigationIcon'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ClockIcon from '@/shared/components/icons/ClockIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import ProfileCircleIcon from '@/shared/components/icons/ProfileCircleIcon'
import Link from 'next/link'
import InstagramIcon from '@/shared/components/icons/InstagramIcon'
import { Category } from '../../ShopView.utils'
import { useRouter } from 'next/navigation'

export interface StoreCardProps {
  id: string
  images: string[]
  storeName: string
  rating: number
  reviewersCount: number
  open: string
  close: string
  availableDesigners: number
  instagram?: string
  containerProps?: BaseBoxProps
  metaInformationProps?: Omit<BaseFlexProps, 'children'>
  category?: Category
}
export const StoreCard: React.FC<StoreCardProps> = ({
  id,
  availableDesigners,
  close,
  images,
  open,
  rating,
  reviewersCount,
  storeName,
  instagram,
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
  return (
    <BaseBox className={styles['store-card']} {...containerProps}>
      <BaseFlex vertical gap="spacing-24px">
        <div onClick={() => handleRedirect(id)} style={{ cursor: 'pointer' }}>
          <div className={styles['store-card__images']}>
            <div className={styles['store-card__images__primary']}>
              <BaseImage src={images[0]} height={427} alt="" />
            </div>
            <div className={styles['store-card__images__others']}>
              {Array.from({ length: 4 }).map((e, i) => (
                <BaseImage key={i} src={images[i + 1]} height={204} alt="" />
              ))}
            </div>
          </div>
        </div>
        <BaseFlex justify="space-between" gap="spacing-14px" align="center">
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
                  {open} - {close}
                </BaseTypography>
              </BaseFlex>
              <BaseFlex gap="spacing-8px" align="center">
                <ProfileCircleIcon width={16} height={16} color="#667085" />
                <BaseTypography as="span" size="caption" color="neutral-500">
                  {availableDesigners} 명의 디자이너가 이용 가능합니다
                </BaseTypography>
              </BaseFlex>
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
          <BaseButton outlined size="xl" color="tertiary" icon={<NavigationIcon />} iconPosition="end">
            역삼역 3번 출구에서 도보 300m 입니다.
          </BaseButton>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
