import React from 'react'
import styles from './MessageList.module.scss'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { UserCard, UserCardProps } from '../../components/user-card/UserCard'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface MessageListProps {
  selectedUserId: string | number | null
  onSelectUser: (id: string | number) => void
}
export const MessageList: React.FC<MessageListProps> = ({ selectedUserId, onSelectUser }) => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const data: UserCardProps[] = [
    {
      id: 1,
      avatar: '/dummy/face03.png',
      name: '텡쿠 후안샤',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '오늘',
      variant: 'designer',
    },
    {
      id: 2,
      name: '강남 살롱',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '오늘',
      variant: 'company',
    },
    {
      id: 3,
      name: '강남 살롱',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '오늘',
      variant: 'company',
    },
    {
      id: 4,
      avatar: '/dummy/face03.png',
      name: '텡쿠 후안샤',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '11:00',
      notificationCount: 3,
      variant: 'designer',
    },
    {
      id: 5,
      avatar: '/dummy/face03.png',
      name: '텡쿠 후안샤',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '16:00',
      notificationCount: 3,
      variant: 'designer',
    },
    {
      id: 6,
      name: '강남 살롱',
      company: '강남 살롱',
      lastMessage: '네, 예약 가능합니다. 무엇을 예약하시겠습니까? 네, 예약 가능합니다. 무엇을 예약하시겠습니까?',
      lastTime: '19:00',
      notificationCount: 3,
      variant: 'company',
    },
  ]
  return (
    <div className={styles['message-list']}>
      <BaseFlex vertical gap="spacing-24px">
        <BaseTypography as="p" size="body1" weight="semibold" color="neutral-900">
          메시지
        </BaseTypography>
        <BaseInput prefix={<MagnifyingGlass width={20} height={20} />} placeholder="검색" size="large" />
        <div className={styles['message-list__user-list']}>
          <BaseFlex vertical gap="spacing-24px">
            {data.map((item, index) => (
              <UserCard
                key={index}
                onClick={(id) => onSelectUser(id)}
                {...item}
                isActive={item.id === selectedUserId}
              />
            ))}
          </BaseFlex>
        </div>
      </BaseFlex>
    </div>
  )
}
