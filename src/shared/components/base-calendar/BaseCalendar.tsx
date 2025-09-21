import { Calendar, CalendarProps } from 'antd'
import { Dayjs } from 'dayjs'
import React from 'react'
import './BaseCalendar.scss'
import { CaretLeft, CaretRight } from 'phosphor-react'

const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
export interface BaseCalendarProps extends CalendarProps<Dayjs> {}
export const BaseCalendar: React.FC<BaseCalendarProps> = ({ value, ...props }) => {
  return (
    <Calendar
      className="base-calendar"
      mode="month"
      value={value}
      headerRender={({ value, type, onChange, onTypeChange }) => {
        const year = value?.year()
        const monthIndex = value?.month()
        const prevMonth = () => {
          const now = value?.clone().month(monthIndex - 1)
          onChange(now)
        }
        const nextMonth = () => {
          const now = value.clone().month(monthIndex + 1)
          onChange(now)
        }
        return (
          <div className="base-calendar__header">
            <button onClick={prevMonth}>
              <CaretLeft />
            </button>
            {year}
            {`년 ${months[monthIndex]}`}
            <button onClick={nextMonth}>
              <CaretRight />
            </button>
          </div>
        )
      }}
      {...props}
    />
  )
}
