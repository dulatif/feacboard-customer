'use client'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { useRouter } from 'next/navigation'
import styles from './CartView.module.scss'
import { ServiceInformation } from './features/service-information/ServiceInformation'
import { ReservationInformation } from './features/reservation-information/ReservationInformation'
import { Summary } from './features/summary/Summary'
import { BaseSteps, BaseStepsProps } from '@/shared/components/base-steps/BaseSteps'
import { useState } from 'react'

export const CartView = () => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(1)
  const stepsItems: BaseStepsProps['items'] = [
    {
      title: (
        <BaseTypography as="p" size="body1" weight="semibold">
          카트
        </BaseTypography>
      ),
      description: '그 외에 다른 것이 있나요?',
      onClick: () => setActiveStep(1),
      status: activeStep > 1 ? 'finish' : 'process',
    },
    {
      title: (
        <BaseTypography as="p" size="body1" weight="semibold">
          주문 정보
        </BaseTypography>
      ),
      description: '당신의 이름과 전화번호',
      onClick: () => setActiveStep(2),
      status: activeStep > 2 ? 'finish' : activeStep === 2 ? 'process' : undefined,
    },
    {
      title: (
        <BaseTypography as="p" size="body1" weight="semibold">
          검토
        </BaseTypography>
      ),
      description: '모든 것이 정확한가요?',
      onClick: () => setActiveStep(3),
      status: activeStep === 3 ? 'process' : undefined,
    },
  ]
  return (
    <div className={styles['cart']}>
      <div className={styles['cart__header']}>
        <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
          <BaseFlex vertical gap="spacing-24px">
            <div>
              <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<ChevronLeftIcon />}>
                뒤로가기
              </BaseButton>
            </div>
            <div>
              <BaseTypography as="h4" size="subtitle1" weight="semibold">
                장바구니 및 결제
              </BaseTypography>
            </div>
            <BaseSteps items={stepsItems} />
          </BaseFlex>
        </BaseContainer>
      </div>
      <div className={styles['cart__body']}>
        {activeStep === 2 ? (
          <ReservationInformation onBack={() => setActiveStep(1)} onNext={() => setActiveStep(3)} />
        ) : activeStep === 3 ? (
          <Summary onBack={() => setActiveStep(2)} />
        ) : (
          <ServiceInformation onNext={() => setActiveStep(2)} />
        )}
      </div>
    </div>
  )
}
