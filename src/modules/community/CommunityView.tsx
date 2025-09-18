'use client'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Button } from 'antd'
import { CaretLeft } from 'phosphor-react'
import styles from './CommunityView.module.scss'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

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

const CommunityView = () => {
  const path = usePathname()
  const postId = path.split('/community/posts/')[1] || ''
  console.log(postId)

  return (
    <div className={styles['root']}>
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
              user={{
                name: '김사라',
                avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
              }}
              content="방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍"
              images={[dummyPhotos[0]]}
              likes={245}
              comments={32}
              time="1시간 전"
              showComment
            />
          ) : (
            <>
              <CreatePost />
              <Post
                isMine
                content="방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍"
                images={[]}
                likes={245}
                comments={32}
                time="1시간 전"
              />
              <Post
                user={{
                  name: '김사라',
                  avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                }}
                content="방금 이 놀라운 한국식 스킨케어 루틴을 시도해 봤어요! 효과가 정말 놀랍네요 😍"
                images={[dummyPhotos[0]]}
                likes={245}
                comments={32}
                time="1시간 전"
              />
              <Post
                user={{
                  name: '미셸 파크',
                  avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                }}
                content="완벽한 그라데이션 립 메이크업을 위한 단계별 튜토리얼을 소개합니다! 어떻게 생각하세요? 💄✨"
                images={dummyPhotos.slice(0, 2)}
                likes={178}
                comments={45}
                time="1시간 전"
              />
              <Post
                user={{
                  name: '정지사',
                  avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
                }}
                content="지역 마켓에서 찾은 놀라운 비즈니스 제품! 저렴하고 효과적이에요. 아래는 내 honest review입니다 👇"
                images={dummyPhotos}
                likes={156}
                comments={28}
                time="1시간 전"
              />
            </>
          )}
        </div>
        <div className={styles['community__side']}></div>
      </div>
    </div>
  )
}

export default CommunityView
