import React from 'react'
import classNames from 'classnames'
import './BaseBox.scss'
import { Spacing } from '@/shared/types/spacing'
import { Radius } from '@/shared/types/radius'
import { Color } from '@/shared/types/color'

export type Shadow =
  | 'no-shadow'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'active-primary'
  | 'active-secondary'
  | 'active-neutral'
  | 'active-danger'

export interface BaseBoxProps {
  children?: React.ReactNode
  padding?: { x?: Spacing; y?: Spacing }
  radius?: Radius
  bordered?: boolean
  borderWidth?: number
  background?: Color
  borderColor?: Color
  shadow?: Shadow
  className?: string
  width?: number
}

export const BaseBox: React.FC<BaseBoxProps> = ({
  children,
  padding = { x: 'spacing-16px', y: 'spacing-16px' },
  radius = 'radius-16px',
  bordered = true,
  borderWidth = 1,
  background = 'white',
  borderColor = 'neutral-25',
  shadow = 'no-shadow',
  width = '100%',
  className,
}) => {
  const paddingXClass = `px-${(padding.x ?? 'spacing-16px').replace('spacing-', '')}`
  const paddingYClass = `py-${(padding.y ?? 'spacing-16px').replace('spacing-', '')}`
  const backgroundColorClass = `background-${background}`
  const borderColorClass = `border-${borderColor}`
  const radiusClass = `rounded-${radius.replace('radius-', '')}`

  return (
    <div
      className={classNames(
        'base-box',
        paddingXClass,
        paddingYClass,
        backgroundColorClass,
        borderColorClass,
        radiusClass,
        bordered && 'base-box--bordered',
        shadow !== 'no-shadow' && `base-box--shadow-${shadow}`,
        className,
      )}
      style={{ borderWidth, width }}
    >
      {children}
    </div>
  )
}
