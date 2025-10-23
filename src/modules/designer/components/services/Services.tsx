import React from 'react'
import styles from './Service.module.scss'
import { ServiceCard } from '@/modules/shop/components/service-card/ServiceCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'

export const Services = () => {
  const services = [
    {
      image: '/dummy/service01.jpg',
      price: 43000,
      title: '염색',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service02.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service01.jpg',
      price: 43000,
      title: '염색',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service02.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
      variants: [
        {
          title: '변형 1',
          options: ['변형 1', '변형 2', '변형 3', '변형 4'],
        },
        {
          title: '변형 2',
          options: ['변형 A', '변형 B', '변형 C', '변형 D'],
        },
      ],
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-48px">
      <BaseFlex gap="spacing-16px">
        <BaseButton>헤어</BaseButton>
        <BaseButton color="secondary-neutral">헤어 커트</BaseButton>
        <BaseButton color="secondary-neutral">헤어 트리트먼트</BaseButton>
        <BaseButton color="secondary-neutral">헤어 염색</BaseButton>
        <BaseButton color="secondary-neutral">헤어 펌</BaseButton>
      </BaseFlex>
      <BaseFlex vertical gap="spacing-24px">
        <div className={styles['service']}>
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
        <BasePagination defaultCurrent={1} pageSize={2} total={50} />
      </BaseFlex>
    </BaseFlex>
  )
}
