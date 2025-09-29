'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import React from 'react'
import styles from './MessageView.module.scss'
import { MessageList } from './features/message-list/MessageList'
import { MessageDetail } from './features/message-detail/MessageDetail'

export const MessageView = () => {
  const [selectedUserId, setSelectedUserId] = React.useState<string | number | null>(null)
  return (
    <BaseBox
      padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
      borderWidth={1}
      borderColor="neutral-300"
      className={styles['message']}
    >
      <MessageList selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
      <MessageDetail selectedUserId={selectedUserId} />
    </BaseBox>
  )
}
