import { Collapse, CollapseProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseCollapse.scss'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export interface BaseCollapseProps extends CollapseProps {}

export const BaseCollapse: React.FC<BaseCollapseProps> = ({ className, ...props }) => {
  const collapseClass = classNames('base-collapse', className)
  return (
    <Collapse
      {...props}
      className={collapseClass}
      expandIcon={({ isActive }) => {
        return <ChevronDownIcon width={20} height={20} style={{ transform: isActive ? 'rotate(-180deg)' : 'none' }} />
      }}
    />
  )
}
