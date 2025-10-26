import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImageCarousel } from '@/shared/components/base-image-carousel/BaseImageCarousel'
import { BaseImagesPreview, BaseImagesPreviewProps } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import DocumentIcon from '@/shared/components/icons/DocumentIcon'
import { Col, Row } from 'antd'
import { useState } from 'react'
import styles from './BeforeAfter.module.scss'

export interface BeforeAfterProps {
  data: {
    before: string[]
    after: string[]
  }[]
}
export const BeforeAfter: React.FC<BeforeAfterProps> = ({ data }) => {
  const [selectedFileList, setSelectedFileList] = useState<BaseImagesPreviewProps['fileList']>([])
  const [defaultSelectedPreviewThumbnail, setDefaultSelectedPreviewThumbnail] = useState(0)
  const [previewThumbnails, setPreviewThumbnails] = useState(false)
  const handlePreviewThumbnail = (imageIndex: number, fileList: string[]) => {
    setSelectedFileList(fileList)
    setDefaultSelectedPreviewThumbnail(imageIndex)
    setPreviewThumbnails(true)
  }
  return (
    <BaseFlex vertical gap="spacing-24px" className={styles['container']}>
      <BaseImagesPreview
        fileList={selectedFileList}
        start={defaultSelectedPreviewThumbnail}
        visible={previewThumbnails}
        setVisible={setPreviewThumbnails}
        fileCount={false}
        key={JSON.stringify(selectedFileList)}
      >
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
                  시술 상품: 헤어 염색
                </BaseTypography>
              </BaseFlex>
              <Row gutter={[24, 24]}>
                <Col key={`before-${i}`} span={12}>
                  <div className={styles['before']}>
                    <BaseImageCarousel
                      images={e.before}
                      onImageClick={(index) => handlePreviewThumbnail(index, e.before)}
                    />
                    <div className={styles['badge']}>
                      <BaseBadge variant="danger-100">Before</BaseBadge>
                    </div>
                  </div>
                </Col>
                <Col key={`after-${i}`} span={12}>
                  <div className={styles['after']}>
                    <BaseImageCarousel
                      images={e.after}
                      onImageClick={(index) => handlePreviewThumbnail(index, e.after)}
                    />
                    <div className={styles['badge']}>
                      <BaseBadge variant="success-100">After</BaseBadge>
                    </div>
                  </div>
                </Col>
              </Row>
            </BaseFlex>
          </BaseBox>
        ))}
      </BaseImagesPreview>
    </BaseFlex>
  )
}
