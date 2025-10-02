import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Flex, Space } from 'antd'
import { Coin1, ReceiptEdit } from 'iconsax-reactjs'
import React from 'react'

export interface PointHistoryItemProps {
  title: string
  time: string
  points: number
  icon?: React.ReactNode
}

const PointHistoryItem: React.FC<PointHistoryItemProps> = ({ title, time, points, icon = <ReceiptEdit /> }) => (
  <Flex gap={16} style={{ borderBottom: '1px solid #F2F4F7', padding: '16px ' }}>
    {icon}
    <div style={{ flex: 1 }}>
      <BaseTypography as="p" size="body1" weight="bold" variant="aleo" style={{ marginBottom: '8px' }}>
        {title}
      </BaseTypography>
      <BaseTypography as="p" size="overline" color="neutral-500">
        {time}
      </BaseTypography>
    </div>
    <div>
      <BaseTypography
        as="p"
        size="body1"
        weight="bold"
        color={points > 0 ? 'success-500' : 'danger-500'}
        variant="aleo"
        style={{ marginBottom: '8px' }}
      >
        {points > 0 ? `+${points}` : `${points}`}
      </BaseTypography>
      <Space align="center">
        <Coin1 size={20} variant="Bulk" style={{ color: '#7CA808' }} />
        <BaseTypography as="p" size="overline" color="neutral-500">
          Points
        </BaseTypography>
      </Space>
    </div>
  </Flex>
)

export default PointHistoryItem
