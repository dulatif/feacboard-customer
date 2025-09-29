import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Modal } from 'antd'
import { Trash } from 'phosphor-react'
import React from 'react'
import styles from './Modal.module.scss'
import { EmojiSad } from 'iconsax-reactjs'

export interface ModalCancelMembershipProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const ModalCancelMembership: React.FC<ModalCancelMembershipProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      className={styles['modal__delete']}
      closable={false}
      footer={() => (
        <div className={styles['modal__delete__footer']}>
          <BaseButton
            variant="fullwidth"
            color="danger"
            className={styles['btn_cancel']}
            onClick={onClose}
            style={{ backgroundColor: '#fff' }}
            size="lg"
          >
            취소 프로세스
          </BaseButton>
          <BaseButton variant="fullwidth" color="danger" size="lg" onClick={onConfirm}>
            회원 탈퇴
          </BaseButton>
        </div>
      )}
    >
      <div className={styles['modal__delete__content']}>
        <div className={styles['trash_icon']}>
          <EmojiSad size={24} />
        </div>
      </div>
      <BaseTypography as="p" size="header6" weight="bold" style={{ marginBottom: 8 }}>
        회원 탈퇴
      </BaseTypography>
      <BaseTypography as="p" size="body1" color="neutral-500">
        회원 탈퇴 시, 30일간 동일 번호로 <br /> 회원 가입이 불가능합니다.
      </BaseTypography>
    </Modal>
  )
}

export default ModalCancelMembership
