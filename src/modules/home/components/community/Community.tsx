import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Row } from 'antd'
import React from 'react'
import Image from 'next/image'
import styles from './Community.module.scss'
import { BaseCardPost } from '@/shared/components/base-card-post/BaseCardPost'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const Community = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
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
        {Array.from({ length: largeScreen ? 3 : isTablet ? 2 : 1 }).map((e, i) => (
          <Col span={largeScreen ? 6 : isTablet ? 8 : 12} key={i}>
            <BaseCardPost
              header={{
                avatar: '/dummy/face01.png',
                date: '9월 29일',
                name: '박보영',
              }}
              fileSource="/dummy/face02.png"
              description="안녕하세요 여러분! 💖 오늘은 피부 관리에 대해 이야기해볼게요. 매일 작은 습관이 모여 건강하고 빛나는 피부를 만든답니다! ✨ 여러분의 최애 스킨케어 루틴은 무엇인가요? 😊💆‍♀️💖"
              footer={{
                like: 405,
                comment: 302,
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
