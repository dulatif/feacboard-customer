import React, { ReactNode } from 'react'
import { BaseBox } from '../base-box/BaseBox'
import Image from 'next/image'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography } from '../base-typography/BaseTypography'
import './BaseCard.scss'

export interface BaseCardProps {
  image: string
  title: string
  subtitle?: ReactNode | string
  footer?: ReactNode
}

export const BaseCard = ({ image, title, footer, subtitle }: BaseCardProps) => {
  return (
    <BaseBox
      radius="radius-8px"
      padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
      borderWidth={0}
      shadow="md"
      className={'base-card'}
    >
      <div className={'base-card__image__wrapper'}>
        <Image src={image} fill alt="" />
      </div>
      <BaseFlex vertical gap="spacing-16px" padding={{ x: 'spacing-16px', y: 'spacing-16px' }}>
        <BaseFlex vertical gap="spacing-8px">
          <div>
            <BaseTypography as="p" color="neutral-900" size="subtitle1" weight="semibold">
              {title}
            </BaseTypography>
          </div>
          {typeof subtitle === 'string' ? (
            <BaseTypography as="p" color="neutral-500" size="body1">
              {subtitle}
            </BaseTypography>
          ) : (
            subtitle
          )}
        </BaseFlex>
        <BaseFlex justify="flex-end">{footer}</BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
