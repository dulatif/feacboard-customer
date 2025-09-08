import { Progress, ProgressProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseProgress.scss'

export interface BaseProgressProps extends ProgressProps {
  color?: 'primary'
}
export const BaseProgress: React.FC<BaseProgressProps> = ({ color = 'primary', className, ...props }) => {
  const progressClass = classNames('base-progress', `base-progress--${color}`, className)
  return <Progress percent={50} showInfo={false} {...props} className={progressClass} />
}
