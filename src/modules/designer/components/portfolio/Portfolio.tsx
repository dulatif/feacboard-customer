import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Col, Row } from 'antd'
import styles from './Portfolio.module.scss'

const fileList = [
  '/dummy/makeup02.jpg',
  '/dummy/makeup01.jpg',
  '/dummy/makeup03.jpg',
  '/dummy/makeup04.jpg',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
]
export const Portfolio = () => {
  return (
    <div className={styles['portfolio']}>
      <Row gutter={[8, 8]}>
        {Array.from({ length: 9 }).map((e, i) => (
          <Col key={i} span={8}>
            <BaseImagesPreview fileList={fileList}>
              <BaseImage src={fileList[0]} height={395} alt="" className={styles['portfolio__item']} />
            </BaseImagesPreview>
          </Col>
        ))}
      </Row>
    </div>
  )
}
