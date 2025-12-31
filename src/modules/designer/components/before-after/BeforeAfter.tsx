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
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useParams } from 'next/navigation'
import { usePortfoliosQuery } from '@/shared/hooks/portfolio/usePortfolioQuery'
import { PortfolioType } from '@/shared/interface/portfolio'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'

export interface BeforeAfterProps {}
export const BeforeAfter: React.FC<BeforeAfterProps> = () => {
  const { id } = useParams()
  const designerId = Number(id)
  const { data, isPending } = usePortfoliosQuery({ type: PortfolioType.BEFORE_AFTER, designerId })
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
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
      <BaseSpin spinning={isPending}>
        <BaseImagesPreview
          fileList={selectedFileList}
          start={defaultSelectedPreviewThumbnail}
          visible={previewThumbnails}
          setVisible={setPreviewThumbnails}
          fileCount={false}
          key={JSON.stringify(selectedFileList)}
        >
          {data?.map((e, i) => (
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
                    서비스 유형 : {e.service_title}
                  </BaseTypography>
                </BaseFlex>
                <Row gutter={largeScreen ? [24, 24] : isTablet ? [12, 12] : [8, 8]}>
                  <Col key={`before-${i}`} span={isMobile ? 24 : 12}>
                    <div className={styles['before']}>
                      <BaseImageCarousel
                        images={e.before_photos.map((e) => e.url)}
                        onImageClick={(index) =>
                          handlePreviewThumbnail(
                            index,
                            e.before_photos.map((e) => e.url),
                          )
                        }
                      />
                      <div className={styles['badge']}>
                        <BaseBadge variant="danger-100">Before</BaseBadge>
                      </div>
                    </div>
                  </Col>
                  <Col key={`after-${i}`} span={isMobile ? 24 : 12}>
                    <div className={styles['after']}>
                      <BaseImageCarousel
                        images={e.after_photos.map((e) => e.url)}
                        onImageClick={(index) =>
                          handlePreviewThumbnail(
                            index,
                            e.after_photos.map((e) => e.url),
                          )
                        }
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
      </BaseSpin>
    </BaseFlex>
  )
}
