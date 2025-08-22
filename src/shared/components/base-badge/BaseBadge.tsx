import React, { ReactNode } from 'react'
import './BaseBadge.scss'
import classNames from 'classnames'
import { BaseFlex } from '../base-flex/BaseFlex'

export interface BaseBadgeProps {
  variant?: 'primary-25' | 'secondary-25' | 'warning-25'
  className?: string
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  children: ReactNode
}
export const BaseBadge = ({
  variant = 'primary-25',
  className,
  icon,
  iconPosition = 'start',
  children,
}: BaseBadgeProps) => {
  const badgeClass = classNames('base-badge', `base-badge--${variant}`, className)

  return (
    <div className={badgeClass}>
      <BaseFlex gap="spacing-8px" align="center">
        {icon && iconPosition === 'start' && <span className="base-badge__icon base-badge__icon--start">{icon}</span>}
        {children && <span className="base-badge__text">{children}</span>}
        {icon && iconPosition === 'end' && <span className="base-badge__icon base-badge__icon--end">{icon}</span>}
      </BaseFlex>
    </div>
  )
}
