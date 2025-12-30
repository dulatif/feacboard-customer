import React from 'react'
import styles from './StoreReview.module.scss'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { StoreReels } from '../store-reels/StoreReels'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { StoreReviewCard, StoreReviewCardProps } from '../store-review-card/StoreReviewCard'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import StarIcon from '@/shared/components/icons/StarIcon'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import SmileIcon from '@/shared/components/icons/SmileIcon'
import BrushIcon from '@/shared/components/icons/BrushIcon'
import FlashCircleIcon from '@/shared/components/icons/FlashCircleIcon'
import { BaseProgress } from '@/shared/components/base-progress/BaseProgress'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { Avatar } from 'antd'
import { DesignerCardProps } from '../designer-card/DesignerCard'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useGetShopRatingStatsQuery, useGetShopReviewsQuery } from '@/shared/hooks/shop/useShopQuery'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import dayjs from 'dayjs'

export interface StoreReviewProps {
  shopId: number
}
export const StoreReview: React.FC<StoreReviewProps> = ({ shopId }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  const { data: shopRatingStatsData, isLoading: isShopRatingStatsLoading } = useGetShopRatingStatsQuery({ shopId })
  const totalRatings = shopRatingStatsData
    ? shopRatingStatsData['5_stars'] +
      shopRatingStatsData['4_stars'] +
      shopRatingStatsData['3_stars'] +
      shopRatingStatsData['2_stars'] +
      shopRatingStatsData['1_stars']
    : 0

  const { data: shopReviewsData, isLoading: isShopReviewsLoading } = useGetShopReviewsQuery({ shopId })

  return (
    <div className={styles['store-review']}>
      <BaseSpin spinning={isShopRatingStatsLoading}>
        <div className={styles['store-review__left']}>
          <BaseFlex vertical gap="spacing-40px">
            {/* Rating */}
            <BaseFlex vertical gap="spacing-24px" justify="center">
              <BaseFlex vertical gap="spacing-8px" align="center">
                <BaseFlex align="center" gap="spacing-8px">
                  <StarIcon width={32} height={32} />
                  <BaseTypography as="h4" size="header4" weight="bold">
                    {Number(shopRatingStatsData?.overal_rating) || '0.0'}
                    <BaseTypography as="span" size="header6" color="neutral-500" weight="bold">
                      /5.0
                    </BaseTypography>
                  </BaseTypography>
                </BaseFlex>
                <BaseTypography as="p" size="subtitle1" color="neutral-700" weight="medium">
                  {shopRatingStatsData?.rank}등급 • {shopRatingStatsData?.review_count || 0} 리뷰
                </BaseTypography>
              </BaseFlex>
              {/* Progress */}
              <BaseFlex vertical gap="spacing-24px">
                {[
                  [5, shopRatingStatsData ? shopRatingStatsData['5_stars'] : 0],
                  [4, shopRatingStatsData ? shopRatingStatsData['4_stars'] : 0],
                  [3, shopRatingStatsData ? shopRatingStatsData['3_stars'] : 0],
                  [2, shopRatingStatsData ? shopRatingStatsData['2_stars'] : 0],
                  [1, shopRatingStatsData ? shopRatingStatsData['1_stars'] : 0],
                ].map((e, i) => (
                  <BaseFlex key={i} gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex
                      gap="spacing-8px"
                      align="center"
                      style={{ border: '1px solid #D0D5DD', padding: '4px 9px', borderRadius: 4 }}
                    >
                      <StarIcon width={20} height={20} />
                      <BaseTypography as="p" size="body1" color="neutral-500">
                        {e[0]}
                      </BaseTypography>
                    </BaseFlex>
                    <div style={{ flex: 1 }}>
                      <BaseProgress percent={(e[1] / totalRatings) * 100} />
                    </div>
                    <BaseTypography as="p" size="body1" color="neutral-500">
                      ({e[1]})
                    </BaseTypography>
                  </BaseFlex>
                ))}
              </BaseFlex>
            </BaseFlex>

            {/* Points */}
            <BaseFlex gap="spacing-0px" justify="space-evenly">
              <BaseFlex vertical gap="spacing-8px" align="center">
                <div
                  style={{
                    borderRadius: '50%',
                    background: '#F2F4F7',
                    width: 72,
                    height: 72,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <SmileIcon width={36} height={36} />
                </div>
                <BaseTypography as="p" size="body1" color="neutral-500" weight="medium">
                  고객 응대
                </BaseTypography>
                <BaseBadge variant="secondary-700" padding={{ y: 'spacing-4px', x: 'spacing-8px' }}>
                  <BaseFlex gap="spacing-8px" align="center">
                    <StarIcon color="white" width={16} height={16} />
                    <BaseTypography as="p" size="body2" color="white" weight="medium">
                      {Number(shopRatingStatsData?.hospitality_rating)}/5
                    </BaseTypography>
                  </BaseFlex>
                </BaseBadge>
              </BaseFlex>

              <BaseFlex vertical gap="spacing-8px" align="center">
                <div
                  style={{
                    borderRadius: '50%',
                    background: '#F2F4F7',
                    width: 72,
                    height: 72,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <BrushIcon width={36} height={36} />
                </div>
                <BaseTypography as="p" size="body1" color="neutral-500" weight="medium">
                  매장 청결도
                </BaseTypography>
                <BaseBadge variant="secondary-700" padding={{ y: 'spacing-4px', x: 'spacing-8px' }}>
                  <BaseFlex gap="spacing-8px" align="center">
                    <StarIcon color="white" width={16} height={16} />
                    <BaseTypography as="p" size="body2" color="white" weight="medium">
                      {Number(shopRatingStatsData?.cleanlinest_rating)}/5
                    </BaseTypography>
                  </BaseFlex>
                </BaseBadge>
              </BaseFlex>

              <BaseFlex vertical gap="spacing-8px" align="center">
                <div
                  style={{
                    borderRadius: '50%',
                    background: '#F2F4F7',
                    width: 72,
                    height: 72,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FlashCircleIcon width={36} height={36} />
                </div>
                <BaseTypography as="p" size="body1" color="neutral-500" weight="medium">
                  시술 속도
                </BaseTypography>
                <BaseBadge variant="secondary-700" padding={{ y: 'spacing-4px', x: 'spacing-8px' }}>
                  <BaseFlex gap="spacing-8px" align="center">
                    <StarIcon color="white" width={16} height={16} />
                    <BaseTypography as="p" size="body2" color="white" weight="medium">
                      {Number(shopRatingStatsData?.speed_rating)}/5
                    </BaseTypography>
                  </BaseFlex>
                </BaseBadge>
              </BaseFlex>
            </BaseFlex>

            {/* Designers  */}
            <BaseFlex vertical gap="spacing-24px">
              {(shopRatingStatsData?.designer_rank || []).map((e, i) => (
                <BaseBox key={i} borderColor="neutral-300" radius="radius-8px">
                  <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                    <BaseFlex gap="spacing-16px" align="center">
                      <Avatar src={e.user.profile_image_url} size={48} style={{ background: '#CFC3A7' }} />
                      <BaseFlex vertical gap="spacing-4px">
                        <BaseTypography as="p" size="body1" color="neutral-900" weight="semibold">
                          {e.name}
                        </BaseTypography>
                        <BaseFlex gap="spacing-12px" align="center">
                          <BaseTypography as="p" size="tiny" color="neutral-500">
                            디자이너 전문 분야 :
                          </BaseTypography>
                          <BaseFlex gap="spacing-4px" wrap={'wrap'}>
                            {e.service_categories.map((e, i) => (
                              <BaseBadge key={i} variant="neutral-100">
                                <BaseTypography as="p" size="tiny" color="neutral-500" weight="semibold">
                                  {e.name}
                                </BaseTypography>
                              </BaseBadge>
                            ))}
                          </BaseFlex>
                        </BaseFlex>
                      </BaseFlex>
                    </BaseFlex>
                    <BaseTypography as="h6" size="header6" color="neutral-700" weight="bold">
                      #{i + 1}
                    </BaseTypography>
                  </BaseFlex>
                </BaseBox>
              ))}
            </BaseFlex>
          </BaseFlex>
        </div>
      </BaseSpin>
      <div className={styles['store-review__right']}>
        <BaseFlex vertical gap={largeScreen ? 'spacing-40px' : 'spacing-24px'}>
          <StoreReels
            thumbnails={[
              '/dummy/reel01.jpg',
              '/dummy/reel02.jpg',
              '/dummy/reel03.jpg',
              '/dummy/reel04.jpg',
              '/dummy/reel02.jpg',
              '/dummy/reel03.jpg',
              '/dummy/reel04.jpg',
            ]}
          />
          <BaseSpin spinning={isShopReviewsLoading}>
            <BaseFlex vertical gap={largeScreen ? 'spacing-40px' : 'spacing-24px'}>
              <BaseFlex gap={largeScreen ? 'spacing-16px' : 'spacing-8px'} wrap="wrap">
                <BaseButton>헤어</BaseButton>
                <BaseButton color="secondary-neutral">사진/영상 리뷰만</BaseButton>
                <BaseButton color="secondary-neutral">비포&애프터 리뷰만</BaseButton>
                <BaseButton color="secondary-neutral">텍스트만</BaseButton>
              </BaseFlex>
              {shopReviewsData?.data.map((review, i) => (
                <StoreReviewCard
                  key={i}
                  date={dayjs(review.created_at).format('DD MMM YYYY')}
                  description={review.description}
                  designer={{ name: review.designer.name, picture: review.designer.user.profile_image_url }}
                  likes={review.likes_count}
                  name={review.customer.name}
                  picture={review.customer.user.profile_image_url}
                  rating={Number(review.overal_rating)}
                  type={review.type}
                  images={review.images ? review.images.map((img) => img.url) : []}
                  is_mine={Boolean(review.is_mine)}
                  liked_by_me={review.liked_by_me}
                  imagesBefore={review.before ? review.before.map((img) => img.url) : []}
                  imagesAfter={review.after ? review.after.map((img) => img.url) : []}
                />
              ))}
              <BasePagination defaultCurrent={1} pageSize={10} total={shopReviewsData?.meta.last_page} />
            </BaseFlex>
          </BaseSpin>
        </BaseFlex>
      </div>
    </div>
  )
}
