import { Button, Modal } from 'antd'
import React from 'react'
import styles from '../CommunityView.module.scss'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Trash } from 'phosphor-react'

export interface ModalDeleteProps {
  isOpen: boolean
  onClose: () => void
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ isOpen, onClose }) => {
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
          >
            취소
          </BaseButton>
          <BaseButton variant="fullwidth" color="danger" onClick={onClose}>
            네, 삭제합니다
          </BaseButton>
        </div>
      )}
    >
      <div className={styles['modal__delete__content']}>
        <div className={styles['trash_icon']}>
          <Trash size={24} />
        </div>
      </div>
      <BaseTypography as="p" size="header6" weight="bold" style={{ marginBottom: 4 }}>
        이 게시물을 삭제하시겠습니까?
      </BaseTypography>
      <BaseTypography as="p" size="body1">
        삭제된 게시물은 복구할 수 없습니다.
      </BaseTypography>
    </Modal>
  )
}

export default ModalDelete
