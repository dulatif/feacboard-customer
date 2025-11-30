import { BaseCircleWave } from '@/shared/components/base-circle-wave/BaseCircleWave'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import { Col, Row } from 'antd'
import React, { useMemo } from 'react'
import Image from 'next/image'
import styles from './PersonalHistory.module.scss'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface PersonalHistoryProps {
  data: {
    career: {
      title: string
      in?: string
      out?: string
      description?: string
    }[]
    certificates: string[]
    awards: string[]
  }
}
export const PersonalHistory: React.FC<PersonalHistoryProps> = ({ data }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const tabItems: BaseTabsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: '디자이너 인증',
        children: (
          <Row gutter={[24, 40]}>
            {data.certificates.map((e, i) => (
              <Col key={i} span={12}>
                <div className={styles['certification-card']}>
                  <BaseFlex vertical={isMobile} gap={isMobile ? 'spacing-12px' : 'spacing-24px'} align="center">
                    <Image
                      src="/dummy/certification.png"
                      width={isMobile ? 70 : 100}
                      height={isMobile ? 49 : 74}
                      alt=""
                    />
                    <BaseTypography
                      as="p"
                      size={largeScreen ? 'header4' : isTablet ? 'header6' : 'body1'}
                      weight="bold"
                      color="white"
                      lineClamp={1}
                    >
                      {e}
                    </BaseTypography>
                  </BaseFlex>
                </div>
              </Col>
            ))}
          </Row>
        ),
      },
      {
        key: '2',
        label: '디자이너상',
        children: (
          <Row gutter={[24, 40]}>
            {data.awards.map((e, i) => (
              <Col key={i} span={12}>
                <div className={styles['award-card']}>
                  <BaseFlex vertical={isMobile} gap={isMobile ? 'spacing-12px' : 'spacing-24px'} align="center">
                    <Image src="/dummy/award.png" width={isMobile ? 70 : 100} height={isMobile ? 49 : 74} alt="" />
                    <BaseTypography
                      as="p"
                      size={largeScreen ? 'header4' : isTablet ? 'header6' : 'body1'}
                      weight="bold"
                      color="white"
                      lineClamp={1}
                    >
                      {e}
                    </BaseTypography>
                  </BaseFlex>
                </div>
              </Col>
            ))}
          </Row>
        ),
      },
    ]
  }, [data.certificates, data.awards, isMobile])
  return (
    <BaseFlex vertical gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
      {/* Content Top */}
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          경력 및 수상
        </BaseTypography>
        <BaseFlex vertical gap={largeScreen ? 'spacing-40px' : 'spacing-20px'}>
          {data.career.map((e, i) => (
            <BaseFlex key={i} vertical gap="spacing-16px">
              <BaseFlex gap="spacing-16px" align="center">
                <div>
                  <BaseCircleWave>
                    <BuildingsIcon width={24} height={24} color="#49C3D0" />
                  </BaseCircleWave>
                </div>
                <BaseFlex vertical gap="spacing-8px">
                  <BaseTypography
                    as="h6"
                    size="subtitle1"
                    weight="semibold"
                    color={i === 0 ? 'primary-600' : undefined}
                  >
                    {e.title}
                  </BaseTypography>
                  {e.in ||
                    (e.out && (
                      <BaseTypography as="p" size="subtitle1" weight="regular" color="neutral-500">
                        {e.in} {e.out ? `- ${e.out}` : null}
                      </BaseTypography>
                    ))}
                </BaseFlex>
              </BaseFlex>
              <BaseTypography as="p" size="subtitle2" weight="regular" color="neutral-500">
                {e.description}
              </BaseTypography>
            </BaseFlex>
          ))}
        </BaseFlex>
      </BaseFlex>

      {/* Content Bottom */}
      <BaseTabs defaultActiveKey="1" gapContent="48px" items={tabItems} />
    </BaseFlex>
  )
}
