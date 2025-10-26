import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview, BaseImagesPreviewProps } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Col, Row } from 'antd'
import styles from './Portfolio.module.scss'
import { useState } from 'react'

export interface PortfolioProps {
  data: string[][]
}
export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  const [selectedFileList, setSelectedFileList] = useState<BaseImagesPreviewProps['fileList']>([])
  const [defaultSelectedPreviewThumbnail, setDefaultSelectedPreviewThumbnail] = useState(0)
  const [previewThumbnails, setPreviewThumbnails] = useState(false)
  const handlePreviewThumbnail = (imageIndex: number, fileList: string[]) => {
    setPreviewThumbnails(true)
    setSelectedFileList(fileList)
    setDefaultSelectedPreviewThumbnail(imageIndex)
  }
  return (
    <div className={styles['portfolio']}>
      <BaseImagesPreview
        fileList={selectedFileList}
        start={defaultSelectedPreviewThumbnail}
        visible={previewThumbnails}
        setVisible={setPreviewThumbnails}
        fileCount={false}
      >
        <Row gutter={[8, 8]}>
          {data.map((e, i) => (
            <Col key={i} span={8}>
              <div className={styles['portfolio__item__container']}>
                <BaseImage
                  src={e[i]}
                  height={395}
                  alt=""
                  className={styles['portfolio__item']}
                  onClick={() => handlePreviewThumbnail(i, e)}
                />
                <div className={styles['portfolio__item__count']}>
                  {i + 1}/{e.length}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </BaseImagesPreview>
    </div>
  )
}
