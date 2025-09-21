import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCalendar } from '@/shared/components/base-calendar/BaseCalendar'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { AppContextType } from '@/shared/providers/AppProvider'
import { Col, Modal, ModalProps, Row } from 'antd'
import { Dayjs } from 'dayjs'
import { CaretRight } from 'phosphor-react'
import React, { useState } from 'react'
import './AppointmentModal.scss'

const arrivalTimeOptions = [
  { time: '09:30', available: true },
  { time: '10:00', available: false },
  { time: '10:30', available: false },
  { time: '11:00', available: true },
  { time: '11:30', available: true },
  { time: '12:00', available: false },
  { time: '12:30', available: false },
  { time: '13:00', available: false },
  { time: '13:30', available: true },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: true },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
  { time: '17:00', available: true },
  { time: '17:30', available: true },
  { time: '18:00', available: true },
  { time: '18:30', available: true },
]

function toMinutes(t: string) {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

const morningStart = 7 * 60
const morningEnd = 12 * 60 // 12:00
const afternoonStart = 12 * 60 + 30 // 12:30
const afternoonEnd = 17 * 60 // 17:00
const eveningStart = 17 * 60 + 30 // 17:30
const eveningEnd = 24 * 60 // 24:00

const grouped: {
  morning: { time: string; available: boolean }[]
  afternoon: { time: string; available: boolean }[]
  evening: { time: string; available: boolean }[]
} = {
  morning: [],
  afternoon: [],
  evening: [],
}

arrivalTimeOptions.forEach((item) => {
  const minutes = toMinutes(item.time)
  if (minutes >= morningStart && minutes <= morningEnd) {
    grouped.morning.push(item)
  } else if (minutes >= afternoonStart && minutes <= afternoonEnd) {
    grouped.afternoon.push(item)
  } else if (minutes >= eveningStart && minutes <= eveningEnd) {
    grouped.evening.push(item)
  }
})

export interface AppointmentModalProps extends ModalProps {
  onSubmit: (value: AppContextType['appointment']) => void
}
export const AppointmentModal: React.FC<AppointmentModalProps> = ({ onSubmit, onCancel, ...props }) => {
  const [selectedDate, setSelectedDate] = useState<string>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const handleCancel = () => {
    setSelectedDate(undefined)
    setSelectedTime(undefined)
    onCancel && onCancel(null as any)
  }
  const onSelectDate = (date: Dayjs) => {
    setSelectedDate(date.format('YYYY-mm-dd'))
  }
  const onSelectTime = (value: string) => {
    setSelectedTime(value)
  }

  return (
    <Modal footer={null} className="shop__appointment-modal" onCancel={handleCancel} centered {...props}>
      <BaseFlex vertical gap="spacing-48px" align="center">
        <BaseFlex gap="spacing-48px">
          {/* Date */}
          <BaseFlex vertical gap="spacing-16px" style={{ width: 328 }}>
            <BaseTypography as="p" size="body1" weight="semibold">
              날짜 선택
            </BaseTypography>
            <BaseFlex vertical gap="spacing-24px">
              <BaseCalendar fullscreen={false} onSelect={onSelectDate} />
              <BaseFlex gap="spacing-16px" align="center">
                <div style={{ width: 24, height: 24, background: '#49C3D0', borderRadius: '50%' }} />
                <BaseTypography as="p" size="body1" weight="regular">
                  가능한 날짜
                </BaseTypography>
              </BaseFlex>
            </BaseFlex>
          </BaseFlex>

          {/* Time */}
          {selectedDate && (
            <BaseFlex vertical gap="spacing-16px" style={{ width: 367 }}>
              <BaseTypography as="p" size="body1" weight="semibold">
                도착 시간을 선택하세요
              </BaseTypography>
              <BaseFlex vertical gap="spacing-24px">
                {grouped.morning.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      오전
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {grouped.morning.map((e, i) => (
                        <Col key={i} span={8}>
                          <div
                            onClick={() => (e.available ? onSelectTime(e.time) : null)}
                            className={`shop__appointment-modal__time-card ${e.available ? '--active' : '--inactive'} ${selectedTime === e.time && '--selected'}`}
                          >
                            <BaseTypography as="p" size="body2" weight="semibold" color={'inherit'}>
                              {e.time}
                            </BaseTypography>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </BaseFlex>
                )}
                {grouped.afternoon.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      오후
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {grouped.afternoon.map((e, i) => (
                        <Col key={i} span={8}>
                          <div
                            onClick={() => (e.available ? onSelectTime(e.time) : null)}
                            className={`shop__appointment-modal__time-card ${e.available ? '--active' : '--inactive'} ${selectedTime === e.time && '--selected'}`}
                          >
                            <BaseTypography as="p" size="body2" weight="semibold" color={'inherit'}>
                              {e.time}
                            </BaseTypography>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </BaseFlex>
                )}
                {grouped.evening.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      저녁
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {grouped.evening.map((e, i) => (
                        <Col key={i} span={8}>
                          <div
                            onClick={() => (e.available ? onSelectTime(e.time) : null)}
                            className={`shop__appointment-modal__time-card ${e.available ? '--active' : '--inactive'} ${selectedTime === e.time && '--selected'}`}
                          >
                            <BaseTypography as="p" size="body2" weight="semibold" color={'inherit'}>
                              {e.time}
                            </BaseTypography>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </BaseFlex>
                )}
              </BaseFlex>
            </BaseFlex>
          )}
        </BaseFlex>
        <BaseButton
          icon={<CaretRight />}
          disabled={!selectedDate || !selectedTime}
          size="xl"
          iconPosition="end"
          style={{ width: 380 }}
          onClick={() => onSubmit({ date: selectedDate as string, time: selectedTime as string })}
        >
          다음
        </BaseButton>
      </BaseFlex>
    </Modal>
  )
}
