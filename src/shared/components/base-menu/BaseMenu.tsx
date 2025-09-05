import { GetProp, Menu, MenuProps } from 'antd'
import classNames from 'classnames'
import React from 'react'
import './BaseMenu.scss'

export type MenuItem = GetProp<MenuProps, 'items'>[number]
export interface BaseMenuProps extends MenuProps {}
export const BaseMenu: React.FC<BaseMenuProps> = ({ className, ...props }) => {
  const menuClass = classNames('base-menu', className)
  return <Menu {...props} className={menuClass} />
}
