import { Steps, StepsProps } from 'antd'
import React from 'react'
import './BaseSteps.scss'
import classNames from 'classnames'

export interface BaseStepsProps extends StepsProps {}
export const BaseSteps: React.FC<BaseStepsProps> = ({ className, ...props }) => {
  const stepsClass = classNames('base-steps', className)
  return <Steps {...props} className={stepsClass} />
}
