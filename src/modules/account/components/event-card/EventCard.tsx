import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CalendarIcon from '@/shared/components/icons/CalendarIcon'
import React from 'react'

export interface EventCardProps {
  banner: string
  title: string
  date: string
}
export const EventCard: React.FC<EventCardProps> = ({ banner, date, title }) => {
  return (
    <BaseBox
      padding={{ x: 'spacing-0px', y: 'spacing-0px' }}
      radius="radius-16px"
      shadow="md"
      borderColor="neutral-300"
    >
      <BaseImage src={banner} alt="" height={381} />
      <BaseFlex vertical gap="spacing-8px" padding={{ x: 'spacing-16px', y: 'spacing-16px' }}>
        <BaseTypography as="h6" size="subtitle1" weight="semibold" color="neutral-900">
          {title}
        </BaseTypography>
        <BaseFlex gap="spacing-8px" align="center">
          <CalendarIcon />
          <BaseTypography as="p" size="body1" color="neutral-500">
            {date}
          </BaseTypography>
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
