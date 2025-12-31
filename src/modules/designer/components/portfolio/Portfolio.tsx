import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview, BaseImagesPreviewProps } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Carousel, Col, Row } from 'antd'
import styles from './Portfolio.module.scss'
import { useState } from 'react'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { usePortfoliosQuery } from '@/shared/hooks/portfolio/usePortfolioQuery'
import { PortfolioType } from '@/shared/interface/portfolio'
import { useParams } from 'next/navigation'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'

export interface PortfolioProps {}
export const Portfolio: React.FC<PortfolioProps> = () => {
  const { id } = useParams()
  const designerId = Number(id)
  const { data, isPending } = usePortfoliosQuery({ type: PortfolioType.GENERAL, designerId })
  const [selectedFileList, setSelectedFileList] = useState<BaseImagesPreviewProps['fileList']>([])
  const [defaultSelectedPreviewThumbnail, setDefaultSelectedPreviewThumbnail] = useState(0)
  const [previewThumbnails, setPreviewThumbnails] = useState(false)
  const handlePreviewThumbnail = (imageIndex: number, fileList: string[]) => {
    setPreviewThumbnails(true)
    setSelectedFileList(fileList)
    setDefaultSelectedPreviewThumbnail(imageIndex)
  }
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseSpin spinning={isPending}>
      <div className={styles['portfolio']}>
        <BaseImagesPreview
          fileList={selectedFileList}
          start={defaultSelectedPreviewThumbnail}
          visible={previewThumbnails}
          setVisible={setPreviewThumbnails}
          fileCount={false}
        >
          <Row gutter={[8, 8]}>
            {data?.map((e, i) => (
              <Col key={i} span={largeScreen ? 8 : 12}>
                <Carousel draggable style={{ borderRadius: '12px', overflow: 'hidden', height: '400px' }}>
                  {e.photos.map((photo) => (
                    <div key={photo.id} className={styles['portfolio__item__container']}>
                      <BaseImage
                        src={photo.url}
                        height={isMobile ? 240 : 395}
                        alt=""
                        className={styles['portfolio__item']}
                        onClick={() => handlePreviewThumbnail(i, e?.photos.map((e) => e.url) || [])}
                      />
                      <div className={styles['portfolio__item__count']}>{e?.photos.length}</div>
                    </div>
                  ))}
                </Carousel>
              </Col>
            ))}
          </Row>
        </BaseImagesPreview>
      </div>
    </BaseSpin>
  )
}
