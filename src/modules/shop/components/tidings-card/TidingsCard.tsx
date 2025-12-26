import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import MessagesIcon from '@/shared/components/icons/MessagesIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import React from 'react'
import DOMPurify from 'dompurify'
import { Carousel } from 'antd'
import Image from 'next/image'

export interface TidingsCardProps {
  title: string
  date: string
  images?: string[]
  subtitle: string
  description: string
}

export const TidingsCard: React.FC<TidingsCardProps> = ({ date, description, subtitle, title, images }) => {
  const { isMobile } = useResponsive()

  // Sanitize HTML content
  const sanitizedDescription = DOMPurify.sanitize(description)

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

      {images && images.length > 0 && (
        <div style={{ width: '100%', overflow: 'hidden', borderRadius: '8px' }}>
          <Carousel draggable autoplay>
            {images.map((image, index) => (
              <div key={index}>
                <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
                  <Image
                    src={image}
                    alt={`${title} - ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      <BaseFlex vertical gap="spacing-4px">
        <BaseTypography as="p" size="body1" color="neutral-500">
          {subtitle}
        </BaseTypography>
        <div
          style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          className="rich-text-content"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </BaseFlex>
    </BaseFlex>
  )
}
