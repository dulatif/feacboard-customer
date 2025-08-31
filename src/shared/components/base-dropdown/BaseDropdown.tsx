import { Dropdown, DropdownProps } from 'antd'
import React from 'react'

export interface BaseDropdownProps extends DropdownProps {}
export const BaseDropdown: React.FC<BaseDropdownProps> = ({ ...props }) => {
  return <Dropdown {...props} />
}
