import React, { Ref, useState } from 'react'
import { Input, InputProps, InputRef } from 'antd'
import classNames from 'classnames'
import './BaseInput.scss'

export interface BaseInputProps extends Omit<InputProps, 'size'> {
  size?: 'default' | 'large'
}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ size = 'default', className, onFocus, onBlur, ...rest }, ref) => {
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
        ref={ref as unknown as Ref<InputRef>}
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
  },
)

BaseInput.displayName = 'BaseInput'
