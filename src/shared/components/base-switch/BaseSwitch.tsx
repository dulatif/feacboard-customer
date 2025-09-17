import React from 'react'
import './BaseSwitch.scss'
import { Switch, SwitchProps } from 'antd'
import classNames from 'classnames'

export interface BaseSwitchProps extends SwitchProps {}
export const BaseSwitch: React.FC<BaseSwitchProps> = ({ className, ...props }) => {
  const switchClass = classNames('base-switch', className)
  return <Switch {...props} className={switchClass} />
}
