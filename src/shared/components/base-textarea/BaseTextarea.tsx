import React, { useState } from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/es/input'
import classNames from 'classnames'
import './BaseTextarea.scss'
const { TextArea } = Input

export interface BaseTextareaProps extends Omit<TextAreaProps, 'size'> {
  size?: 'default' | 'large'
}
export const BaseTextarea: React.FC<BaseTextareaProps> = ({
  onFocus,
  onBlur,
  className,
  size = 'default',
  ...props
}) => {
  const [focused, setFocused] = useState(false)
  const textareaClass = classNames(
    'base-textarea',
    {
      'base-textarea--large': size === 'large',
      'base-textarea--default': size === 'default',
      'base-textarea--focused': focused,
    },
    className,
  )
  return (
    <TextArea
      onFocus={(e) => {
        setFocused(true)
        onFocus?.(e)
      }}
      onBlur={(e) => {
        setFocused(false)
        onBlur?.(e)
      }}
      className={textareaClass}
      {...props}
    />
  )
}
