import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Flex, Space } from 'antd'
import React from 'react'
import Image from 'next/image'
import { BaseAlert } from '@/shared/components/base-alert/BaseAlert'
import CardReview from './CardReview'

interface StampItemProps {
  src: string
  alt: string
  label: string
}
const stampsData: StampItemProps[] = [
  {
    src: '/icons/stamp.svg',
    alt: 'stamp',
    label: 'Day 1',
  },
  {
    src: '/icons/stamp.svg',
    alt: 'stamp',
    label: 'Day 2',
  },
  {
    src: '/icons/stamp.svg',
    alt: 'stamp',
    label: 'Day 3',
  },
  {
    src: '/icons/stamp.svg',
    alt: 'stamp',
    label: 'Day 4',
  },
  {
    src: '/icons/stamp.svg',
    alt: 'stamp',
    label: 'Day 5',
  },
  {
    src: '/icons/stamp-gray.svg',
    alt: 'stamp',
    label: 'Day 6',
  },
  {
    src: '/icons/stamp-gray-100.svg',
    alt: 'stamp',
    label: 'Day 7',
  },
]

const StampItem: React.FC<StampItemProps> = ({ src, alt, label }) => (
  <Space align="center" direction="vertical">
    <Image src={src} alt={alt} width={56} height={56} />
    <BaseTypography as="p" size="overline" variant="aleo">
      {label}
    </BaseTypography>
  </Space>
)

const TabOverview = () => {
  return (
    <>
      <BaseTypography
        as="p"
        size="header5"
        weight="semibold"
        variant="aleo"
        style={{ marginBottom: '24px', marginTop: '36px', width: '100%' }}
      >
        포인트는 어디서 얻을 수 있나요?
      </BaseTypography>
      {/* --- streak --- */}
      <BaseTypography as="p" size="body1" weight="semibold" variant="aleo" style={{ marginBottom: '24px' }}>
        일일 체크인 스탬프
      </BaseTypography>
      <BaseTypography as="p" size="body2" weight="semibold" variant="aleo" style={{ marginBottom: '24px' }}>
        Streak 1
      </BaseTypography>
      <Flex justify="space-between" style={{ marginBottom: '16px' }}>
        {stampsData.map((item) => (
          <StampItem key={item.label} {...item} />
        ))}
      </Flex>
      <BaseAlert message="1일 체크인 시 스탬프 1개씩 적립, 1주일 전까지 매일 체크인 성공 시 포인트 적립" />
      {/* === */}

      {/* --- review --- */}
      <div style={{ height: '300px' }}>
        <BaseTypography
          as="p"
          size="body1"
          weight="semibold"
          variant="aleo"
          style={{ marginBottom: '24px', marginTop: '24px' }}
        >
          거래에 대한 리뷰를 작성하세요
        </BaseTypography>
        <div style={{ width: '100%', overflowX: 'auto', position: 'absolute', paddingBottom: '24px' }}>
          <Flex gap={24} style={{ width: 'max-content' }}>
            <CardReview />
            <CardReview />
          </Flex>
        </div>
      </div>
    </>
  )
}

export default TabOverview
