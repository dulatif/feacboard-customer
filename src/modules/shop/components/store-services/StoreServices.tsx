import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { ServiceCard } from '../service-card/ServiceCard'
import styles from './StoreServices.module.scss'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'

export const StoreServices = () => {
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
  ]
  return (
    <BaseFlex vertical gap="spacing-80px">
      <BaseFlex vertical gap="spacing-24px">
        <BaseFlex gap="spacing-16px">
          <BaseInput size="large" placeholder="디자이너 이름으로 검색" />
          <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
            검색
          </BaseButton>
        </BaseFlex>
        <BaseFlex gap="spacing-16px">
          <BaseButton color="secondary-neutral">헤어</BaseButton>
          <BaseButton color="secondary-neutral">할인</BaseButton>
          <BaseButton color="secondary-neutral">신상품</BaseButton>
        </BaseFlex>
      </BaseFlex>
      <BaseFlex vertical gap="spacing-40px">
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
