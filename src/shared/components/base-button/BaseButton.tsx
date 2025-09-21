import React, { ReactNode } from 'react'
import { Button, ButtonProps } from 'antd'
import classNames from 'classnames'
import './BaseButton.scss'

export interface BaseButtonProps
  extends Omit<ButtonProps, 'variant' | 'danger' | 'color' | 'shape' | 'size' | 'icon' | 'iconPosition'> {
  variant?: 'default' | 'link' | 'fullwidth'
  color?:
    | 'primary'
    | 'secondary'
    | 'secondary-neutral'
    | 'tertiary'
    | 'tertiary-neutral'
    | 'danger'
    | 'grey'
    | 'success'
  shape?: 'default' | 'circle' | 'square'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  children?: ReactNode
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  outlined?: boolean
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  variant = 'default',
  color = 'primary',
  shape = 'default',
  size = 'md',
  icon,
  iconPosition = 'start',
  children,
  loading = false,
  disabled = false,
  onClick,
  className,
  outlined = false,
  ...props
}) => {
  const isDisabled = disabled || loading

  const btnClass = classNames(
    'base-button',
    `base-button--${color}`,
    `base-button--${shape}`,
    `base-button--${size}`,
    `base-button--${variant}`,
    `base-button--${outlined ? 'outlined' : ''}`,
    {
      'base-button--loading': loading,
      'base-button--disabled': isDisabled,
    },
    className,
  )

  return (
    <Button className={btnClass} disabled={isDisabled} onClick={onClick} {...props}>
      {icon && iconPosition === 'start' && <span className="base-button__icon base-button__icon--start">{icon}</span>}
      {children && <span className="base-button__text">{children}</span>}
      {icon && iconPosition === 'end' && <span className="base-button__icon base-button__icon--end">{icon}</span>}
    </Button>
  )
}
