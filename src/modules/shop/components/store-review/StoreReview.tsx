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

export const StoreReview = () => {
  const data: StoreReviewCardProps[] = [
    {
      date: '2024.12.16',
      rating: 4,
      name: '검은고양이네로',
      picture: '/images/anonymous.svg',
      designer: {
        name: '검은고양이네로',
        picture: '/dummy/face03.png',
      },
      description:
        '벌써 2년째 이 샵에서만 파마를 하고 있어요. 처음 방문했을 때부터 지금까지 항상 만족스러운 결과를 얻고 있어서 다른 곳은 눈길도 안 가요. 디자이너분이 제 스타일과 얼굴형에 딱 맞는 디자인을 제안해주셔서 늘 로운 느낌으로 변신할 수 있고, 파마 유지력도 정말 훌륭해서 오랫동안 예쁜 스타일을 유지할 수 있어요',
      likes: 100000,
      category: 'default',
      images: ['/dummy/review01.jpg', '/dummy/review02.jpg'],
      videoThumbnails: [],
    },
    {
      date: '2024.12.16',
      rating: 4,
      name: '검은고양이네로',
      picture: '/images/anonymous.svg',
      designer: {
        name: '검은고양이네로',
        picture: '/dummy/face03.png',
      },
      description:
        '벌써 2년째 이 샵에서만 파마를 하고 있어요. 처음 방문했을 때부터 지금까지 항상 만족스러운 결과를 얻고 있어서 다른 곳은 눈길도 안 가요. 디자이너분이 제 스타일과 얼굴형에 딱 맞는 디자인을 제안해주셔서 늘 로운 느낌으로 변신할 수 있고, 파마 유지력도 정말 훌륭해서 오랫동안 예쁜 스타일을 유지할 수 있어요',
      likes: 100000,
      category: 'before-after',
      images: ['/dummy/review03.jpg', '/dummy/review04.jpg'],
      videoThumbnails: [],
    },
    {
      date: '2024.12.16',
      rating: 4,
      name: '검은고양이네로',
      picture: '/images/anonymous.svg',
      designer: {
        name: '검은고양이네로',
        picture: '/dummy/face03.png',
      },
      description:
        '벌써 2년째 이 샵에서만 파마를 하고 있어요. 처음 방문했을 때부터 지금까지 항상 만족스러운 결과를 얻고 있어서 다른 곳은 눈길도 안 가요. 디자이너분이 제 스타일과 얼굴형에 딱 맞는 디자인을 제안해주셔서 늘 로운 느낌으로 변신할 수 있고, 파마 유지력도 정말 훌륭해서 오랫동안 예쁜 스타일을 유지할 수 있어요',
      likes: 100000,
      category: 'before-after',
      videoThumbnails: [],
    },
  ]
  return (
    <div className={styles['store-review']}>
      <div className={styles['store-review__left']}>
        <BaseFlex vertical gap="spacing-40px">
          {/* Rating */}
          <BaseFlex vertical gap="spacing-24px" justify="center">
            <BaseFlex vertical gap="spacing-8px" align="center">
              <BaseFlex align="center" gap="spacing-8px">
                <StarIcon width={32} height={32} />
                <BaseTypography as="h4" size="header4" weight="bold">
                  4.7
                  <BaseTypography as="span" size="header6" color="neutral-500" weight="bold">
                    /5.0
                  </BaseTypography>
                </BaseTypography>
              </BaseFlex>
              <BaseTypography as="p" size="subtitle1" color="neutral-700" weight="medium">
                120등급 • 12 리뷰
              </BaseTypography>
            </BaseFlex>
            {/* Progress */}
            <BaseFlex vertical gap="spacing-24px">
              {[
                [5, 89],
                [4, 24],
                [3, 12],
                [2, 3],
                [1, 1],
              ].map((e, i) => (
                <BaseFlex key={i} gap="spacing-16px" align="center">
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
                  <BaseProgress percent={e[1]} />
                  <BaseTypography as="p" size="body1" color="neutral-500">
                    ({e[1]})
                  </BaseTypography>
                </BaseFlex>
              ))}
            </BaseFlex>
          </BaseFlex>

          {/* Points */}
          <BaseFlex gap="spacing-0px" justify="space-between">
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
                    {4.8}/5
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
                    {4.9}/5
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
                    {4.7}/5
                  </BaseTypography>
                </BaseFlex>
              </BaseBadge>
            </BaseFlex>
          </BaseFlex>

          {/* Designers  */}
          <BaseFlex vertical gap="spacing-24px">
            {[1, 2, 3, 4, 5].map((e, i) => (
              <BaseBox key={i} borderColor="neutral-300" radius="radius-8px">
                <BaseFlex gap="spacing-16px" justify="space-between" align="center">
                  <BaseFlex gap="spacing-16px" align="center">
                    <Avatar src={'/dummy/face03.png'} size={48} style={{ background: '#CFC3A7' }} />
                    <BaseFlex vertical gap="spacing-4px">
                      <BaseTypography as="p" size="body1" color="neutral-900" weight="semibold">
                        텡쿠 후안샤
                      </BaseTypography>
                      <BaseFlex gap="spacing-12px" align="center">
                        <BaseTypography as="p" size="tiny" color="neutral-500">
                          디자이너 전문 분야 :
                        </BaseTypography>
                        <BaseFlex gap="spacing-4px">
                          {['댄디컷', 'C컬펌', '다운펌', '가일컷'].map((e, i) => (
                            <BaseBadge key={i} variant="neutral-100">
                              <BaseTypography as="p" size="tiny" color="neutral-500" weight="semibold">
                                {e}
                              </BaseTypography>
                            </BaseBadge>
                          ))}
                        </BaseFlex>
                      </BaseFlex>
                    </BaseFlex>
                  </BaseFlex>
                  <BaseTypography as="h6" size="header6" color="neutral-700" weight="bold">
                    #{e}
                  </BaseTypography>
                </BaseFlex>
              </BaseBox>
            ))}
          </BaseFlex>
        </BaseFlex>
      </div>
      <div className={styles['store-review__right']}>
        <BaseFlex vertical gap="spacing-40px">
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
          <BaseFlex gap="spacing-16px">
            <BaseButton>헤어</BaseButton>
            <BaseButton color="secondary-neutral">사진/영상 리뷰만</BaseButton>
            <BaseButton color="secondary-neutral">비포&애프터 리뷰만</BaseButton>
            <BaseButton color="secondary-neutral">텍스트만</BaseButton>
          </BaseFlex>
          {data.map((e, i) => (
            <StoreReviewCard key={i} {...e} />
          ))}
          <BasePagination defaultCurrent={1} pageSize={2} total={50} />
        </BaseFlex>
      </div>
    </div>
  )
}
