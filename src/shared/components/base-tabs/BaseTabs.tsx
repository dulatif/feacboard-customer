import { Tabs, TabsProps } from 'antd'
import React from 'react'
import './BaseTabs.scss'
import classNames from 'classnames'

export interface BaseTabsProps extends TabsProps {}
export const BaseTabs: React.FC<BaseTabsProps> = ({ className, ...props }) => {
  const tabClass = classNames('base-tabs', className)
  return <Tabs {...props} className={tabClass} />
}
