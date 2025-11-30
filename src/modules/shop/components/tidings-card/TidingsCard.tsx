import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseImages } from '@/shared/components/base-images/BaseImages'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import MessagesIcon from '@/shared/components/icons/MessagesIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import React from 'react'

export interface TidingsCardProps {
  title: string
  date: string
  images?: string[]
  subtitle: string
  description: string
}
export const TidingsCard: React.FC<TidingsCardProps> = ({ date, description, subtitle, title, images }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  return (
    <BaseFlex vertical gap="spacing-24px">
      <BaseFlex vertical={isMobile} gap="spacing-8px" justify="space-between">
        <BaseFlex vertical gap="spacing-8px">
          <BaseTypography as="h6" size="header6" weight="semibold">
            {title}
          </BaseTypography>
          <BaseTypography as="p" size="body1">
            {date}
          </BaseTypography>
        </BaseFlex>
        <div>
          <BaseButton
            size={isMobile ? 'md' : 'xl'}
            color="tertiary"
            outlined
            icon={<MessagesIcon width={20} height={20} />}
          >
            채팅 문의 남기기
          </BaseButton>
        </div>
      </BaseFlex>
      {images && <BaseImages images={images} />}
      <BaseFlex vertical gap="spacing-4px">
        <BaseTypography as="p" size="body1" color="neutral-500">
          {subtitle}
        </BaseTypography>
        <BaseTypography
          as="p"
          size="body1"
          color="neutral-500"
          style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
        >
          {description}
        </BaseTypography>
      </BaseFlex>
    </BaseFlex>
  )
}
