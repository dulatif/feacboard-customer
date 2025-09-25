import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'
import { BaseImagesPreview } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import DocumentIcon from '@/shared/components/icons/DocumentIcon'
import { Col, Row } from 'antd'
import { useState } from 'react'
import styles from './BeforeAfter.module.scss'

export const BeforeAfter = () => {
  const data = [
    {
      before: ['/dummy/review03.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
      after: ['/dummy/review04.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
    },
    {
      before: ['/dummy/review03.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
      after: ['/dummy/review04.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
    },
    {
      before: ['/dummy/review03.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
      after: ['/dummy/review04.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg'],
    },
  ]
  const [beforePosition, setBeforePosition] = useState(0)
  const [afterPosition, setAfterPosition] = useState(0)
  return (
    <BaseFlex vertical gap="spacing-24px" className={styles['container']}>
      {data.map((e, i) => (
        <BaseBox
          key={i}
          borderColor="neutral-300"
          radius="radius-16px"
          padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
        >
          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex gap="spacing-8px" align="center">
              <DocumentIcon color="#101828" />
              <BaseTypography as="p" size="body1" weight="regular" color="neutral-900">
                서비스 유형 : 헤어 스무딩 {beforePosition}, {afterPosition}
              </BaseTypography>
            </BaseFlex>
            <Row gutter={[24, 24]}>
              <Col key={i} span={12}>
                <div className={styles['before']}>
                  <BaseImagesPreview fileList={e.before} start={beforePosition} fileCount={false}>
                    <BaseImageCarousel images={e.before} onChange={(current) => setBeforePosition(current)} />
                  </BaseImagesPreview>
                  <div className={styles['badge']}>
                    <BaseBadge variant="danger-100">전에</BaseBadge>
                  </div>
                </div>
              </Col>
              <Col key={i} span={12}>
                <div className={styles['before']}>
                  <BaseImagesPreview fileList={e.after} start={afterPosition} fileCount={false}>
                    <BaseImageCarousel images={e.after} onChange={(current) => setAfterPosition(current)} />
                  </BaseImagesPreview>
                  <div className={styles['badge']}>
                    <BaseBadge variant="success-100">후에</BaseBadge>
                  </div>
                </div>
              </Col>
            </Row>
          </BaseFlex>
        </BaseBox>
      ))}
    </BaseFlex>
  )
}
