import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'

export const StoreDesigners = () => {
  const data: DesignerCardProps[] = [
    {
      picture: '/dummy/designer01.jpg',
      name: '김선정원장',
      rating: 4.8,
      availableHour: '11:25 ~ 20:00',
      availableService: 9,
      company: '낭만부티크',
      location: '강남, 서울',
      specialties: ['댄디컷', 'C컬펌', '다운펌', '가일컷'],
      services: [
        {
          image: '/dummy/service01.jpg',
          price: 43000,
          title: '머리 색깔',
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
      ],
    },
    {
      picture: '/dummy/designer02.jpg',
      name: '영국 원장',
      rating: 4.8,
      availableHour: '11:25 ~ 20:00',
      availableService: 9,
      company: '라리엔 가로수길',
      location: '강남, 서울',
      specialties: ['댄디컷', 'C컬펌', '다운펌', '가일컷'],
      services: [
        {
          image: '/dummy/service01.jpg',
          price: 43000,
          title: '머리 색깔',
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
