import { Breadcrumb, BreadcrumbProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseBreadcrumb.scss'

export interface BaseBreadcrumbProps extends BreadcrumbProps {
  className?: string
  color?: 'neutral-900' | 'white'
}
export const BaseBreadcrumb: React.FC<BaseBreadcrumbProps> = ({ className, color = 'neutral-900', ...props }) => {
  const breadcrumbClass = classNames('base-breadcrumb', `base-breadcrumb--${color}`, className)
  return <Breadcrumb {...props} className={breadcrumbClass} />
}
