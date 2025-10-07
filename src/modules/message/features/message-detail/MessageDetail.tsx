import React, { useEffect, useMemo, useState } from 'react'
import { UserCardProps } from '../../components/user-card/UserCard'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { PaperPlaneRight, Storefront, UserCircle } from 'phosphor-react'
import { Avatar } from 'antd'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import styles from './MessageDetail.module.scss'
import { ChatBubble } from '../../components/chat-bubble/ChatBubble'

export interface MessageDetailProps {
  selectedUserId: string | number | null
}
export const MessageDetail: React.FC<MessageDetailProps> = ({ selectedUserId }) => {
  const name = '강남 살롱'
  const avatar = '/dummy/face03.png'
  const variant: UserCardProps['variant'] = 'designer'
  const company = '강남 살롱'

  const history = [
    {
      from: 'me',
      message: '안녕하세요 디자이너님. 문의 드리려고 채팅 드렸습니다.',
      date: '2024-06-01 10:00',
    },
    {
      from: 'designer',
      message: '안녕하세요.',
      date: '2024-06-01 11:00',
    },
    {
      from: 'me',
      message: '안녕하세요 디자이너님. 문의 드리려고 채팅 드렸습니다.',
      date: '2024-06-01 12:00',
    },
    {
      from: 'me',
      message: '안녕하세요 디자이너님. 문의 드리려고 채팅 드렸습니다.',
      date: '2024-06-01 13:00',
    },
    {
      from: 'me',
      message: '안녕하세요 디자이너님. 문의 드리려고 채팅 드렸습니다.',
      date: '2024-06-05 10:00',
    },
    {
      from: 'designer',
      message: '안녕하세요.',
      date: '2024-06-05 11:00',
    },
    {
      from: 'me',
      message: '안녕하세요 디자이너님. 문의 드리려고 채팅 드렸습니다.',
      date: '2024-06-05 12:00',
    },
    {
      from: 'designer',
      message: '안녕하세요.',
      date: '2024-06-05 17:00',
    },
  ]

  const [messageText, setMessageText] = useState('')
  const messageHistory = useMemo(() => {
    const groupedByDate = history.reduce(
      (acc: Record<string, (typeof history)[number][]>, item) => {
        const dateKey = item.date.split(' ')[0] as string
        if (!acc[dateKey]) {
          acc[dateKey] = []
        }
        acc[dateKey].push(item)
        return acc
      },
      {} as Record<string, (typeof history)[number][]>,
    )
    return groupedByDate
  }, [history])

  if (!selectedUserId) {
    return (
      <BaseFlex vertical gap="spacing-24px" justify="center" align="center" style={{ height: '100%' }}>
        <Image src={'/icons/empty-chat.svg'} width={96} height={96} alt="empty chat" />
        <BaseTypography as="p" size="caption" weight="semibold" color="neutral-400">
          상담 내역이 없어요
        </BaseTypography>
      </BaseFlex>
    )
  }
  return (
    <BaseFlex vertical gap="spacing-24px">
      {/* Header */}
      <BaseBox borderColor="neutral-300" padding={{ x: 'spacing-8px', y: 'spacing-8px' }}>
        <BaseFlex justify="space-between" gap="spacing-16px" align="center">
          <BaseFlex gap="spacing-16px">
            <div>
              <Avatar src={avatar} style={{ background: '#CFC3A7' }} size={48} />
            </div>
            <BaseFlex vertical gap="spacing-4px" justify="center">
              <BaseTypography as="p" size="body2" weight="medium" color="neutral-800">
                {name}
              </BaseTypography>
              {variant === 'designer' && company && (
                <BaseFlex gap="spacing-8px" align="center">
                  <div>
                    <BuildingsIcon width={15} height={16} color="#667085" />
                  </div>
                  <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                    {company}
                  </BaseTypography>
                </BaseFlex>
              )}
            </BaseFlex>
          </BaseFlex>
          <BaseFlex gap="spacing-16px">
            <BaseButton size="md" color="secondary" icon={<Storefront size={20} />} />
            <BaseButton size="md" icon={<UserCircle size={20} />}>
              프로필 보기
            </BaseButton>
          </BaseFlex>
        </BaseFlex>
      </BaseBox>

      {/* Body */}
      <div className={styles['message-detail__chat-history']}>
        <BaseFlex vertical gap="spacing-24px">
          {messageHistory &&
            Object.keys(messageHistory).map((date, index) => (
              <BaseFlex vertical gap="spacing-24px" key={index} align="center">
                <div className={styles['message-detail__date']}>
                  <BaseTypography as="p" size="body1" weight="semibold" color="neutral-700">
                    {date}
                  </BaseTypography>
                </div>
                <BaseFlex vertical gap="spacing-16px" style={{ width: '100%' }}>
                  {messageHistory[date].map((item, i) => (
                    <div key={i} style={{ alignSelf: item.from === 'me' ? 'flex-end' : 'flex-start' }}>
                      <BaseFlex vertical gap="spacing-6px">
                        <BaseFlex justify="space-between" align="center" gap="spacing-8px">
                          <BaseTypography as="p" size="body2" weight="semibold" color="neutral-700">
                            {item.from === 'me' ? '너' : '텡쿠 후안샤'}
                          </BaseTypography>
                          <BaseTypography as="p" size="caption" weight="regular" color="neutral-600">
                            {item.date.split(' ')[1]}
                          </BaseTypography>
                        </BaseFlex>
                        <ChatBubble
                          color={item.from === 'me' ? 'primary' : 'secondary'}
                          text={item.message}
                          corner={item.from === 'me' ? 'top-right' : 'top-left'}
                        />
                      </BaseFlex>
                    </div>
                  ))}
                </BaseFlex>
              </BaseFlex>
            ))}
        </BaseFlex>
      </div>

      {/* Footer */}
      <div>
        <BaseFlex gap="spacing-8px">
          <BaseInput
            placeholder="메시지를 입력하세요"
            onChange={(e) => setMessageText(e.target.value)}
            size="large"
            style={{ width: '100%' }}
          />
          <BaseButton size="xl" color={messageText ? 'primary' : 'secondary'} icon={<PaperPlaneRight size={20} />} />
        </BaseFlex>
      </div>
    </BaseFlex>
  )
}
