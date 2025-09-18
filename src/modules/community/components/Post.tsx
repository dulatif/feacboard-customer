'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Button, Dropdown, Space } from 'antd'
import Image from 'next/image'
import { ChatCenteredText, DotsThreeVertical, Heart, NotePencil, Trash, User } from 'phosphor-react'
import React from 'react'
import Slider from 'react-slick'
import styles from '../CommunityView.module.scss'

export interface PostProps {
  user?: {
    name: string
    avatar?: string
  }
  time: string
  content: string
  images: string[]
  likes: number
  comments: number
  isMine?: boolean
  onLikeClick?: () => void
  onCommentClick?: () => void
}

const Post: React.FC<PostProps> = ({
  user,
  time,
  content,
  images,
  likes,
  comments,
  isMine = false,
  onLikeClick,
  onCommentClick,
}) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: images.length > 3 ? 3 : images.length,
    speed: 500,
  }

  return (
    <BaseBox className={styles['post']}>
      <div className={styles['post__header']}>
        <div className={styles['user']}>
          <Avatar
            className={styles['avatar']}
            size={48}
            icon={isMine ? '/dummy/navbar-profile.png' : !user?.avatar && <User weight="bold" />}
            src={isMine ? '/dummy/navbar-profile.png' : user?.avatar}
          />
          <BaseTypography as="p" size="body1" weight="bold">
            {isMine ? '나' : user?.name}
          </BaseTypography>
        </div>
        <Space>
          <BaseTypography as="p" size="caption">
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
                    onClick: () => {},
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
              <Button className={styles['post__action_btn']}>
                <DotsThreeVertical weight="bold" size={20} />
              </Button>
            </Dropdown>
          )}
        </Space>
      </div>
      <div
        className={styles['post__content']}
        style={{ marginBottom: !images || images.length === 0 ? '24px' : '0px' }}
      >
        <BaseTypography as="p" size="body1">
          {content}
        </BaseTypography>
        {!!images && images.length > 0 && (
          <div className={styles['slider-container']}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className={styles['slider-item']}>
                  <Image
                    src={image}
                    alt=""
                    width={320}
                    height={400}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
      <div className={styles['post__footer']}>
        <Button className={styles['button']} icon={<Heart size={20} />} onClick={onLikeClick}>
          {likes}개 좋아요
        </Button>
        <Button className={styles['button']} icon={<ChatCenteredText size={20} />} onClick={onCommentClick}>
          {comments}개의 댓글
        </Button>
      </div>
    </BaseBox>
  )
}

export default Post
