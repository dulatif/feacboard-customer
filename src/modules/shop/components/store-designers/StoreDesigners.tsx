import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'

export const StoreDesigners = () => {
  const data: DesignerCardProps[] = [
    {
      picture: '/dummy/face03.png',
      name: '디자이너 케이',
      rating: 4.8,
      availableHour: '11:25 ~ 20:00',
      availableService: 9,
      company: '헤어 및 뷰티 살롱',
      location: '강남, 서울',
      specialties: ['댄디컷', 'C컬펌', '다운펌', '가일컷'],
      services: [
        {
          image: '/dummy/service01.jpg',
          price: 43000,
          title: '머리 색깔',
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
      ],
    },
    {
      picture: '/dummy/face03.png',
      name: '디자이너 케이',
      rating: 4.8,
      availableHour: '11:25 ~ 20:00',
      availableService: 9,
      company: '헤어 및 뷰티 살롱',
      location: '강남, 서울',
      specialties: ['댄디컷', 'C컬펌', '다운펌', '가일컷'],
      services: [
        {
          image: '/dummy/service01.jpg',
          price: 43000,
          title: '머리 색깔',
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
      ],
    },
    {
      picture: '/dummy/face03.png',
      name: '디자이너 케이',
      rating: 4.8,
      availableHour: '11:25 ~ 20:00',
      availableService: 9,
      company: '헤어 및 뷰티 살롱',
      location: '강남, 서울',
      specialties: ['댄디컷', 'C컬펌', '다운펌', '가일컷'],
      services: [
        {
          image: '/dummy/service01.jpg',
          price: 43000,
          title: '머리 색깔',
        },
        {
          image: '/dummy/service02.jpg',
          price: 43000,
          title: '헤어컷',
        },
      ],
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-80px">
      <BaseFlex gap="spacing-16px">
        <BaseInput size="large" placeholder="무언가를 검색하다" />
        <BaseButton icon={<MagnifyingGlass size={24} />} size="xl">
          찾다
        </BaseButton>
      </BaseFlex>
      {data.map((e, i) => (
        <DesignerCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
