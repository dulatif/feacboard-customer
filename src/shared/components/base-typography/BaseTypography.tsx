import React, { JSX } from 'react'
import './BaseTypography.scss'
import { Color } from '@/shared/types/color'

export type FontSize =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'tiny'

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type Variant = 'aleo' | 'urbanist'

export interface BaseTypographyProps {
  children: React.ReactNode
  as: keyof JSX.IntrinsicElements
  variant?: Variant
  size: FontSize
  weight?: FontWeight
  color?: Color | 'inherit'
  lineClamp?: number
  className?: string
  style?: React.CSSProperties
  textTransform?: 'none' | 'uppercase' | 'capitalize' | 'lowercase'
}

export const BaseTypography: React.FC<BaseTypographyProps> = ({
  children,
  variant = 'urbanist',
  size,
  weight = 'regular',
  color = 'neutral-900',
  lineClamp,
  className,
  style,
  as: ElementType,
  textTransform = 'none',
  ...props
}) => {
  const fontFamilyClass = `base-typography__${variant}`
  const sizeClass = `base-typography__${size}`
  const weightClass = `base-typography__${weight}`
  const colorClass = `text-${color}`
  const textTransformClass = `text-transform-${textTransform}`

  const lineClampStyle: React.CSSProperties = lineClamp
    ? {
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }
    : {}

  return (
    <ElementType
      className={['base-typography', fontFamilyClass, sizeClass, weightClass, colorClass, textTransformClass, className]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...lineClampStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </ElementType>
  )
}
