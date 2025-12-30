'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useGetDesignerCertificatesQuery } from '@/shared/hooks/certificate/useCertificateQuery'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { Col, Empty, Row, Spin } from 'antd'
import Image from 'next/image'
import React from 'react'
import styles from '../PersonalHistory.module.scss'

interface DesignerCertificatesTabProps {
  designerId: number
}

export const DesignerCertificatesTab: React.FC<DesignerCertificatesTabProps> = ({ designerId }) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const { data: certificates, isLoading } = useGetDesignerCertificatesQuery({ designerId })

  if (isLoading) {
    return (
      <BaseFlex justify="center" padding={{ y: 'spacing-40px' }}>
        <Spin />
      </BaseFlex>
    )
  }

  if (!certificates || certificates.length === 0) {
    return (
      <BaseFlex justify="center" padding={{ y: 'spacing-20px' }}>
        <Empty description="인증서 정보가 없습니다." />
      </BaseFlex>
    )
  }

  return (
    <Row gutter={[24, 40]}>
      {certificates.map((cert) => (
        <Col key={cert.id} span={12}>
          <div className={styles['certification-card']}>
            <BaseFlex vertical={isMobile} gap={isMobile ? 'spacing-12px' : 'spacing-24px'} align="center">
              <Image
                src={cert.icon}
                width={isMobile ? 70 : 100}
                height={isMobile ? 49 : 74}
                alt={cert.localized_name}
              />
              <BaseTypography
                as="p"
                size={largeScreen ? 'header4' : isTablet ? 'header6' : 'body1'}
                weight="bold"
                color="white"
                lineClamp={1}
              >
                {cert.localized_name}
              </BaseTypography>
            </BaseFlex>
          </div>
        </Col>
      ))}
    </Row>
  )
}
