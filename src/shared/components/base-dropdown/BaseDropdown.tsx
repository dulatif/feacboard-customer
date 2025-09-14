import { Dropdown, DropdownProps } from 'antd'
import React from 'react'

export interface BaseDropdownProps extends DropdownProps {}
export const BaseDropdown: React.FC<BaseDropdownProps> = ({ children, ...props }) => {
  return <Dropdown {...props}>{children}</Dropdown>
}
