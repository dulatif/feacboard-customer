import React, { ReactNode } from 'react'
import { BaseFlex } from '../base-flex/BaseFlex'
import './BaseCircleWave.scss'

export interface BaseCircleWaveProps {
  children: ReactNode
  color?: 'primary' | 'secondary'
}
export const BaseCircleWave: React.FC<BaseCircleWaveProps> = ({ children, color = 'primary' }) => {
  return (
    <BaseFlex justify="center" align="center" className={`base-circle-wave base-circle-wave--${color}`}>
      {children}
    </BaseFlex>
  )
}
