import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Flex, Space } from 'antd'
import { BagTick2, CalendarTick, Edit, Receipt1 } from 'iconsax-reactjs'

interface CardReviewProps {
  avatarSrc?: string
  serviceName?: string
  date?: string
  time?: string
  price?: string
  points?: string
  onWriteReview?: () => void
}

const CardReview: React.FC<CardReviewProps> = ({
  avatarSrc = '/dummy/face03.png',
  serviceName = '남성 커트',
  date = '2024년 12월 1일',
  time = '오후 11:00',
  price = '21,000원',
  points = '+100 Points',
  onWriteReview,
}) => {
  return (
    <BaseBox shadow="no-shadow" borderWidth={2} width={453}>
      <Flex gap={24}>
        <Avatar src={avatarSrc} alt="user avatar" size={72} />
        <div style={{ flex: 1 }}>
          <BaseTypography
            as="h6"
            color="secondary-600"
            size="header6"
            variant="aleo"
            weight="semibold"
            style={{ marginBottom: '16px' }}
          >
            당신은에 있습니다
          </BaseTypography>
          <Space direction="vertical" size={0} style={{ marginBottom: '16px' }}>
            <Space align="center">
              <BagTick2 size={20} style={{ marginTop: '4px', color: '#667085' }} />
              <BaseTypography as="p" size="body1" color="neutral-500">
                {serviceName}
              </BaseTypography>
            </Space>
            <Space align="center">
              <CalendarTick size={20} style={{ marginTop: '4px', color: '#667085' }} />
              <BaseTypography as="p" size="body1" color="neutral-500">
                {date} , {time}
              </BaseTypography>
            </Space>
            <Space align="center">
              <Receipt1 size={20} style={{ marginTop: '4px', color: '#667085' }} />
              <BaseTypography as="p" size="body1" color="neutral-500">
                {price}
              </BaseTypography>
            </Space>
          </Space>
          <Flex align="center" gap={16}>
            <BaseButton style={{ flex: 1 }} icon={<Edit size={20} />} onClick={onWriteReview}>
              리뷰 쓰기
            </BaseButton>
            <BaseTypography style={{ flex: 1 }} as="p" size="body1" weight="semibold" color="success-600">
              {points}
            </BaseTypography>
          </Flex>
        </div>
      </Flex>
    </BaseBox>
  )
}

export default CardReview
