import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import UploadImageIcon from '@/shared/components/icons/UploadImageIcon'
import type { InputRef, UploadProps } from 'antd'
import { Avatar, Button, Input, message, Modal, Space, Upload } from 'antd'
import { XCircle } from 'phosphor-react'
import React, { Ref, useRef, useState } from 'react'
import styles from '../CommunityView.module.scss'

const uploadProps: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const CreatePost: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const showModal = () => {
    setIsModalOpen(true)
    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <BaseBox className={styles['post']}>
        <div className={styles['post__form']}>
          <Avatar className={styles['avatar']} size={48} src={'/dummy/navbar-profile.png'} />
          <Input
            ref={inputRef as unknown as Ref<InputRef>}
            className={styles['post__input']}
            onFocus={showModal}
            placeholder="뭔가를 게시하세요..."
          />
        </div>
        <Space className={styles['post__upload_img']}>
          <UploadImageIcon />
          <p>사진이나 비디오를 추가하세요</p>
        </Space>
      </BaseBox>
      <Modal
        title="게시물을 작성하세요"
        closable={{ 'aria-label': 'Custom Close Button' }}
        closeIcon={<XCircle size={24} />}
        open={isModalOpen}
        className={styles['create_post__modal']}
        onCancel={closeModal}
        footer={() => (
          <>
            <Button variant="solid" style={{ backgroundColor: '#49C3D0', color: '#fff', width: '100%' }}>
              게시물 만들기
            </Button>
          </>
        )}
      >
        <div className={styles['create_post__modal__content']}>
          <Space>
            <Avatar className={styles['avatar']} size={48} src={'/dummy/navbar-profile.png'} />
            <BaseTypography as="p" weight="bold" size="body1">
              텡쿠 후안샤
            </BaseTypography>
          </Space>
          <BaseTextarea placeholder="뭔가 신나는 걸 써봐" autoSize={{ minRows: 4, maxRows: 5 }} />
          <Upload className={styles['post__upload_img']} {...uploadProps}>
            <Space>
              <UploadImageIcon />
              <p>사진이나 비디오를 추가하세요</p>
            </Space>
          </Upload>
        </div>
      </Modal>
    </>
  )
}

export default CreatePost
