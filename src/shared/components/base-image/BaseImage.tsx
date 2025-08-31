import Image, { ImageProps } from 'next/image'
import React from 'react'
import './BaseImage.scss'
import { Radius } from '@/shared/types/radius'

export interface BaseImageProps extends Omit<ImageProps, 'src'> {
  src: string | null
  radius?: Radius
}
export const BaseImage: React.FC<BaseImageProps> = ({ src, width, height, radius = 'radius-16px', ...props }) => {
  const radiusClass = `rounded-${radius.replace('radius-', '')}`
  return (
    <div className="base-image">
      {src ? (
        <div className={`base-image__img__wrapper ${radiusClass}`} style={{ height, width }}>
          <Image src={src} fill {...props} />
        </div>
      ) : (
        <div className={`base-image__empty ${radiusClass}`} style={{ height, width }}></div>
      )}
    </div>
  )
}
