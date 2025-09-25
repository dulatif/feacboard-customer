import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import UploadImageIcon from '@/shared/components/icons/UploadImageIcon'
import type { UploadProps } from 'antd'
import { Avatar, message, Modal, Space, Upload } from 'antd'
import { XCircle } from 'phosphor-react'
import React from 'react'
import styles from '../CommunityView.module.scss'
import { IPost } from './Post'

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
export interface ModalPostProps {
  show: boolean
  action: 'create' | 'update'
  post?: IPost
  onClose: () => void
}
const ModalPost: React.FC<ModalPostProps> = ({ show, action, post, onClose }) => {
  const handleClose = () => {
    onClose()
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
          <BaseButton style={{ width: '100%' }}>
            {' '}
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
          defaultValue={post?.content || ''}
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
