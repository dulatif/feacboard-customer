import React, { useState } from 'react'
import styles from './ColorAnalyst.module.scss'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseSelect } from '@/shared/components/base-select/BaseSelect'
import { BaseRangePicker, BaseRangePickerProps } from '@/shared/components/base-rangepicker/BaseRangePicker'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import SearchIcon from '@/shared/components/icons/SearchIcon'
import { ColorAnalystCard, ColorAnalystCardProps } from '../../components/color-analyst-card/ColorAnalystCard'
import { Dayjs } from 'dayjs'

export const ColorAnalyst = () => {
  const data: ColorAnalystCardProps['data'][] = [
    {
      isMainPersonalColor: true,
      category: 'ai-diagnosis',
      date: '17 Agu 2025',
      status: 'completed',
      picture: '/dummy/face02.png',
      result: 'light-summer',
      totalPrice: 50000,
      rate: 4.5,
      isPaid: true,
    },
    {
      isMainPersonalColor: false,
      category: 'manual-diagnosis',
      date: '17 Agu 2025',
      status: 'completed',
      picture: '/dummy/face01.png',
      result: 'gracie-fall',
      totalPrice: 'free',
      isPaid: true,
    },
    {
      isMainPersonalColor: false,
      category: 'ai-diagnosis',
      date: '17 Agu 2025',
      status: 'completed',
      picture: null,
      result: null,
      totalPrice: 500,
      isPaid: true,
    },
    {
      isMainPersonalColor: false,
      category: 'ai-diagnosis',
      date: '17 Agu 2025',
      status: 'in-progress',
      picture: null,
      result: null,
      totalPrice: 500,
      isPaid: true,
    },
    {
      isMainPersonalColor: false,
      category: 'ai-diagnosis',
      date: '17 Agu 2025',
      status: 'failed',
      picture: null,
      result: null,
      totalPrice: 500,
      isPaid: false,
    },
  ]

  const [selectedDate, setSelectedDate] = useState<{ from: Dayjs | null; to: Dayjs | null } | undefined>()
  const handleOnChaneDateRangePicker: BaseRangePickerProps['onChange'] = (value) => {
    setSelectedDate(value)
  }
  return (
    <div className={styles['color-analyst']}>
      <BaseFlex vertical gap="spacing-48px" className={styles['color-analyst__wrapper']}>
        <BaseFlex vertical gap="spacing-24px">
          <div className={styles['color-analyst__filter']}>
            <BaseInput placeholder="검색 ..." prefix={<SearchIcon width={20} height={20} />} />
            <BaseSelect defaultValue="모든 제품" options={[{ value: '모든 제품', label: '모든 제품' }]} />
            <BaseRangePicker
              onChange={handleOnChaneDateRangePicker}
              value={selectedDate}
              {...(selectedDate
                ? {
                    title: `
                  ${selectedDate?.from ? selectedDate.from.format('MMM DD, YYYY') : ''}
                  ${selectedDate?.to ? ` - ${selectedDate.to.format('MMM DD, YYYY')}` : ''}
                `,
                  }
                : {})}
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
            <ColorAnalystCard key={i} data={e} />
          ))}
        </BaseFlex>
      </BaseFlex>
    </div>
  )
}
