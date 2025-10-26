import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseSection } from '@/shared/components/base-section/BaseSection'
import React from 'react'
import Image from 'next/image'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import styles from './NearbyService.module.scss'
import { Col, Row } from 'antd'
import { BaseCard } from '@/shared/components/base-card/BaseCard'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import StarIcon from '@/shared/components/icons/StarIcon'
import { nail } from '@/shared/dummy/data'
import Link from 'next/link'

export const NearbyService = () => {
  return (
    <div className={styles['nearby-service']}>
      <BaseSection
        header={{
          title: '근처 서비스',
          illust: <Image src={'/icons/service-location.svg'} width={40} height={40} alt="Diagnostic history" />,
        }}
        headerExtra={
          <BaseFlex gap="spacing-16px">
            <BaseButton color="primary">헤어</BaseButton>
            <BaseButton color="secondary-neutral">메이크업</BaseButton>
            <BaseButton color="secondary-neutral">네일</BaseButton>
          </BaseFlex>
        }
        className={styles['nearby-service__wrapper']}
        padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
        radius="radius-8px"
      >
        <div>
          <Row gutter={20}>
            {[1, 2, 3].map((e, i) => (
              <Col span={6} key={i}>
                <Link href={`/shop/1/details`}>
                  <BaseCard
                    image={`/dummy/store0${i + 1}.jpg`}
                    title={nail.shop[0].storeName}
                    subtitle={
                      <BaseBadge variant={'warning-25'} icon={<StarIcon width={20} height={20} />}>
                        4.8 (129 리뷰)
                      </BaseBadge>
                    }
                    footer={
                      <BaseTypography as="p" color="neutral-500" size="body1">
                        귀하의 위치에서 500m
                      </BaseTypography>
                    }
                  />
                </Link>
              </Col>
            ))}
            <Col span={6}>
              <div className={styles['nearby-service__card__other']}>
                <BaseTypography as="p" color="white" size="subtitle1" weight="semibold">
                  당신을 위해 더 많은 것을 발견하세요
                </BaseTypography>
                <div className={styles['nearby-service__card__other__action']}>
                  <BaseButton
                    variant="fullwidth"
                    color="primary"
                    size="lg"
                    icon={<ChevronRightIcon width={20} height={20} />}
                    iconPosition="end"
                  >
                    더 보기
                  </BaseButton>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </BaseSection>
    </div>
  )
}
