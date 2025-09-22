import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import UploadImageIcon from '@/shared/components/icons/UploadImageIcon'
import type { InputRef, UploadProps } from 'antd'
import { Avatar, Button, Input, message, Modal, Space, Upload } from 'antd'
import { XCircle } from 'phosphor-react'
import React, { Ref, useRef, useState } from 'react'
import styles from '../CommunityView.module.scss'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import ModalPost from './ModalPost'

const CreatePost: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const showModal = () => {
    setIsModalOpen(true)
    if (inputRef.current) {
      inputRef.current.blur()
    }
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
      <ModalPost show={isModalOpen} action="create" onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default CreatePost
