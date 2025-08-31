import { Rate, RateProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseRate.scss'

export interface BaseRateProps extends RateProps {}

export const BaseRate = ({ className, ...props }: BaseRateProps) => {
  const rateClass = classNames('base-rate', className)
  return <Rate {...props} className={rateClass} />
}
