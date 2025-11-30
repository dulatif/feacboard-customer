import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import styles from './ManualDiagnosis.module.scss'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useResponsive } from '@/shared/hooks/useResponsive'

interface ColorAnalysisSliderProps {
  colors: string[]
}
const ColorAnalysisSlider = ({ colors }: ColorAnalysisSliderProps) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const imageWidth = isMobile ? 180 : 258
  const imageHeight = isMobile ? 238 : 341
  const slidesToShow = isMobile ? 2 : 3
  const settings = {
    dots: true,
    dotsClass: styles['slick-dots'],
    classNames: styles['slider_color'],
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    initialSlide: 1,
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
                <Image
                  src="/dummy/face-manual-analysis.png"
                  alt="face manual analysis"
                  width={imageWidth}
                  height={imageHeight}
                />
                <BaseTypography
                  as="p"
                  variant="aleo"
                  size="subtitle1"
                  weight="semibold"
                  color="white"
                  style={{ marginTop: isMobile ? '16px' : '32px' }}
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
