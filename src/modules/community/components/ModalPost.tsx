import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import UploadImageIcon from '@/shared/components/icons/UploadImageIcon'
import type { UploadProps } from 'antd'
import { Avatar, message, Modal, Space, Upload } from 'antd'
import { XCircle } from 'phosphor-react'
import React, { useState } from 'react'
import styles from '../CommunityView.module.scss'
import { IPost } from './Post'
import { CreatePost } from '@/shared/interface/community'
import { useCreatePost } from '@/shared/hooks/community/useCommunityMutation'
import { API_URL } from '@/shared/utils/url'
import { getToken } from '@/shared/utils/auth'

const token = getToken() || ''
const uploadProps: UploadProps = {
  name: 'image',
  action: `${API_URL}community/post/image`,
  headers: {
    Authorization: `Bearer ${token}`,
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
export interface ModalPostProps {
  show: boolean
  action: 'create' | 'update'
  post?: IPost
  onClose: () => void
}
const ModalPost: React.FC<ModalPostProps> = ({ show, action, post, onClose }) => {
  const [form, setForm] = useState<CreatePost>({ description: '' })

  const handleClose = () => {
    onClose()
    setForm({ description: '' })
  }

  const { mutate: createPostMutate, isPending: isCreatePostPending } = useCreatePost()
  const handleCreatePost = () => {
    createPostMutate(form, {
      onSuccess: () => {
        handleClose()
      },
    })
  }

  return (
    <Modal
      title={action === 'create' ? '게시물을 작성하세요' : '게시물을 수정하세요'}
      closable={{ 'aria-label': 'Custom Close Button' }}
      closeIcon={<XCircle size={24} />}
      open={show}
      className={styles['create_post__modal']}
      onCancel={handleClose}
      footer={() => (
        <>
          <BaseButton
            style={{ width: '100%' }}
            onClick={action === 'create' ? handleCreatePost : () => null}
            loading={isCreatePostPending}
          >
            {action === 'create' ? '게시물 만들기' : '게시물 수정하기'}
          </BaseButton>
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
        <BaseTextarea
          placeholder="뭔가 신나는 걸 써봐"
          value={form.description}
          onChange={(e) => setForm({ description: e.target.value })}
          autoSize={{ minRows: 4, maxRows: 5 }}
        />
        <Upload className={styles['post__upload_img']} {...uploadProps}>
          <Space>
            <UploadImageIcon />
            <p>사진이나 비디오를 추가하세요</p>
          </Space>
        </Upload>
      </div>
    </Modal>
  )
}

export default ModalPost
