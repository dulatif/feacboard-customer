import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { DesignerCard, DesignerCardProps } from '../designer-card/DesignerCard'

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
        image: '/dummy/makeup01.jpg',
        price: 43000,
        title: '머리 색깔',
      },
      {
        image: '/dummy/makeup02.jpg',
        price: 43000,
        title: '헤어컷',
      },
      {
        image: '/dummy/makeup03.jpg',
        price: 43000,
        title: '헤어컷',
      },
      {
        image: '/dummy/makeup03.jpg',
        price: 43000,
        title: '헤어컷',
      },
      {
        image: '/dummy/makeup03.jpg',
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
        image: '/dummy/makeup01.jpg',
        price: 43000,
        title: '머리 색깔',
      },
      {
        image: '/dummy/makeup02.jpg',
        price: 43000,
        title: '헤어컷',
      },
      {
        image: '/dummy/makeup03.jpg',
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
        image: '/dummy/makeup01.jpg',
        price: 43000,
        title: '머리 색깔',
      },
      {
        image: '/dummy/makeup02.jpg',
        price: 43000,
        title: '헤어컷',
      },
    ],
  },
]
export const MakeupByDesigner = () => {
  return (
    <BaseFlex vertical gap="spacing-80px">
      {data.map((e, i) => (
        <DesignerCard key={i} {...e} />
      ))}
    </BaseFlex>
  )
}
