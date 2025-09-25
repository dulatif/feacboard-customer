import Image, { ImageProps } from 'next/image'
import React from 'react'
import './BaseImage.scss'
import { Radius } from '@/shared/types/radius'
import { BaseTypography } from '../base-typography/BaseTypography'

export interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string | null
  radius?: Radius
  className?: string
}
export const BaseImage: React.FC<BaseImageProps> = ({
  src,
  width,
  height,
  radius = 'radius-16px',
  className = '',
  alt,
  ...props
}) => {
  const radiusClass = `rounded-${radius.replace('radius-', '')}`
  return (
    <div className="base-image">
      {src ? (
        <div className={`base-image__img__wrapper ${radiusClass} ${className}`} style={{ height, width }}>
          <Image src={src} fill alt={alt ?? ''} {...props} />
        </div>
      ) : (
        <div className={`base-image__empty ${radiusClass} ${className}`} style={{ height, width }}>
          <Image src={'/icons/empty-image.svg'} width={20} height={20} alt="" />
          <BaseTypography as="p" size="body1" color="neutral-700">
            이미지 없음
          </BaseTypography>
        </div>
      )}
    </div>
  )
}
