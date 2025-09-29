import React from 'react'
import ColorAnalysisSlider from './ColorAnalysisSlider'

const AnalysisStep4 = () => {
  const colors = [
    '#fff',
    '#FE3E02',
    '#FE8806',
    '#FFFF2D',
    '#92D050',
    '#00B050',
    '#63CEF5',
    '#0490C8',
    '#3B9EC7',
    '#AB56FF',
    '#FF81AB',
  ]

  return <ColorAnalysisSlider colors={colors} />
}

export default AnalysisStep4
