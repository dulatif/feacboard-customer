import { GetShopCalendarHourResponse } from '@/api/shop'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseCalendar } from '@/shared/components/base-calendar/BaseCalendar'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { Col, Modal, ModalProps, Row } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { CaretRight } from 'phosphor-react'
import React, { useMemo, useState } from 'react'
import './AppointmentModal.scss'

type TimePeriod = 'morning' | 'afternoon' | 'evening'
const getPeriod = (time: string): TimePeriod => {
  const hour = Number(time.split(':')[0])
  if (hour < 12) return 'morning'
  if (hour < 18) return 'afternoon'
  return 'evening'
}

const formatTime = (time: string) => (time.length === 8 ? time.slice(0, -3) : time)
export interface AppointmentModalProps extends ModalProps {
  defaultSelectedDate?: string
  defaultSelectedTime?: string
  onSubmit: (value: { date: string; time: string }) => void
  calendarHour: GetShopCalendarHourResponse
  isSubmitting?: boolean
}
export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  onSubmit,
  onCancel,
  defaultSelectedDate,
  defaultSelectedTime,
  calendarHour,
  isSubmitting = false,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(defaultSelectedDate)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    defaultSelectedTime ? formatTime(defaultSelectedTime as string) : undefined,
  )
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  const hasAvailableHour = (date: string) => {
    const hours = calendarHour[date]
    if (!hours) return false
    return Object.values(hours).some(Boolean)
  }
  const {
    afternoon,
    evening,
    morning,
  }: {
    morning: { time: string; available: boolean }[]
    afternoon: { time: string; available: boolean }[]
    evening: { time: string; available: boolean }[]
  } = useMemo(() => {
    const result = {
      morning: [] as { time: string; available: boolean }[],
      afternoon: [] as { time: string; available: boolean }[],
      evening: [] as { time: string; available: boolean }[],
    }
    if (selectedDate) {
      const dayHours = calendarHour[selectedDate]
      if (!dayHours) return result
      Object.entries(dayHours).forEach(([time, available]) => {
        const period = getPeriod(time)
        result[period].push({ time, available })
      })
    }
    return result
  }, [selectedDate, calendarHour])

  const handleCancel = () => {
    setSelectedDate(undefined)
    setSelectedTime(undefined)
    onCancel && onCancel(null as any)
  }
  const onSelectDate = (date: Dayjs) => {
    setSelectedDate(date.format('YYYY-MM-DD'))
  }
  const onSelectTime = (value: string) => {
    setSelectedTime(value)
  }

  return (
    <Modal footer={null} className="shop__appointment-modal" onCancel={handleCancel} centered {...props}>
      <BaseFlex vertical gap="spacing-48px" align="center">
        <BaseFlex vertical={isMobile} gap={largeScreen ? 'spacing-48px' : 'spacing-24px'}>
          {/* Date */}
          <BaseFlex vertical gap="spacing-16px" style={{ width: 328 }}>
            <BaseTypography as="p" size="body1" weight="semibold">
              날짜 선택
            </BaseTypography>
            <BaseFlex vertical gap="spacing-24px">
              <BaseCalendar
                fullscreen={false}
                value={selectedDate ? dayjs(selectedDate) : undefined}
                onSelect={onSelectDate}
                disabledDate={(current) => {
                  if (!current) return true
                  const dateKey = current.format('YYYY-MM-DD')
                  return !hasAvailableHour(dateKey)
                }}
              />
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
            <BaseFlex vertical gap="spacing-16px" style={{ width: largeScreen ? 367 : isTablet ? 280 : '100%' }}>
              <BaseTypography as="p" size="body1" weight="semibold">
                도착 시간을 선택하세요
              </BaseTypography>
              <BaseFlex vertical gap="spacing-24px">
                {morning.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      오전
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {morning.map((e, i) => (
                        <Col key={i} span={largeScreen || isMobile ? 8 : 12}>
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
                {afternoon.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      오후
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {afternoon.map((e, i) => (
                        <Col key={i} span={largeScreen || isMobile ? 8 : 12}>
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
                {evening.length > 0 && (
                  <BaseFlex vertical gap="spacing-16px">
                    <BaseTypography as="p" size="body1" weight="regular">
                      저녁
                    </BaseTypography>
                    <Row gutter={[8, 8]}>
                      {evening.map((e, i) => (
                        <Col key={i} span={largeScreen || isMobile ? 8 : 12}>
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
          icon={defaultSelectedDate && defaultSelectedTime ? undefined : <CaretRight />}
          disabled={!selectedDate || !selectedTime}
          loading={isSubmitting}
          size="xl"
          iconPosition="end"
          style={{ width: largeScreen ? 380 : undefined }}
          variant={largeScreen ? undefined : 'fullwidth'}
          onClick={() => onSubmit({ date: selectedDate as string, time: selectedTime as string })}
        >
          {defaultSelectedDate && defaultSelectedTime ? '구하다' : '다음'}
        </BaseButton>
      </BaseFlex>
    </Modal>
  )
}
