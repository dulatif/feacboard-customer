import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseImagesPreview } from '@/shared/components/base-images-preview/BaseImagesPreview'
import { Col, Row } from 'antd'
import styles from './Portfolio.module.scss'

export interface PortfolioProps {
  data: string[][]
}
export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <div className={styles['portfolio']}>
      <Row gutter={[8, 8]}>
        {data.map((e, i) => (
          <Col key={i} span={8}>
            <BaseImagesPreview fileList={e} start={i}>
              <BaseImage src={e[i]} height={395} alt="" className={styles['portfolio__item']} />
            </BaseImagesPreview>
          </Col>
        ))}
      </Row>
    </div>
  )
}
