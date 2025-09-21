import classNames from 'classnames'
import React from 'react'
import { BaseButton, BaseButtonProps } from '../base-button/BaseButton'
import './BaseFloatButton.scss'
import { Badge, BadgeProps } from 'antd'

export interface BaseFloatButtonProps extends BaseButtonProps {
  bottom?: number
  right?: number
  withBadge?: boolean
  badgeProps?: BadgeProps
}
export const BaseFloatButton: React.FC<BaseFloatButtonProps> = ({
  bottom = 24,
  right = 132,
  className,
  withBadge,
  badgeProps,
  ...props
}) => {
  const floatButtonClass = classNames('base-float-button', className)
  return (
    <div className="base-float-button__wrapper" style={{ position: 'fixed', bottom, insetInlineEnd: right }}>
      {withBadge ? (
        <Badge {...badgeProps}>
          <BaseButton {...props} className={floatButtonClass} />
        </Badge>
      ) : (
        <BaseButton {...props} className={floatButtonClass} />
      )}
    </div>
  )
}
