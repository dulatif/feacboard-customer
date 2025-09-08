import classNames from 'classnames'
import React from 'react'
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton'
import './BaseFloatButton.scss'

export interface BaseFloatButtonProps extends Omit<BaseButtonProps, 'size'> {
  bottom?: number
  right?: number
}
export const BaseFloatButton: React.FC<BaseFloatButtonProps> = ({ bottom = 24, right = 132, className, ...props }) => {
  const floatButtonClass = classNames('base-float-button', className)
  return (
    <div className="base-float-button__wrapper">
      <BaseButton
        {...props}
        className={floatButtonClass}
        style={{ position: 'fixed', bottom, insetInlineEnd: right }}
      />
    </div>
  )
}
