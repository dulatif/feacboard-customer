import React from 'react'
import styles from './StoreReels.module.scss'
import { BaseImage } from '@/shared/components/base-image/BaseImage'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import PlayCircleIcon from '@/shared/components/icons/PlayCircleIcon'

export interface StoreReelsProps {
  thumbnails: string[]
}
export const StoreReels: React.FC<StoreReelsProps> = ({ thumbnails }) => {
  return (
    <div className={styles['store-reels']}>
      <BaseFlex gap="spacing-24px">
        {thumbnails.map((e, i) => (
          <div key={i} className={styles['store-reels__item']}>
            <div className={styles['store-reels__item__play']}>
              <PlayCircleIcon />
            </div>
            <BaseImage height={186} width={134} src={e} radius="radius-16px" alt="" />
          </div>
        ))}
      </BaseFlex>
    </div>
  )
}
