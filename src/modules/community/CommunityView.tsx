'use client'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Button } from 'antd'
import { CaretLeft } from 'phosphor-react'
import styles from './CommunityView.module.scss'
import Post, { IPost, PostProps } from './components/Post'
import CreatePost from './components/CreatePost'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import ModalPost from './components/ModalPost'
import { useState } from 'react'

const dummyPhotos = [
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
  '/dummy/community-post.jpg',
]

const dummyPosts: PostProps[] = [
  {
    post: {
      id: '1',
      content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍',
      images: [],
      likes: 245,
      comments: 32,
      time: '1시간 전',
    },
    isMine: true,
  },
  {
    post: {
      id: '2',
      user: {
        name: '김사라',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍',
      images: [dummyPhotos[0]],
      likes: 245,
      comments: 32,
      time: '1시간 전',
    },
  },
  {
    post: {
      id: '3',
      user: {
        name: '미셸 파크',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      },
      content: '완벽한 그라데이션 립 메이크업을 위한 단계별 튜토리얼을 소개합니다! 어떻게 생각하세요? 💄✨',
      images: dummyPhotos.slice(0, 2),
      likes: 178,
      comments: 45,
      time: '1시간 전',
    },
  },
  {
    post: {
      id: '4',
      user: {
        name: '정지사',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      },
      content: '지역 마켓에서 찾은 놀라운 비즈니스 제품! 저렴하고 효과적이에요. 아래는 내 honest review입니다 👇',
      images: dummyPhotos,
      likes: 156,
      comments: 28,
      time: '1시간 전',
    },
  },
]

const CommunityView = () => {
  const path = usePathname()
  const postId = path.split('/community/posts/')[1] || ''
  const [editPost, setEditPost] = useState<{
    showModal: boolean
    post: IPost
  }>({
    showModal: false,
    post: {
      id: postId,
      content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요',
      images: [],
      time: '1시간 전',
      likes: 245,
      comments: 32,
    },
  })

  return (
    <div className={styles['root']}>
      <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
        <div className={styles['community']}>
          <div className={styles['community__side']}>
            <BaseTypography as="p" size="caption">
              홈 / 커뮤니티
            </BaseTypography>
            <Link href="/community">
              <Button style={{ marginTop: 24 }} icon={<CaretLeft weight="bold" />}>
                뒤로가기
              </Button>
            </Link>
          </div>
          <div className={styles['community__content']}>
            {postId ? (
              <Post
                post={{
                  id: postId,
                  user: {
                    name: '김사라',
                    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                  },
                  content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍',
                  images: [dummyPhotos[0]],
                  likes: 245,
                  comments: 32,
                  time: '1시간 전',
                }}
                showComment
              />
            ) : (
              <>
                <CreatePost />
                {dummyPosts.map((post) => (
                  <Post key={post.post.id} onEdit={(post) => setEditPost({ showModal: true, post: post })} {...post} />
                ))}
              </>
            )}
          </div>
          <div className={styles['community__side']}></div>
        </div>
      </BaseContainer>

      <ModalPost
        action="update"
        show={editPost.showModal}
        post={editPost.post}
        onClose={() => setEditPost({ ...editPost, showModal: false })}
      />
    </div>
  )
}

export default CommunityView
