import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Row } from 'antd'
import React from 'react'
import Image from 'next/image'
import styles from './Community.module.scss'
import { BaseCardPost } from '@/shared/components/base-card-post/BaseCardPost'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useGetPopularCommunityQuery } from '@/shared/hooks/community/useCommunityQuery'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import dayjs from 'dayjs'

export const Community = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()

  const { data: popularCommunityData, isLoading: isGetPopularCommunityLoading } = useGetPopularCommunityQuery()
  return (
    <div>
      <Row gutter={largeScreen ? 20 : 12}>
        <Col span={largeScreen ? 6 : isTablet ? 8 : 12}>
          <BaseFlex vertical justify="center" gap="spacing-48px" style={{ height: '100%' }}>
            <div>
              <Image src={`/icons/community.svg`} width={40} height={40} alt="Community" />
            </div>
            <div>
              <BaseTypography as="p" color="neutral-900" size="header5" weight="semibold">
                다른 사용자와 경험을 공유하세요😊
              </BaseTypography>
            </div>
            <div>
              <BaseButton color="secondary">커뮤니티에 가다</BaseButton>
            </div>
          </BaseFlex>
        </Col>
        {(popularCommunityData?.data || []).map((post, i) => (
          <Col span={largeScreen ? 6 : isTablet ? 8 : 12} key={i}>
            <BaseCardPost
              header={{
                avatar: post.owner.user.profile_image_url,
                date: dayjs(post.created_at).format('DD MMM'),
                name: post.owner.name,
              }}
              fileSource={post.images[0]?.url || ''}
              description={post.description}
              footer={{
                like: post.likes_count,
                comment: 0,
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
