import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Col, Row } from 'antd'
import styles from './Portfolio.module.scss'

const fileList = ['/dummy/makeup02.jpg', '/dummy/makeup01.jpg', '/dummy/makeup03.jpg', '/dummy/makeup04.jpg']
export const Portfolio = () => {
  return (
    <div className={styles['portfolio']}>
      <Row gutter={[8, 8]}>
        {Array.from({ length: 9 }).map((e, i) => (
          <Col key={i} span={8}>
            <BaseImagesPreview fileList={fileList}>
              <img src={fileList[0]} width={'100%'} height={395} alt="" className={styles['portfolio__item']} />
            </BaseImagesPreview>
          </Col>
        ))}
      </Row>
    </div>
  )
}
