'use client'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { usePathname } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import styles from './CommunityView.module.scss'
import CreatePost from './components/CreatePost'
import ModalPost from './components/ModalPost'
import Post, { IPost, PostProps } from './components/Post'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useGetPostQuery } from '@/shared/hooks/community/useCommunityQuery'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import dayjs from 'dayjs'

const CommunityView = () => {
  const path = usePathname()
  const postId = path.split('/community/posts/')[1] || ''
  const [editPost, setEditPost] = useState<{
    showModal: boolean
    post: IPost
  }>({
    showModal: false,
    post: {
      id: 0,
      content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요',
      images: [],
      time: '1시간 전',
      likes: 245,
      comments: 32,
    },
  })
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  const { data: getPostData, isLoading: isGetPostLoading } = useGetPostQuery()

  return (
    <div className={styles['root']}>
      <BaseContainer variant={1440} padding={{ y: largeScreen ? 'spacing-40px' : 'spacing-0px' }}>
        <div className={styles['community']}>
          <div className={styles['community__side ']}>
            <BaseTypography as="p" size="caption">
              홈 / 커뮤니티
            </BaseTypography>
            <BaseButton
              color="secondary-neutral"
              href="/community"
              style={{ marginTop: 24 }}
              size="xl"
              icon={<CaretLeft weight="bold" />}
            >
              뒤로가기
            </BaseButton>
          </div>
          <div className={`${styles['community__content']} ${styles['community__posts']}`}>
            {postId ? (
              <Post
                post={{
                  id: 0,
                  user: {
                    name: '김사라',
                    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                  },
                  content: '방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍',
                  images: [],
                  likes: 245,
                  comments: 0,
                  time: '1시간 전',
                }}
              />
            ) : (
              <>
                <CreatePost />
                <BaseSpin spinning={isGetPostLoading}>
                  {getPostData?.map((post, i) => (
                    <Post
                      key={i}
                      onEdit={(post) => setEditPost({ showModal: true, post: post })}
                      bookmarked={false}
                      isMine={false}
                      post={{
                        id: post.id,
                        comments: 1,
                        content: post.description,
                        images: post.images.map((img) => img.url),
                        likes: post.likes_count,
                        time: dayjs(post.created_at).format('HH:mm DD MMM'),
                        user: {
                          name: post.owner.name,
                          avatar: '',
                        },
                      }}
                    />
                  ))}
                </BaseSpin>
              </>
            )}
          </div>
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
