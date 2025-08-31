import React, { useState } from 'react'
import { Input, InputProps } from 'antd'
import classNames from 'classnames'
import './BaseInput.scss'

export interface BaseInputProps extends Omit<InputProps, 'size'> {
  size?: 'default' | 'large'
}

export const BaseInput: React.FC<BaseInputProps> = ({ size = 'default', className, onFocus, onBlur, ...rest }) => {
  const [focused, setFocused] = useState(false)
  const inputClass = classNames(
    'base-input',
    {
      'base-input--large': size === 'large',
      'base-input--default': size === 'default',
      'base-input--focused': focused,
    },
    className,
  )

  return (
    <Input
      {...rest}
      className={inputClass}
      onFocus={(e) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        onBlur?.(e)
      }}
    />
  )
}
