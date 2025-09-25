import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import styles from './ManualDiagnosis.module.scss'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

interface ColorAnalysisSliderProps {
  colors: string[]
}
const ColorAnalysisSlider = ({ colors }: ColorAnalysisSliderProps) => {
  const settings = {
    dots: true,
    dotsClass: styles['slick-dots'],
    classNames: styles['slider_color'],
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i: number) => {
      return <div style={{ backgroundColor: colors[i] }} className={styles['slider_color_indikator']} />
    },
  }
  return (
    <div className={styles['color_analysis']}>
      <Slider {...settings} className={styles['slider_color']}>
        {colors.map((color, index) =>
          color === '#fff' ? (
            <div key={index}>
              <div className={`${styles['card_color_item']} `} style={{ backgroundColor: '#fff' }}></div>
            </div>
          ) : (
            <div key={index}>
              <div className={`${styles['card_color_item']} `} style={{ backgroundColor: color }}>
                <Image src="/dummy/face-manual-analysis.png" alt="face manual analysis" width={258} height={341} />
                <BaseTypography
                  as="p"
                  variant="aleo"
                  size="subtitle1"
                  weight="semibold"
                  color="white"
                  style={{ marginTop: '32px' }}
                >
                  비비드 - Vivid
                </BaseTypography>
              </div>
            </div>
          ),
        )}
      </Slider>
    </div>
  )
}

export default ColorAnalysisSlider
