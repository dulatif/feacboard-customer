import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseRangePicker, BaseRangePickerProps } from '@/shared/components/base-rangepicker/BaseRangePicker'
import { BaseSelect } from '@/shared/components/base-select/BaseSelect'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import styles from './ReservationList.module.scss'
import { ReservationCard, ReservationCardProps } from '../../components/reservation-card/ReservationCard'
import { useState } from 'react'
import { Dayjs } from 'dayjs'

export const ReservationList = () => {
  const data: ReservationCardProps['data'][] = [
    {
      category: 'nail',
      status: 'in-progress',
      date: '2025-10-01',
      reservedDate: '2025-10-05',
      reservationCode: 'ABC123',
      store: '강남 살롱',
      items: [
        {
          title: '이발',
          price: 500,
        },
        {
          title: '머리를 감으세요',
          price: 500,
        },
        {
          title: '머리색',
          price: 700,
        },
        {
          title: '그레이',
          price: 3000,
        },
      ],
      addons: {
        items: ['그레이'],
        total: 3000,
      },
    },
    {
      category: 'hair',
      status: 'completed',
      date: '2025-09-15',
      reservedDate: '2025-09-20',
      reservationCode: 'XYZ789',
      store: '강남 살롱',
      designer: {
        name: '강남 살롱',
        picture: '/dummy/face01.png',
      },
      rate: 4.5,
      items: [
        {
          title: '이발',
          price: 500,
        },
        {
          title: '머리를 감으세요',
          price: 500,
        },
        {
          title: '머리색',
          price: 700,
        },
        {
          title: '그레이',
          price: 3000,
        },
      ],
      addons: {
        items: ['그레이'],
        total: 3000,
      },
    },
    {
      category: 'makeup',
      status: 'completed',
      date: '2025-09-15',
      reservedDate: '2025-09-20',
      reservationCode: 'XYZ789',
      store: '강남 살롱',
      designer: {
        name: '강남 살롱',
        picture: '/dummy/face01.png',
      },
      items: [
        {
          title: '이발',
          price: 500,
        },
        {
          title: '머리를 감으세요',
          price: 500,
        },
        {
          title: '머리색',
          price: 700,
        },
        {
          title: '그레이',
          price: 3000,
        },
      ],
      addons: {
        items: ['그레이'],
        total: 3000,
      },
    },
    {
      category: 'hair',
      status: 'pending',
      date: '2025-08-10',
      reservedDate: '2025-08-15',
      store: '강남 살롱',
      designer: {
        name: '강남 살롱',
        picture: '/dummy/face01.png',
      },
      items: [
        {
          title: '이발',
          price: 500,
        },
        {
          title: '머리를 감으세요',
          price: 500,
        },
      ],
    },
    {
      category: 'nail',
      status: 'failed',
      date: '2025-08-10',
      reservedDate: '2025-08-15',
      store: '강남 살롱',
      items: [
        {
          title: '이발',
          price: 500,
        },
        {
          title: '머리를 감으세요',
          price: 500,
        },
      ],
    },
  ]

  const [selectedDate, setSelectedDate] = useState<{from: Dayjs | null;to: Dayjs | null} | undefined>()
  const handleOnChaneDateRangePicker: BaseRangePickerProps['onChange'] = (value) => {
    setSelectedDate(value)
  }
  return (
    <div className={styles['reservation-list']}>
      <BaseFlex vertical gap="spacing-48px" className={styles['reservation-list__wrapper']}>
        <BaseFlex vertical gap="spacing-24px">
          <div className={styles['reservation-list__filter']}>
            <BaseInput placeholder="찾다 ..." prefix={<SearchIcon width={20} height={20} />} />
            <BaseSelect defaultValue="모든 제품" options={[{ value: '모든 제품', label: '모든 제품' }]} />
            <BaseRangePicker 
              onChange={handleOnChaneDateRangePicker} 
              value={selectedDate}
              {...(selectedDate ? {
                title: `
                  ${selectedDate?.from ? selectedDate.from.format('MMM DD, YYYY') : ''}
                  ${selectedDate?.to ? ` - ${selectedDate.to.format('MMM DD, YYYY')}` : ''}
                ` 
              }:{})}
            />
          </div>
          <BaseFlex gap="spacing-24px" align="center" justify="space-between">
            <BaseFlex gap="spacing-24px" align="center">
              <BaseTypography as="p" size="body1" weight="semibold">
                상태
              </BaseTypography>
              <BaseFlex gap="spacing-16px">
                <BaseButton>모두</BaseButton>
                <BaseButton color="secondary-neutral">진행 중</BaseButton>
                <BaseButton color="secondary-neutral">결제 대기 중</BaseButton>
                <BaseButton color="secondary-neutral">완료</BaseButton>
                <BaseButton color="secondary-neutral">실패한</BaseButton>
              </BaseFlex>
            </BaseFlex>
            <BaseButton color="tertiary">필터 재설정</BaseButton>
          </BaseFlex>
        </BaseFlex>
        <BaseFlex vertical gap="spacing-24px">
          {data.map((e, i) => (
            <ReservationCard key={i} data={e} />
          ))}
        </BaseFlex>
      </BaseFlex>
    </div>
  )
}
