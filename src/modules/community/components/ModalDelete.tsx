import { Button, Modal } from 'antd'
import React from 'react'

export interface ModalDeleteProps {
  isOpen: boolean
  onClose: () => void
}

const ModalDelete: React.FC<ModalDeleteProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={() => (
        <>
          <Button variant="solid" style={{ backgroundColor: '#49C3D0', color: '#fff', width: '100%' }}>
            게시물 만들기
          </Button>
        </>
      )}
    ></Modal>
  )
}

export default ModalDelete
