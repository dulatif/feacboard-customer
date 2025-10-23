import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Col, Row } from 'antd'
import styles from './Portfolio.module.scss'

const fileList = [
  '/dummy/designer-portfolio01.jpg',
  '/dummy/designer-portfolio02.jpg',
  '/dummy/designer-portfolio03.jpg',
  '/dummy/designer-portfolio04.jpg',
]
export const Portfolio = () => {
  return (
    <div className={styles['portfolio']}>
      <Row gutter={[8, 8]}>
        {Array.from({ length: 4 }).map((e, i) => (
          <Col key={i} span={8}>
            <BaseImagesPreview fileList={fileList} start={i}>
              <BaseImage src={fileList[i]} height={395} alt="" className={styles['portfolio__item']} />
            </BaseImagesPreview>
          </Col>
        ))}
      </Row>
    </div>
  )
}
