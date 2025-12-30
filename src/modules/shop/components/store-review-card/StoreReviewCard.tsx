import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import HeartOutlinedIcon02Icon from '@/shared/components/icons/HeartOutlinedIcon02Icon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { ReviewType } from '@/shared/interface/shop'
import { formatNumber } from '@/shared/utils/number'
import { Avatar } from 'antd'
import React from 'react'

export interface StoreReviewCardProps {
  name: string
  picture: string
  rating: number
  date: string
  designer: {
    picture: string
    name: string
  }
  description: string
  likes: number
  type?: ReviewType
  images?: string[]
  imagesBefore?: string[]
  imagesAfter?: string[]
  videoThumbnails?: string[]
  is_mine: boolean
  liked_by_me: boolean
}
export const StoreReviewCard: React.FC<StoreReviewCardProps> = ({
  date,
  description,
  designer,
  likes,
  name,
  rating,
  type,
  images,
  liked_by_me,
  imagesBefore,
  imagesAfter,
  videoThumbnails,
  picture,
}) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseBox
      padding={{ x: 'spacing-16px', y: 'spacing-16px' }}
      radius="radius-16px"
      borderWidth={1}
      borderColor="neutral-300"
    >
      <BaseFlex vertical gap="spacing-20px">
        {/* Header */}
        <BaseFlex vertical gap="spacing-8px">
          <BaseFlex gap="spacing-16px" justify="space-between" align="center">
            <BaseFlex gap="spacing-16px" align="center">
              <BaseRate value={rating} />
              <BaseTypography as="p" size="body1" color="neutral-500">
                {date}
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
          <BaseFlex gap="spacing-16px" justify="space-between" align="center">
            <BaseFlex gap="spacing-16px" align="center">
              <Avatar size={48} src={picture} />
              <BaseTypography as="p" size="subtitle1" color="neutral-900" weight="medium">
                {name}
              </BaseTypography>
            </BaseFlex>
            <BaseBadge variant="secondary-700">
              <BaseFlex gap="spacing-8px" align="center">
                <StarIcon color="white" width={20} height={20} />
                <BaseTypography as="p" size="subtitle1" color="white" weight="medium">
                  {rating}/5
                </BaseTypography>
              </BaseFlex>
            </BaseBadge>
          </BaseFlex>
          <BaseFlex gap="spacing-16px" align="center">
            <BaseTypography as="p" size="body2" color="neutral-500">
              디자이너 :
            </BaseTypography>
            <BaseFlex gap="spacing-8px" align="center">
              <Avatar size={24} style={{ background: '#CFC3A7' }} src={designer.picture} />
              <BaseTypography as="p" size="body2" color="neutral-500">
                {designer.name}
              </BaseTypography>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>

        {/* Files */}
        {type === 'images' ? (
          images && (
            <BaseFlex gap="spacing-16px" style={{ overflow: 'scroll' }}>
              <BaseImage src={images[0]} alt="" width={372} height={312} />
              <BaseImage src={images[1]} alt="" width={372} height={312} />
            </BaseFlex>
          )
        ) : type === 'before_after' ? (
          <BaseFlex gap="spacing-16px" style={{ overflow: 'scroll' }}>
            {imagesBefore ? (
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, right: 20, zIndex: 2 }}>
                  <BaseBadge variant="danger-100">Before</BaseBadge>
                </div>
                <BaseImage src={imagesBefore[0]} alt="" width={372} height={312} />
              </div>
            ) : (
              <div />
            )}
            {imagesAfter ? (
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, right: 20, zIndex: 2 }}>
                  <BaseBadge variant="success-100">After</BaseBadge>
                </div>
                <BaseImage src={imagesAfter[1]} alt="" width={372} height={312} />
              </div>
            ) : (
              <div />
            )}
          </BaseFlex>
        ) : null}

        {/* Description */}
        <BaseTypography as="p" size="body1" color="neutral-500">
          {description}
        </BaseTypography>

        {/* Footer */}
        <BaseFlex gap="spacing-4px" align="center">
          <HeartOutlinedIcon02Icon color={liked_by_me ? '#FF4D4F' : '#D0D5DD'} />
          <BaseTypography as="p" size="body1" color="neutral-900">
            {formatNumber(likes)}
          </BaseTypography>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
