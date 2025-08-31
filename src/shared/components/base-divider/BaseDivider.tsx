import { Divider, DividerProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseDivider.scss'

export interface BaseDividerProps extends DividerProps {}
export const BaseDivider: React.FC<BaseDividerProps> = ({ className, ...props }) => {
  const dividerClass = classNames('base-divider', className)
  return <Divider {...props} className={dividerClass} />
}
