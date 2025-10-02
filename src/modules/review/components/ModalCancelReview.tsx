import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Modal } from 'antd'
import { InfoCircle } from 'iconsax-reactjs'
import React from 'react'
import styles from './Modal.module.scss'

export interface ModalCancelReviewProps {
  isOpen: boolean
  onCancel: () => void
  onConfirm: () => void
}

const ModalCancelReview: React.FC<ModalCancelReviewProps> = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      className={styles['modal__delete']}
      closable={false}
      footer={() => (
        <div className={styles['modal__delete__footer']}>
          <BaseButton
            variant="fullwidth"
            color="danger"
            className={styles['btn_cancel']}
            onClick={onCancel}
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
          <InfoCircle size={24} />
        </div>
      </div>
      <BaseTypography as="p" size="header6" weight="bold" style={{ marginBottom: 8 }}>
        리뷰가 완료되지 않았습니다
      </BaseTypography>
      <BaseTypography as="p" size="body1" color="neutral-500">
        뒤로 클릭하면 사라지고 다시 0부터 채워야 합니다.
      </BaseTypography>
    </Modal>
  )
}

export default ModalCancelReview
