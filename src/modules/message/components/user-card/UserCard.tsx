import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import { Avatar } from 'antd'
import React from 'react'

export interface UserCardProps {
  id: string | number
  variant: 'company' | 'designer'
  avatar?: string
  name: string
  company?: string
  lastMessage: string
  lastTime: string
  isActive?: boolean
  notificationCount?: number
  onClick?: (id: string | number) => void
}
export const UserCard: React.FC<UserCardProps> = ({
  id,
  variant,
  avatar,
  name,
  company,
  lastMessage,
  lastTime,
  isActive = false,
  notificationCount = 0,
  onClick,
}) => {
  return (
    <div onClick={() => onClick?.(id)} style={{ cursor: 'pointer' }}>
      <BaseBox
        shadow="no-shadow"
        borderWidth={0}
        radius="radius-8px"
        padding={{ x: 'spacing-8px', y: 'spacing-8px' }}
        background={isActive ? 'primary-50' : undefined}
      >
        <BaseFlex vertical gap="spacing-16px">
          <BaseFlex justify="space-between" gap="spacing-16px" align="flex-start">
            <BaseFlex justify="space-between" gap="spacing-16px" align="center">
              <div>
                {variant === 'designer' && avatar ? (
                  <Avatar src={avatar} style={{ background: '#CFC3A7' }} size={48} />
                ) : (
                  <BaseFlex
                    justify="center"
                    align="center"
                    style={{ width: 48, height: 48, background: '#E9FFF8', borderRadius: '50%' }}
                  >
                    <BuildingsIcon width={24} height={24} color="#49C3D0" />
                  </BaseFlex>
                )}
              </div>
              <BaseFlex vertical gap="spacing-4px">
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
            <div>
              <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                {lastTime}
              </BaseTypography>
            </div>
          </BaseFlex>
          <BaseFlex justify="space-between" align="center">
            <BaseTypography as="p" size="body2" weight="regular" lineClamp={1} color="neutral-900">
              {lastMessage}
            </BaseTypography>
            {notificationCount > 0 && (
              <div>
                <BaseFlex
                  justify="center"
                  align="center"
                  style={{ background: '#FF5744', borderRadius: '50%', width: 20, height: 20 }}
                >
                  <BaseTypography as="span" size="body2" weight="regular" color="white">
                    {notificationCount}
                  </BaseTypography>
                </BaseFlex>
              </div>
            )}
          </BaseFlex>
        </BaseFlex>
      </BaseBox>
    </div>
  )
}
