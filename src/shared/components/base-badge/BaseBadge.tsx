import React, { ReactNode } from 'react'
import './BaseBadge.scss'
import classNames from 'classnames'
import { BaseFlex, BaseFlexProps } from '../base-flex/BaseFlex'
import { BaseTypography, BaseTypographyProps } from '../base-typography/BaseTypography'

export interface BaseBadgeProps {
  variant?:
    | 'primary-25'
    | 'secondary-25'
    | 'warning-25'
    | 'warning-100'
    | 'info-100'
    | 'success-100'
    | 'danger-100'
    | 'pink-gradient'
    | 'brown-gradient'
    | 'neutral-100'
    | 'secondary-700'
  className?: string
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  padding?: BaseFlexProps['padding']
  children: ReactNode
  textProps?: Omit<BaseTypographyProps, 'children' | 'as'>
}

const defaultTextProps: BaseBadgeProps['textProps'] = {
  color: 'inherit',
  size: 'body1',
}
export const BaseBadge = ({
  variant = 'primary-25',
  className,
  icon,
  iconPosition = 'start',
  padding = { x: 'spacing-8px', y: 'spacing-4px' },
  children,
  textProps,
}: BaseBadgeProps) => {
  const badgeClass = classNames('base-badge', `base-badge--${variant}`, className)
  const typographyProps = { ...defaultTextProps, ...textProps }

  return (
    <div className={badgeClass}>
      <BaseFlex gap="spacing-8px" align="center" padding={padding}>
        {icon && iconPosition === 'start' && <span className="base-badge__icon base-badge__icon--start">{icon}</span>}
        {children && (
          <BaseTypography className="base-badge__text" as="p" {...typographyProps}>
            {children}
          </BaseTypography>
        )}
        {icon && iconPosition === 'end' && <span className="base-badge__icon base-badge__icon--end">{icon}</span>}
      </BaseFlex>
    </div>
  )
}
