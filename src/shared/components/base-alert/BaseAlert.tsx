import { Color } from '@/shared/types/color'
import { Radius } from '@/shared/types/radius'
import { Spacing } from '@/shared/types/spacing'
import classNames from 'classnames'
import { Info } from 'phosphor-react'
import React from 'react'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography, BaseTypographyProps } from '../base-typography/BaseTypography'
import './BaseAlert.scss'

export interface BaseAlertProps {
  message: string
  padding?: { x?: Spacing; y?: Spacing }
  background?: Color
  radius?: Radius
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  typographyProps?: BaseTypographyProps
}
export const BaseAlert: React.FC<BaseAlertProps> = ({
  message,
  padding,
  background = 'neutral-100',
  radius = 'radius-8px',
  icon = <Info size={20} />,
  iconPosition = 'start',
  typographyProps = {
    as: 'p',
    size: 'body1',
    color: 'neutral-500',
  },
  className,
}) => {
  const paddingXClass = `px-${(padding?.x ?? 'spacing-8px').replace('spacing-', '')}`
  const paddingYClass = `py-${(padding?.y ?? 'spacing-10px').replace('spacing-', '')}`
  const backgroundColorClass = `background-${background}`
  const radiusClass = `rounded-${radius.replace('radius-', '')}`
  const alertClassNames = classNames(
    'base-alert',
    paddingXClass,
    paddingYClass,
    backgroundColorClass,
    radiusClass,
    className,
  )
  return (
    <BaseFlex align="center" gap="spacing-8px" className={alertClassNames}>
      {icon && iconPosition === 'start' && <span className="base-alert__icon base-alert__icon--start">{icon}</span>}
      <BaseTypography {...typographyProps}>{message}</BaseTypography>
      {icon && iconPosition === 'end' && <span className="base-alert__icon base-alert__icon--end">{icon}</span>}
    </BaseFlex>
  )
}
