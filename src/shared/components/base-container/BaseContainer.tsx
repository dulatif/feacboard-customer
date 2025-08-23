import React from 'react'
import classNames from 'classnames'
import './BaseContainer.scss'
import { Spacing } from '@/shared/types/spacing'

export type BaseContainerVariant = 576 | 768 | 992 | 1200 | 1440 | 'fullwidth'

export interface BaseContainerProps {
  children: React.ReactNode
  variant?: BaseContainerVariant
  padding?: {
    x?: Spacing
    y?: Spacing
  }
  className?: string
}

const BaseContainer: React.FC<BaseContainerProps> = ({ children, variant = 'fullwidth', padding, className }) => {
  const defaultPaddingX: Record<BaseContainerVariant, Spacing> = {
    576: 'spacing-16px',
    768: 'spacing-24px',
    992: 'spacing-32px',
    1200: 'spacing-48px',
    1440: 'spacing-120px',
    fullwidth: 'spacing-120px',
  }

  const paddingX = padding?.x ?? defaultPaddingX[variant]
  const paddingY = padding?.y ?? '0px'

  const containerClass = classNames(
    `base-container`,
    `variant-${variant}`,
    `px-${paddingX.replace('spacing-', '')}`,
    `py-${paddingY.replace('spacing-', '')}`,
    className,
  )

  return <div className={containerClass}>{children}</div>
}

export default BaseContainer
