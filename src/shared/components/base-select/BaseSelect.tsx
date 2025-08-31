import { Select, SelectProps } from 'antd'
import classNames from 'classnames'
import React, { useState } from 'react'
import './BaseSelect.scss'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export interface BaseSelectProps extends Omit<SelectProps, 'size'> {
  size?: 'default' | 'large'
}
export const BaseSelect: React.FC<BaseSelectProps> = ({ size = 'default', className, onFocus, onBlur, ...rest }) => {
  const [focused, setFocused] = useState(false)
  const selectClass = classNames(
    'base-select',
    {
      'base-select--large': size === 'large',
      'base-select--default': size === 'default',
      'base-select--focused': focused,
    },
    className,
  )
  return (
    <Select
      {...rest}
      className={selectClass}
      onFocus={(e) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        onBlur?.(e)
      }}
      suffixIcon={<ChevronDownIcon width={20} height={20} />}
    />
  )
}
