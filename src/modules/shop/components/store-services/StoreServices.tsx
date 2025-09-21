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
      title: '머리 색깔',
      variants: ['변형 A', '변형 B', '변형 C', '변형 D'],
    },
    {
      image: '/dummy/service02.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service01.jpg',
      price: 43000,
      title: '머리 색깔',
      variants: ['변형 A', '변형 B', '변형 C', '변형 D'],
    },
    {
      image: '/dummy/service02.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service03.jpg',
      price: 43000,
      title: '헤어컷',
    },
    {
      image: '/dummy/service01.jpg',
      price: 43000,
      title: '머리 색깔',
      variants: ['변형 A', '변형 B', '변형 C', '변형 D'],
    },
    {
      image: '/dummy/service02.jpg',
      price: 43000,
      title: '헤어컷',
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-80px">
      <BaseFlex vertical gap="spacing-24px">
        <BaseFlex gap="spacing-16px">
          <BaseInput size="large" placeholder="무언가를 검색하다" />
          <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
            찾다
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
