import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Modal } from 'antd'
import { Warning } from 'phosphor-react'
import React from 'react'
import styles from './DiffProviderConfirmModal.module.scss'

export interface DiffProviderConfirmModalProps {
  open: boolean
  onCancel: () => void
  onConfirm: () => void
}

export const DiffProviderConfirmModal: React.FC<DiffProviderConfirmModalProps> = ({ open, onCancel, onConfirm }) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      className={styles['modal__diff-provider']}
      closable={false}
      footer={() => (
        <div className={styles['modal__diff-provider__footer']}>
          <BaseButton
            variant="fullwidth"
            color="secondary-neutral"
            className={styles['btn_cancel']}
            onClick={onCancel}
            size="lg"
          >
            취소
          </BaseButton>
          <BaseButton variant="fullwidth" color="primary" size="lg" onClick={onConfirm}>
            계속하기
          </BaseButton>
        </div>
      )}
      centered
    >
      <div className={styles['modal__diff-provider__content']}>
        <div className={styles['warning_icon']}>
          <Warning size={48} color="#F79009" weight="fill" />
        </div>
        <BaseTypography as="p" size="header6" weight="bold" textAlign="center" style={{ marginBottom: 8 }}>
          다른 매장/디자이너의 서비스를 선택하셨습니다
        </BaseTypography>
        <BaseTypography as="p" size="body1" color="neutral-500" textAlign="center">
          장바구니에 담긴 이전 서비스가 삭제되고
          <br />
          새로운 서비스로 교체됩니다.
        </BaseTypography>
      </div>
    </Modal>
  )
}
