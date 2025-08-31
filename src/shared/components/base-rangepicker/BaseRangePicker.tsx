import type { AlignType } from '@rc-component/trigger'
import { DatePicker, TimeRangePickerProps } from 'antd'
import type { Dayjs } from 'dayjs'
import React, { useEffect, useState } from 'react'
import { BaseButton } from '../base-button/BaseButton'
import { BaseFlex } from '../base-flex/BaseFlex'
import Calendar02Icon from '../icons/Calendar02Icon'
import './BaseRangePicker.scss'
import { presetOptions } from './BaseRangePicker.util'

const { RangePicker } = DatePicker

export interface BaseRangePickerProps {
  className?: string
  title?: string
  popupAlign?: AlignType
  onChange: (val: {from: Dayjs | null;to: Dayjs | null}) => void
  value?: {from: Dayjs | null;to: Dayjs | null}
}

export const BaseRangePicker: React.FC<BaseRangePickerProps> = ({
  title = '날짜로 필터링',
  className,
  popupAlign = {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: { adjustX: false, adjustY: false },
  },
  onChange,
  value,
  ...props
}) => {
  const [isRangePickerOpen, setIsRangePickerOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = useState<{from: Dayjs | null;to: Dayjs | null} | undefined>(value)
  useEffect(() => {
    if(isRangePickerOpen && value) {
      setSelectedDate(value)
      checkForMatchingPreset([value.from, value.to])
    }
  }, [value, isRangePickerOpen])

  const handleOpenRangePicker = () => {
    setIsRangePickerOpen(true)
  }

  const [activePreset, setActivePreset] = useState<string | null>(null)
  const handleClickPreset = (key: string) => {
    setActivePreset(key)
  }
  const isPresetActive = (key: string): string => {
    if (activePreset === key) return 'base-rangepicker__presets--active'
    return ''
  }
  const renderRangePresets = (): TimeRangePickerProps['presets'] => {
    const presetOptionsList: TimeRangePickerProps['presets'] = presetOptions.map(({ key, value }) => ({
      label: (
        <button className={isPresetActive(key)} onClick={() => handleClickPreset(key)}>
          {key}
        </button>
      ),
      value: value as [Dayjs, Dayjs],
    }))

    return presetOptionsList
  }
  const rangePresets: TimeRangePickerProps['presets'] = renderRangePresets()
  const checkForMatchingPreset = (dates: null | (Dayjs | null)[]) => {
    if (dates && dates[0] && dates[1]) {
      const matchingPreset = presetOptions.find(
        (preset) => preset.value[0].isSame(dates[0], 'day') && preset.value[1].isSame(dates[1], 'day'),
      )
      if (matchingPreset) {
        setActivePreset(matchingPreset.key)
      } else {
        setActivePreset(null)
      }
    } else {
      setActivePreset(null)
    }
  }

  const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    if (dates) {
      setSelectedDate({
        from: dates[0],
        to: dates[1]
      })
    } else {
      setSelectedDate(undefined)
    }
  }
  

  const handleCancel = () => {
    setIsRangePickerOpen(false)
    setSelectedDate(value)
  }
  const handleApply = () => {
    if (selectedDate) {
      onChange(selectedDate)
      setIsRangePickerOpen(false)
    }
  }
  return (
    <div className={`base-range-picker`}>
      <BaseButton
        icon={<Calendar02Icon width={20} height={20} />}
        color="secondary-neutral"
        onClick={handleOpenRangePicker}
        size="lg"
      >
        {
          value && value?.from && value?.to && value.from.format('MMM DD, YYYY') === value.to.format('MMM DD, YYYY') ? (
            value.from.format('MMM DD, YYYY')
          ):title
        }
      </BaseButton>
      {isRangePickerOpen && (
        <RangePicker
          placement="bottomRight"
          open={isRangePickerOpen}
          presets={rangePresets}
          onChange={onRangeChange}
          popupAlign={popupAlign}
          value={selectedDate ? [selectedDate.from, selectedDate.to] : undefined}
          renderExtraFooter={
            () => (
              <BaseFlex gap='spacing-12px' justify='space-between'>
                <BaseFlex gap='spacing-12px'>
                  <div className='base-range-picker__input-result'>
                    {selectedDate?.from ? selectedDate.from.format('MMM DD, YYYY') : ''}
                  </div>
                  <span>-</span>
                  <div className='base-range-picker__input-result'>
                    {selectedDate?.to ? selectedDate.to.format('MMM DD, YYYY') : ''}
                  </div>
                </BaseFlex>
                <BaseFlex gap='spacing-12px'>
                  <BaseButton color='secondary-neutral' onClick={handleCancel}>
                    Cancel
                  </BaseButton>
                  <BaseButton onClick={handleApply}>
                    Apply
                  </BaseButton>
                </BaseFlex>
              </BaseFlex>
            )
          }
        />
      )}
      {isRangePickerOpen && <div onClick={handleCancel} className="base-range-picker__overlay"></div>}
    </div>
  )
}
