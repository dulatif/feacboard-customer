import React, { ReactNode } from 'react'
import { BaseFlex } from '../base-flex/BaseFlex'
import './BaseCircleWave.scss'

export interface BaseCircleWaveProps {
  children: ReactNode
}
export const BaseCircleWave: React.FC<BaseCircleWaveProps> = ({ children }) => {
  return (
    <BaseFlex justify="center" align="center" className="base-circle-wave">
      {children}
    </BaseFlex>
  )
}
