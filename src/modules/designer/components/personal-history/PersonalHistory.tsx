import { BaseCircleWave } from '@/shared/components/base-circle-wave/BaseCircleWave'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import { Col, Row } from 'antd'
import React from 'react'
import Image from 'next/image'
import styles from './PersonalHistory.module.scss'

export const PersonalHistory = () => {
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너 인증',
      children: (
        <Row gutter={[24, 40]}>
          <Col span={12}>
            <div className={styles['certification-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/certification.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['certification-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/certification.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['certification-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/certification.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['certification-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/certification.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
        </Row>
      ),
    },
    {
      key: '2',
      label: '디자이너상',
      children: (
        <Row gutter={[24, 40]}>
          <Col span={12}>
            <div className={styles['award-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/award.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['award-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/award.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['award-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/award.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['award-card']}>
              <BaseFlex gap="spacing-24px" align="center">
                <Image src="/dummy/award.png" width={85} height={74} alt="" />
                <BaseTypography as="p" size="header4" weight="bold" color="white">
                  최고의 디자이너
                </BaseTypography>
              </BaseFlex>
            </div>
          </Col>
        </Row>
      ),
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-48px">
      {/* Content Top */}
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          경력 및 수상
        </BaseTypography>
        <BaseFlex vertical gap="spacing-40px">
          <BaseFlex vertical gap="spacing-16px">
            <BaseFlex gap="spacing-16px">
              <div>
                <BaseCircleWave>
                  <BuildingsIcon width={24} height={24} color="#49C3D0" />
                </BaseCircleWave>
              </div>
              <BaseFlex vertical gap="spacing-8px">
                <BaseTypography as="h6" size="subtitle1" weight="semibold" color="primary-600">
                  글래드 헤어 살롱 팀장
                </BaseTypography>
                <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-500">
                  2017년 8월 - 지금
                </BaseTypography>
              </BaseFlex>
            </BaseFlex>
            <BaseTypography as="p" size="subtitle2" weight="regular" color="neutral-500">
              저는 한국에서 유명한 헤어 스타일리스트의 지도를 받으며 강남 살롱에서 일했고, 200명이 넘는 고객을 매우
              만족스럽게 대했습니다. 저는 새로운, 더 흥미로운 경험을 찾고 싶어서 이 살롱에서 다른 곳으로 옮겼습니다.
            </BaseTypography>
          </BaseFlex>
          <BaseFlex vertical gap="spacing-16px">
            <BaseFlex gap="spacing-16px">
              <div>
                <BaseCircleWave>
                  <BuildingsIcon width={24} height={24} color="#49C3D0" />
                </BaseCircleWave>
              </div>
              <BaseFlex vertical gap="spacing-8px">
                <BaseTypography as="h6" size="subtitle1" weight="semibold">
                  인플루언서 전담 디자이너
                </BaseTypography>
                <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-500">
                  2017년 8월 - 2019년 8월
                </BaseTypography>
              </BaseFlex>
            </BaseFlex>
            <BaseTypography as="p" size="subtitle2" weight="regular" color="neutral-500">
              저는 한국에서 유명한 헤어 스타일리스트의 지도를 받으며 강남 살롱에서 일했고, 200명이 넘는 고객을 매우
              만족스럽게 대했습니다. 저는 새로운, 더 흥미로운 경험을 찾고 싶어서 이 살롱에서 다른 곳으로 옮겼습니다.
            </BaseTypography>
          </BaseFlex>
          <BaseFlex vertical gap="spacing-16px">
            <BaseFlex gap="spacing-16px">
              <div>
                <BaseCircleWave>
                  <BuildingsIcon width={24} height={24} color="#49C3D0" />
                </BaseCircleWave>
              </div>
              <BaseFlex vertical gap="spacing-8px">
                <BaseTypography as="h6" size="subtitle1" weight="semibold">
                  인플루언서 전담 디자이너
                </BaseTypography>
                <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-500">
                  2017년 8월 - 2019년 8월
                </BaseTypography>
              </BaseFlex>
            </BaseFlex>
            <BaseTypography as="p" size="subtitle2" weight="regular" color="neutral-500">
              저는 한국에서 유명한 헤어 스타일리스트의 지도를 받으며 강남 살롱에서 일했고, 200명이 넘는 고객을 매우
              만족스럽게 대했습니다. 저는 새로운, 더 흥미로운 경험을 찾고 싶어서 이 살롱에서 다른 곳으로 옮겼습니다.
            </BaseTypography>
          </BaseFlex>
        </BaseFlex>
      </BaseFlex>

      {/* Content Bottom */}
      <BaseTabs defaultActiveKey="1" gapContent="48px" items={tabItems} />
    </BaseFlex>
  )
}
