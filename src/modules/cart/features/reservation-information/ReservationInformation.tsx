import React, { useEffect, useMemo, useState } from 'react'
import styles from './ReservationInformation.module.scss'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import UserIcon from '@/shared/components/icons/UserIcon'
import PhoneIcon from '@/shared/components/icons/PhoneIcon'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useApp } from '@/shared/providers/AppProvider'
import { formatNumberCurrency } from '@/shared/utils/number'
import { UpdateCartBody } from '@/api/cart'
import { useUpdateCartMutation } from '@/shared/hooks/cart/useCartMutation'

export interface ReservationInformationProps {
  onBack: () => void
  onNext: () => void
}
export const ReservationInformation: React.FC<ReservationInformationProps> = ({ onBack, onNext }) => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const { appointment } = useApp()
  const total = useMemo(() => {
    return appointment?.data?.items.reduce((total, item) => {
      return total + Number(item.service.price)
    }, 0)
  }, [appointment?.data?.items])

  const [form, setForm] = useState<UpdateCartBody>({
    name: '',
    phone: '',
    notes: '',
  })
  useEffect(() => {
    if (appointment?.data) {
      const { name, phone } = appointment.data
      setForm({
        name,
        phone,
        notes: '',
      })
    }
  }, [appointment?.data])

  const isContinueDisabled = useMemo(() => {
    return Boolean(!form.name || !form.phone)
  }, [form])

  const { mutate: updateCartMutate, isPending: isUpdateCartPending } = useUpdateCartMutation()
  const handleContinue = () => {
    updateCartMutate(form, {
      onSuccess: () => {
        onNext()
      },
      onError: () => {},
    })
  }

  return (
    <BaseContainer variant={1440}>
      <div className={styles['container']}>
        <div>
          <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <BaseFlex vertical gap="spacing-32px">
              <div>
                <BaseButton onClick={onBack} color="secondary-neutral" icon={<ChevronLeftIcon />}>
                  뒤로가기
                </BaseButton>
              </div>
              <BaseFlex vertical gap="spacing-24px">
                <BaseTypography as="p" size="body1" weight="semibold">
                  예약자 정보
                </BaseTypography>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    예약자명
                  </BaseTypography>
                  <BaseInput
                    prefix={<UserIcon width={20} height={20} />}
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </BaseFlex>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    휴대폰 번호
                  </BaseTypography>
                  <BaseInput
                    prefix={<PhoneIcon width={20} height={20} />}
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                  />
                </BaseFlex>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    메모
                  </BaseTypography>
                  <BaseTextarea
                    placeholder="업체에 요청하실 내용을 적어주세요"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                  />
                </BaseFlex>
              </BaseFlex>
            </BaseFlex>
          </BaseBox>
        </div>
        <div>
          <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <BaseFlex vertical gap="spacing-40px">
              <BaseTypography as="p" size="body1" weight="semibold">
                결제 요약
              </BaseTypography>
              <BaseFlex vertical gap="spacing-24px">
                {appointment?.data?.items
                  .map((e) => ({
                    title: e.service.name,
                    total: e.service.price,
                  }))
                  .map((e, i) => (
                    <BaseFlex key={i} justify="space-between" gap="spacing-24px">
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {e.title}
                      </BaseTypography>
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {formatNumberCurrency(Number(e.total))} 원
                      </BaseTypography>
                    </BaseFlex>
                  ))}
                <BaseDivider />
                <BaseFlex justify="space-between" gap="spacing-24px">
                  <BaseTypography as="p" size="body1" weight="semibold">
                    총
                  </BaseTypography>
                  <BaseTypography as="p" size="body1" weight="semibold">
                    {formatNumberCurrency(Number(total))} 원
                  </BaseTypography>
                </BaseFlex>
                <BaseButton
                  variant="fullwidth"
                  onClick={handleContinue}
                  loading={isUpdateCartPending}
                  disabled={isContinueDisabled}
                >
                  계속 결제하기
                </BaseButton>
              </BaseFlex>
            </BaseFlex>
          </BaseBox>
        </div>
      </div>
    </BaseContainer>
  )
}
