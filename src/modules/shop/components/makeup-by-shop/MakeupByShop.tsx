import React from 'react'
import { StoreCard, StoreCardProps } from '../store-card/StoreCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'

const data: StoreCardProps[] = [
  {
    availableDesigners: 5,
    close: '22:30',
    open: '10:30',
    images: [
      '/dummy/store01.jpg',
      '/dummy/store02.jpg',
      '/dummy/store03.jpg',
      '/dummy/store04.jpg',
      '/dummy/store04.jpg',
    ],
    rating: 4.8,
    reviewersCount: 129,
    storeName: '글래드 헤어 살롱 강남점',
  },
  {
    availableDesigners: 5,
    close: '22:30',
    open: '10:30',
    images: [
      '/dummy/store01.jpg',
      '/dummy/store02.jpg',
      '/dummy/store03.jpg',
      '/dummy/store04.jpg',
      '/dummy/store04.jpg',
    ],
    rating: 4.8,
    reviewersCount: 129,
    storeName: '글래드 헤어 살롱 강남점',
  },
  {
    availableDesigners: 5,
    close: '22:30',
    open: '10:30',
    images: [
      '/dummy/store01.jpg',
      '/dummy/store02.jpg',
      '/dummy/store03.jpg',
      '/dummy/store04.jpg',
      '/dummy/store04.jpg',
    ],
    rating: 4.8,
    reviewersCount: 129,
    storeName: '글래드 헤어 살롱 강남점',
  },
  {
    availableDesigners: 5,
    close: '22:30',
    open: '10:30',
    images: [
      '/dummy/store01.jpg',
      '/dummy/store02.jpg',
      '/dummy/store03.jpg',
      '/dummy/store04.jpg',
      '/dummy/store04.jpg',
    ],
    rating: 4.8,
    reviewersCount: 129,
    storeName: '글래드 헤어 살롱 강남점',
  },
]
export const MakeupByShop = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {data.map((e, i) => (
        <StoreCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
