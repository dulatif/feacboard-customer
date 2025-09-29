import { Col, Row } from 'antd'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ManualDiagnosis.module.scss'
import { Check } from 'phosphor-react'

const AnalysisStep2 = () => {
  const [pickedItem, setPickedItem] = useState<number | null>(null)
  return (
    <Row gutter={24} className={styles['analysis_step2']}>
      {Array.from({ length: 4 }, (_, index) => (
        <Col span={12} key={index}>
          <div className={styles['analysis_item']}>
            <Image
              src={'/dummy/manual-analysis-step-2.jpg'}
              alt="촬영 가이드 라인"
              width={588}
              height={585}
              onClick={() => setPickedItem(index)}
              className={styles['analysis_image']}
              style={{ width: '100%', height: 'auto', aspectRatio: '1/1', marginBottom: 24 }}
            />
            <div className={`${styles['analysis_checkbox']} ${pickedItem === index ? styles['checked'] : ''}`}>
              {pickedItem === index && <Check size={24} />}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default AnalysisStep2
