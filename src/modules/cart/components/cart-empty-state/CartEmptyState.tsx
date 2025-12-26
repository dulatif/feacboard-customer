import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import CartIcon from '@/shared/components/icons/CartIcon'
import React from 'react'
import styles from './CartEmptyState.module.scss'

export const CartEmptyState: React.FC = () => {
  return (
    <BaseFlex vertical gap="spacing-24px" justify="center" align="center" className={styles['cart-empty-state']}>
      <div className={styles['cart-empty-state__icon']}>
        <CartIcon width={80} height={80} color="#D0D5DD" />
      </div>
      <BaseFlex vertical gap="spacing-8px" align="center">
        <BaseTypography as="p" size="header6" weight="semibold" color="neutral-700">
          아직 선택한 서비스가 없습니다
        </BaseTypography>
        <BaseTypography as="p" size="body1" color="neutral-500" style={{ textAlign: 'center' }}>
          장바구니에 서비스를 추가해주세요
        </BaseTypography>
      </BaseFlex>
    </BaseFlex>
  )
}
