'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Avatar, Button, Dropdown, Input, Space } from 'antd'
import Image from 'next/image'
import {
  BookmarkSimple,
  ChatCenteredText,
  DotsThreeVertical,
  Heart,
  NotePencil,
  PaperPlaneRight,
  Trash,
  User,
} from 'phosphor-react'
import React, { useState } from 'react'
import Slider from 'react-slick'
import styles from '../CommunityView.module.scss'
import ModalDelete from './ModalDelete'
import Link from 'next/link'
import Comment from './Comment'
import { Spacing } from '@/shared/types/spacing'
import './Post.scss'

export interface IPost {
  id?: string
  user?: {
    name: string
    avatar?: string
  }
  time: string
  content: string
  images: string[]
  likes: number
  comments: number
}
export interface PostProps {
  post: IPost
  isMine?: boolean
  showComment?: boolean
  bookmarked?: boolean
  onEdit?: (post: IPost) => void
}

const Post: React.FC<PostProps> = ({ post, isMine = false, showComment = false, bookmarked = false, onEdit }) => {
  const postId = '123'
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [liked, setLiked] = useState(false)
  const padding: Spacing = bookmarked ? 'spacing-0px' : 'spacing-16px'
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1,
    speed: 500,
  }

  const onLikeClick = () => {
    setLiked(!liked)
  }

  return (
    <>
      <BaseBox
        className={`${styles['post']}`}
        shadow={bookmarked ? 'no-shadow' : 'xs'}
        bordered={!bookmarked}
        padding={{ y: padding, x: padding }}
      >
        <div className={styles['post__header']}>
          <div className={styles['user']}>
            <Avatar
              className={styles['avatar']}
              size={48}
              icon={isMine ? '/dummy/navbar-profile.png' : !post.user?.avatar && <User weight="bold" />}
              src={isMine ? '/dummy/navbar-profile.png' : post.user?.avatar}
            />
            <BaseTypography as="p" size="body1" weight="bold">
              {isMine ? '나' : post.user?.name}
            </BaseTypography>
          </div>
          <Space>
            <BaseTypography as="p" size="caption">
              {post.time}
            </BaseTypography>
            {bookmarked && (
              <Button className={styles['post__action_btn']} onClick={onLikeClick}>
                <BookmarkSimple weight="fill" size={24} style={{ color: '#FC99A6' }} />
              </Button>
            )}
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
                      onClick: () => {
                        onEdit?.(post)
                      },
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
          style={{ marginBottom: !post.images || post.images.length === 0 ? '24px' : '0px' }}
        >
          <BaseTypography as="p" size="body1">
            {post.content}
          </BaseTypography>
          {!!post.images && post.images.length > 0 && (
            <div className={'community__post-slider'}>
              <Slider {...settings}>
                {post.images.map((image, i) => (
                  <div key={i} className={'community__post-slider__item'}>
                    <Image src={image} fill alt="" />
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
        <div className={styles['post__footer']}>
          <Button
            className={`${styles['button_like']} ${liked ? styles['liked'] : ''}`}
            icon={<Heart size={20} weight={liked ? 'fill' : 'regular'} />}
            onClick={onLikeClick}
          >
            {post.likes}개 좋아요
          </Button>
          <Link href={`/community/posts/${postId}`}>
            <Button className={styles['button']} icon={<ChatCenteredText size={20} />}>
              {post.comments}개의 댓글
            </Button>
          </Link>
        </div>

        {showComment && (
          <div className={styles['post__comment']}>
            <div className={styles['post__list_comments']}>
              <Comment name={post.user?.name || '나'} time="1시간 전" content="이번 주에 그를 방문할게요!" isMine />
              <Comment name={post.user?.name || '나'} time="1시간 전" content="이번 주에 그를 방문할게요!" />
              <Comment name={post.user?.name || '나'} time="1시간 전" content="이번 주에 그를 방문할게요!" />
              <Comment name={post.user?.name || '나'} time="1시간 전" content="이번 주에 그를 방문할게요!" />
            </div>
            <div className={styles['post__form']}>
              <Avatar className={styles['avatar']} size={48} src={'/dummy/navbar-profile.png'} />
              <Input
                className={styles['post__input']}
                placeholder="뭔가를 게시하세요..."
                suffix={
                  <Button
                    type="text"
                    icon={<PaperPlaneRight color="var(--color-primary-500)" weight="bold" />}
                  ></Button>
                }
              />
            </div>
          </div>
        )}
      </BaseBox>
      <ModalDelete
        isOpen={showModalDelete}
        onClose={() => {
          setShowModalDelete(false)
        }}
      />
    </>
  )
}

export default Post
