'use client'
import { dummyPosts } from '@/modules/community/CommunityView'
import Post from '@/modules/community/components/Post'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { MagnifyingGlass } from 'phosphor-react'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { Divider } from 'antd'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const BookmarkedFeedsView = () => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '정보',
    },
  ]
  return (
    <div>
      <BannerProfile breadcrumbItems={breadcrumbItems} />
      <Content />
    </div>
  )
}

const Content = withMenu(() => {
  const bookmarkedPost = dummyPosts.filter((post) => !post.isMine)
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'
  return (
    <div>
      <BaseBox padding={{ x: boxPadding, y: boxPadding }}>
        <BaseInput
          placeholder="검색"
          prefix={<MagnifyingGlass size={20} color="#667085" />}
          style={{ marginBottom: '40px' }}
        />
        {bookmarkedPost.map((post, i) => (
          <>
            <Post key={post.post.id} bookmarked {...post} />

            {i < bookmarkedPost.length - 1 && <Divider style={{ borderWidth: '2px', marginBottom: '44px' }} />}
          </>
        ))}
      </BaseBox>
    </div>
  )
}, MenuKey.BookmarkedFeed)
