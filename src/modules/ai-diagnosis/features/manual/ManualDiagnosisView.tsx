'use client'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Col, Row } from 'antd'
import { Mask, OmegaSquare, Sun1 } from 'iconsax-reactjs'
import Image from 'next/image'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import styles from './ManualDiagnosis.module.scss'
import Link from 'next/link'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'

interface DataItemProps {
  icon: React.ReactNode
  title: string
  description: string
}
const DataItem: React.FC<DataItemProps> = ({ icon, title, description }) => {
  return (
    <div className={styles['data_item']}>
      <div className={styles['data_item_icon']}>{icon}</div>
      <div className={styles['data_item_content']}>
        <BaseTypography
          as="p"
          size="subtitle1"
          variant="aleo"
          weight="semibold"
          style={{ marginBottom: '8px', marginTop: '10px' }}
        >
          {title}
        </BaseTypography>
        <BaseTypography as="p" size="body1" color="neutral-500" weight="medium">
          {description}
        </BaseTypography>
      </div>
    </div>
  )
}

const ManualDiagnosisView = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const dataItems: DataItemProps[] = [
    {
      icon: <OmegaSquare size={24} />,
      title: '세로로 촬영하세요.',
      description: '세로 사진을 찍을 때는 얼굴이 카메라를 제대로 향하고 있는지 확인하고 모든 상황에 대비하세요.',
    },
    {
      icon: <Mask size={24} />,
      title: '빛 반사에 주의하세요.',
      description: '세로 사진을 찍을 때는 얼굴이 카메라를 제대로 향하고 있는지 확인하고 모든 상황에 대비하세요.',
    },
    {
      icon: <Sun1 size={24} />,
      title: '10AM - 2PM 자연광 아래에서 촬영해주세요.',
      description: '세로 사진을 찍을 때는 얼굴이 카메라를 제대로 향하고 있는지 확인하고 모든 상황에 대비하세요.',
    },
  ]

  return (
    <div className={styles['ai_manual_onboarding']}>
      <Link href="/ai-diagnosis">
        <BaseButton color="secondary-neutral" icon={<CaretLeft weight="bold" size={20} />}>
          반품
        </BaseButton>
      </Link>

      <Row style={{ marginTop: largeScreen ? 87 : 48 }} gutter={48} justify={'center'}>
        <Col span={largeScreen ? 10 : isTablet ? 18 : 24}>
          <BaseTypography
            as="p"
            size={largeScreen ? 'header5' : 'header6'}
            variant="aleo"
            weight="medium"
            style={{ marginBottom: '48px' }}
          >
            촬영 가이드에 맞추어 진행하지 않는 경우, 진단 결과가 부정확할 수 있습니다.
          </BaseTypography>
          {dataItems.map((item) => (
            <DataItem key={item.title} {...item} />
          ))}
          <Link href="/ai-diagnosis/manual/analysis">
            <BaseButton size={largeScreen ? '2xl' : 'xl'} style={{ width: '100%', marginTop: largeScreen ? 48 : 0 }}>
              촬영 시작
            </BaseButton>
          </Link>
        </Col>
        {!isMobile && (
          <Col span={largeScreen ? 14 : isTablet ? 18 : 24}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '622 / 523',
                overflow: 'hidden',
                borderRadius: 12,
              }}
            >
              <Image src={'/images/ai/ai-manual-onboarding-grid-images.png'} alt="촬영 가이드 이미지" fill />
            </div>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default ManualDiagnosisView
