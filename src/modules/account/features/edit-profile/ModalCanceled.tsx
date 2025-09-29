import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Modal } from 'antd'
import { CheckCircle } from 'phosphor-react'
import React from 'react'
import styles from './Modal.module.scss'

export interface ModalCanceledProps {
  isOpen: boolean
  onClose: () => void
}

const ModalCanceled: React.FC<ModalCanceledProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      className={styles['modal__delete']}
      closable={false}
      footer={() => (
        <div className={styles['modal__delete__footer']}>
          <BaseButton variant="fullwidth" size="lg" color="danger" onClick={onClose}>
            좋아요
          </BaseButton>
        </div>
      )}
    >
      <div className={styles['modal__delete__content']}>
        <div className={styles['trash_icon']} style={{ margin: ' auto' }}>
          <CheckCircle size={24} />
        </div>
      </div>

      <BaseTypography textAlign="center" as="p" size="header6" weight="bold" style={{ marginBottom: 8 }}>
        회원 탈퇴가 완료 되었습니다
      </BaseTypography>
      <BaseTypography textAlign="center" as="p" size="body1" color="neutral-500">
        회원 탈퇴 시, 30일간 동일 번호로 <br /> 회원 가입이 불가능합니다.
      </BaseTypography>
    </Modal>
  )
}

export default ModalCanceled
