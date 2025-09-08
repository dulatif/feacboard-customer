import { Tabs, TabsProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseTabs.scss'

export interface BaseTabsProps extends TabsProps {
  gapContent?: '24px' | '80px'
  variant?: 'default' | 'filled'
}
export const BaseTabs: React.FC<BaseTabsProps> = ({
  variant = 'default',
  className,
  gapContent = '24px',
  ...props
}) => {
  const tabClass = classNames('base-tabs', `base-tabs--${variant}`, `base-tabs--gap-content-${gapContent}`, className)
  return <Tabs {...props} className={tabClass} />
}
