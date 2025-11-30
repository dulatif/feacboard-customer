'use client'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseMenu, MenuItem } from '@/shared/components/base-menu/BaseMenu'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { logout } from '@/shared/utils/auth'
import {
  Bookmark,
  Check,
  Coin1,
  InfoCircle,
  LogoutCurve,
  MessageSearch,
  Notification,
  ShieldTick,
  Stickynote,
  UserTag,
} from 'iconsax-reactjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './Menu.module.scss'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'

export enum MenuKey {
  PointDetails = 'point-details',
  Information = 'information',
  Event = 'event',
  CustomerService = 'customer-service',
  Faq = 'faq',
  BookmarkedFeed = 'bookmarked-feed',
  NotificationSettings = 'notification-settings',
  Terms = 'terms',
  License = 'license',
  Signout = 'signout',
}

export interface MenuProps {
  selectedMenu: MenuKey
}
export const Menu: React.FC<MenuProps> = ({ selectedMenu }) => {
  const router = useRouter()
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const handleLogout = () => {
    logout().then(() => {
      window.location.href = '/auth/login'
    })
  }

  const handleRedirect = (val: any) => {
    switch (val.key) {
      case MenuKey['PointDetails']:
        router.push('/my-account/point-details')
        break
      case MenuKey['Information']:
        router.push('/my-account/information')
        break
      case MenuKey['Event']:
        router.push('/my-account/event')
        break
      case MenuKey['CustomerService']:
        router.push('/my-account/customer-service')
        break
      case MenuKey['Faq']:
        router.push('/my-account/faq')
        break
      case MenuKey['BookmarkedFeed']:
        router.push('/my-account/bookmarked-feeds')
        break
      case MenuKey['NotificationSettings']:
        router.push('/my-account/notification-settings')
        break
      case MenuKey['Terms']:
        router.push('/my-account/terms-and-conditions')
        break
      case MenuKey['License']:
        router.push('/my-account/license')
        break
      case MenuKey['Signout']:
        handleLogout()
        break

      default:
        break
    }
  }
  return largeScreen ? (
    <BaseMenu selectedKeys={[selectedMenu]} items={menuItems(selectedMenu)} onSelect={handleRedirect} />
  ) : (
    <div className={styles['menu-wrapper']}>
      <BaseMenu
        mode="horizontal"
        selectedKeys={[selectedMenu]}
        items={menuItems(selectedMenu)}
        onSelect={handleRedirect}
      />
    </div>
  )
}

export const menuItems = (selectedMenu: MenuKey): MenuItem[] => {
  return [
    {
      key: MenuKey['PointDetails'],
      icon: selectedMenu === MenuKey['PointDetails'] ? <Coin1 variant="Bulk" /> : <Coin1 />,
      label: '포인트 내역',
    },
    {
      key: MenuKey['Information'],
      icon: selectedMenu === MenuKey['Information'] ? <InfoCircle variant="Bulk" /> : <InfoCircle />,
      label: '발표',
    },
    {
      key: MenuKey['Event'],
      icon: selectedMenu === MenuKey['Event'] ? <Stickynote variant="Bulk" /> : <Stickynote />,
      label: '이벤트',
    },
    {
      key: MenuKey['CustomerService'],
      icon: selectedMenu === MenuKey['CustomerService'] ? <UserTag variant="Bulk" /> : <UserTag />,
      label: '고객센터',
    },
    {
      key: MenuKey['Faq'],
      icon: selectedMenu === MenuKey['Faq'] ? <MessageSearch variant="Bulk" /> : <MessageSearch />,
      label: '자주묻는질문',
    },
    {
      key: MenuKey['BookmarkedFeed'],
      icon: selectedMenu === MenuKey['BookmarkedFeed'] ? <Bookmark variant="Bulk" /> : <Bookmark />,
      label: '북마크한 피드 조회',
    },
    {
      key: MenuKey['NotificationSettings'],
      icon: selectedMenu === MenuKey['NotificationSettings'] ? <Notification variant="Bulk" /> : <Notification />,
      label: '알림 설정',
    },
    {
      key: MenuKey['Terms'],
      icon: selectedMenu === MenuKey['Terms'] ? <ShieldTick variant="Bulk" /> : <ShieldTick />,
      label: '약관보기',
    },
    {
      key: MenuKey['License'],
      icon: selectedMenu === MenuKey['License'] ? <Check variant="Bulk" /> : <Check />,
      label: '라이선스 정보',
    },
    {
      key: MenuKey['Signout'],
      icon: <LogoutCurve />,
      label: '로그아웃',
    },
  ]
}
