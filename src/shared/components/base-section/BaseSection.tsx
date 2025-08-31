import React, { ReactNode } from 'react'
import { BaseTypography, BaseTypographyProps } from '../base-typography/BaseTypography'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseBox, BaseBoxProps } from '../base-box/BaseBox'
import './BaseSection.scss'

export interface BaseSectionProps extends BaseBoxProps {
  header: {
    illust?: ReactNode
    title: String
    titleProps?: BaseTypographyProps
    action?: ReactNode
  }
  headerExtra?: ReactNode
  children: ReactNode
}
export const BaseSection = ({
  header,
  headerExtra,
  children,
  padding = { x: 'spacing-0px', y: 'spacing-0px' },
  borderWidth = 0,
  radius = 'radius-0px',
  className,
  ...baseBoxProps
}: BaseSectionProps) => {
  return (
    <BaseBox
      padding={padding}
      borderWidth={borderWidth}
      radius={radius}
      {...baseBoxProps}
      className={`base-section__box ${className}`}
    >
      <BaseFlex vertical gap="spacing-24px">
        <BaseFlex gap="spacing-20px" justify="space-between">
          <div>
            <BaseFlex gap="spacing-16px" justify="space-between" align="center">
              {header.illust && <div>{header.illust}</div>}
              <BaseTypography as="h6" size="header6" weight="semibold" {...header.titleProps}>
                {header.title}
              </BaseTypography>
            </BaseFlex>
          </div>
          <div>{header.action}</div>
        </BaseFlex>
        {headerExtra && <div>{headerExtra}</div>}
        {children}
      </BaseFlex>
    </BaseBox>
  )
}
