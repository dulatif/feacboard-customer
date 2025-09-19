import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Button, Dropdown, Space } from 'antd'
import { DotsThreeVertical, NotePencil, Trash, User } from 'phosphor-react'
import React, { useState } from 'react'
import styles from '../CommunityView.module.scss'
import ModalDelete from './ModalDelete'

export interface CommentProps {
  avatar?: string
  name: string
  time: string
  content: string
  isMine?: boolean
}
const Comment: React.FC<CommentProps> = ({ avatar, name, time, content, isMine }) => {
  const [showModalDelete, setShowModalDelete] = useState(false)
  return (
    <>
      <div className={styles['comment']}>
        <div className={styles['comment__avatar']}>
          <Avatar
            className={styles['avatar']}
            size={48}
            icon={isMine ? '/dummy/navbar-profile.png' : !avatar && <User weight="bold" />}
            src={isMine ? '/dummy/navbar-profile.png' : avatar}
          />
        </div>
        <div className={styles['comment__content']}>
          <BaseTypography as="p" size="body1" weight="bold" style={{ marginBottom: 8 }}>
            {name}
          </BaseTypography>
          <BaseTypography as="p" size="body1">
            {content}
          </BaseTypography>
        </div>
        <div className={styles['comment__time']}>
          <Space>
            <BaseTypography as="p" size="body2">
              {time}
            </BaseTypography>
            {isMine && (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'delete',
                      label: '삭제',
                      icon: <Trash size={16} />,
                      onClick: () => {
                        setShowModalDelete(true)
                      },
                      danger: true,
                    },
                    {
                      key: 'edit',
                      label: '수정',
                      icon: <NotePencil size={16} />,
                      onClick: () => {},
                      className: styles['post__btn_edit'],
                      style: {
                        color: '#49C3D0',
                      },
                    },
                  ],
                }}
                trigger={['click']}
                placement="bottomRight"
              >
                <Button className={styles['comment__action_btn']}>
                  <DotsThreeVertical weight="bold" size={20} />
                </Button>
              </Dropdown>
            )}
          </Space>
        </div>
      </div>
      <ModalDelete
        isOpen={showModalDelete}
        onClose={() => {
          setShowModalDelete(false)
        }}
      />
    </>
  )
}

export default Comment
