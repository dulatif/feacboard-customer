import React from 'react'
import { BaseBox } from '../base-box/BaseBox'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography } from '../base-typography/BaseTypography'
import { Avatar } from 'antd'
import Image from 'next/image'
import HeartOutlinedIcon from '../icons/HeartOutlinedIcon'
import CommentOutlinedIcon from '../icons/CommentOutlinedIcon'
import './BaseCardPost.scss'

export interface BaseCardPostProps {
  header?: {
    avatar?: string
    name?: string
    date?: string
  }
  fileSource?: string
  description?: string
  footer?: {
    like?: number
    comment?: number
  }
}
export const BaseCardPost = ({ header, fileSource, description, footer }: BaseCardPostProps) => {
  return (
    <BaseBox padding={{ x: 'spacing-16px', y: 'spacing-16px' }} radius="radius-12px" className={'base-card-post'}>
      <BaseFlex vertical justify="space-between" gap="spacing-12px" style={{ height: '100%' }}>
        {header && (
          <BaseFlex justify="space-between" gap="spacing-8px" align="center">
            <BaseFlex gap="spacing-8px" align="center">
              {header.avatar && (
                <div>
                  <Avatar size={24} src={header.avatar} shape="circle" />
                </div>
              )}
              {header.name && (
                <BaseTypography as="p" color="neutral-900" size="body2" weight="semibold">
                  {header.name}
                </BaseTypography>
              )}
            </BaseFlex>
            {header.date && (
              <BaseTypography as="p" color="neutral-500" size="body2">
                {header.date}
              </BaseTypography>
            )}
          </BaseFlex>
        )}
        {fileSource && (
          <div className={'base-card-post__image__wrapper'}>
            <Image src={fileSource} fill alt="" />
          </div>
        )}
        {description && (
          <BaseTypography as="p" color="neutral-900" size="body2" lineClamp={!fileSource ? undefined : 2}>
            {description}
          </BaseTypography>
        )}
        {footer && (
          <BaseFlex justify="space-between" gap="spacing-8px">
            {footer.like && (
              <BaseFlex justify="space-between" gap="spacing-8px" align="center">
                <HeartOutlinedIcon />
                <BaseTypography as="p" color="neutral-500" size="body2">
                  {footer.like}개 좋아요
                </BaseTypography>
              </BaseFlex>
            )}
            {footer.comment && (
              <BaseFlex justify="space-between" gap="spacing-8px" align="center">
                <CommentOutlinedIcon />
                <BaseTypography as="p" color="neutral-500" size="body2">
                  {footer.comment}개의 댓글
                </BaseTypography>
              </BaseFlex>
            )}
          </BaseFlex>
        )}
      </BaseFlex>
    </BaseBox>
  )
}
