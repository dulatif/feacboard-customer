import React from 'react'
import { Flex } from 'antd'
import type { FlexProps } from 'antd'
import { Spacing } from '@/shared/types/spacing'

export interface BaseFlexProps extends FlexProps {
  gap?: Spacing
  padding?: Spacing | { x?: Spacing; y?: Spacing }
  children: React.ReactNode
}

export const BaseFlex: React.FC<BaseFlexProps> = ({
  gap = 'spacing-0px',
  padding = 'spacing-0px',
  style,
  children,
  ...props
}) => {
  let paddingStyle: React.CSSProperties = {}

  if (typeof padding === 'string') {
    paddingStyle = { padding: padding.replace('spacing-', '') }
  } else {
    paddingStyle = {
      paddingTop: padding.y ? padding.y.replace('spacing-', '') : '0px',
      paddingBottom: padding.y ? padding.y.replace('spacing-', '') : '0px',
      paddingLeft: padding.x ? padding.x.replace('spacing-', '') : '0px',
      paddingRight: padding.x ? padding.x.replace('spacing-', '') : '0px',
    }
  }

  return (
    <Flex gap={gap.replace('spacing-', '')} style={{ ...paddingStyle, ...style }} {...props}>
      {children}
    </Flex>
  )
}
