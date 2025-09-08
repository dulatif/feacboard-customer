import React from 'react'
import './BaseImages.scss'
import { BaseImage } from '../base-image/BaseImage'

export interface BaseImagesProps {
  images: string[]
}
export const BaseImages: React.FC<BaseImagesProps> = ({ images }) => {
  return (
    <div className={`base-images ${images.length === 1 ? 'base-images--one-image' : ''}`}>
      {images.length === 1 ? (
        <div className={'base-images__primary'}>
          <BaseImage src={images[0]} height={490} alt="" />
        </div>
      ) : (
        <>
          <div className={'base-images__primary'}>
            <BaseImage src={images[0]} height={427} alt="" />
          </div>
          <div className={'base-images__others'}>
            {images.slice(1, 5).map((image, i) => (
              <BaseImage key={i} src={image} height={204} alt="" />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
