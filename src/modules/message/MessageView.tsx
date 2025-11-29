'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import React from 'react'
import styles from './MessageView.module.scss'
import { MessageList } from './features/message-list/MessageList'
import { MessageDetail } from './features/message-detail/MessageDetail'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const MessageView = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const [selectedUserId, setSelectedUserId] = React.useState<string | number | null>(null)
  const [showDetail, setShowDetail] = React.useState<boolean>(false)
  const onSelectUser = (id: string | number) => {
    setSelectedUserId(id)
    setShowDetail(true)
  }
  const onBack = () => {
    setSelectedUserId(null)
    setShowDetail(false)
  }

  const shouldShowList = largeScreen || (!largeScreen && !showDetail && !selectedUserId)
  const shouldShowDetail = largeScreen || showDetail || selectedUserId

  const boxPadding = largeScreen ? 'spacing-24px' : 'spacing-12px'
  return (
    <BaseBox
      padding={{ x: boxPadding, y: boxPadding }}
      borderWidth={1}
      borderColor="neutral-300"
      className={styles['message']}
    >
      {shouldShowList && <MessageList selectedUserId={selectedUserId} onSelectUser={onSelectUser} />}

      {shouldShowDetail && <MessageDetail selectedUserId={selectedUserId} onBack={onBack} />}
    </BaseBox>
  )
}
