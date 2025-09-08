import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import { TidingsCard, TidingsCardProps } from '../tidings-card/TidingsCard'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'

export const StoreTidings = () => {
  const data: TidingsCardProps[] = [
    {
      title: '글래드 헤어 살롱 강남점',
      date: '2024.12.16',
      subtitle: '12월 행사 안내 🎉',
      images: ['/dummy/store01.jpg'],
      description: `예약 방법 안내 드립니다 J
1. 앱 하단 예약 클릭 2. 예약 날짜, 시간 선택 3. 쿠폰 번호 등록 : EC12345 4. 결제
자세한 상담은 채팅을 클릭해주세요.`,
    },
    {
      title: '글래드 헤어 살롱 강남점',
      date: '2024.12.16',
      subtitle: '12월 행사 안내 🎉',
      images: [
        '/dummy/store01.jpg',
        '/dummy/store02.jpg',
        '/dummy/store03.jpg',
        '/dummy/store04.jpg',
        '/dummy/store04.jpg',
      ],
      description: `예약 방법 안내 드립니다 J
1. 앱 하단 예약 클릭 2. 예약 날짜, 시간 선택 3. 쿠폰 번호 등록 : EC12345 4. 결제
자세한 상담은 채팅을 클릭해주세요.`,
    },
    {
      title: '글래드 헤어 살롱 강남점',
      date: '2024.12.16',
      subtitle: '12월 행사 안내 🎉',
      images: ['/dummy/store01.jpg'],
      description: `예약 방법 안내 드립니다 J
1. 앱 하단 예약 클릭 2. 예약 날짜, 시간 선택 3. 쿠폰 번호 등록 : EC12345 4. 결제
자세한 상담은 채팅을 클릭해주세요.`,
    },
    {
      title: '글래드 헤어 살롱 강남점',
      date: '2024.12.16',
      subtitle: '12월 행사 안내 🎉',
      images: ['/dummy/store01.jpg', '/dummy/store02.jpg', '/dummy/store03.jpg', '/dummy/store04.jpg'],
      description: `예약 방법 안내 드립니다 J
1. 앱 하단 예약 클릭 2. 예약 날짜, 시간 선택 3. 쿠폰 번호 등록 : EC12345 4. 결제
자세한 상담은 채팅을 클릭해주세요.`,
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-40px">
      {data.map((e, i) => (
        <>
          <TidingsCard key={i} {...e} />
          {i + 1 !== data.length && <BaseDivider />}
        </>
      ))}
    </BaseFlex>
  )
}
