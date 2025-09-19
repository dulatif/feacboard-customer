'use client'
import { BaseMenu } from '@/shared/components/base-menu/BaseMenu'
import React, { SetStateAction } from 'react'
import { MenuItem } from '@/shared/components/base-menu/BaseMenu'
import PointIcon from '@/shared/components/icons/PointIcon'
import InformationIcon from '@/shared/components/icons/InformationIcon'
import EventIcon from '@/shared/components/icons/EventIcon'
import CustomerServiceIcon from '@/shared/components/icons/CustomerServiceIcon'
import FaqIcon from '@/shared/components/icons/FaqIcon'
import BookmarkIcon from '@/shared/components/icons/BookmarkIcon'
import BellIcon from '@/shared/components/icons/BellIcon'
import VerifiedIcon from '@/shared/components/icons/VerifiedIcon'
import SettingIcon from '@/shared/components/icons/SettingIcon'
import SignOutIcon from '@/shared/components/icons/SignOutIcon'
import InformationFilledIcon from '@/shared/components/icons/InformationFilledIcon'
import EventFilledIcon from '@/shared/components/icons/EventFilledIcon'
import CustomerServiceFilledIcon from '@/shared/components/icons/CustomerServiceFilledIcon'
import FaqFilledIcon from '@/shared/components/icons/FaqFilledIcon'
import BookmarkFilledIcon from '@/shared/components/icons/BookmarkFilledIcon'
import BellFilledIcon from '@/shared/components/icons/BellFilledIcon'
import VerifiedFilledIcon from '@/shared/components/icons/VerifiedFilledIcon'
import SettingFilledIcon from '@/shared/components/icons/SettingFilledIcon'
import PointFilledIcon from '@/shared/components/icons/PointFilledIcon'
import { useRouter } from 'next/navigation'
import { logout } from '@/shared/utils/auth'

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
  return <BaseMenu selectedKeys={[selectedMenu]} items={menuItems(selectedMenu)} onSelect={handleRedirect} />
}

export const menuItems = (selectedMenu: MenuKey): MenuItem[] => {
  return [
    {
      key: MenuKey['PointDetails'],
      icon: selectedMenu === MenuKey['PointDetails'] ? <PointFilledIcon /> : <PointIcon />,
      label: '포인트 내역',
    },
    {
      key: MenuKey['Information'],
      icon: selectedMenu === MenuKey['Information'] ? <InformationFilledIcon /> : <InformationIcon />,
      label: '발표',
    },
    {
      key: MenuKey['Event'],
      icon: selectedMenu === MenuKey['Event'] ? <EventFilledIcon /> : <EventIcon />,
      label: '이벤트',
    },
    {
      key: MenuKey['CustomerService'],
      icon: selectedMenu === MenuKey['CustomerService'] ? <CustomerServiceFilledIcon /> : <CustomerServiceIcon />,
      label: '고객센터',
    },
    {
      key: MenuKey['Faq'],
      icon: selectedMenu === MenuKey['Faq'] ? <FaqFilledIcon /> : <FaqIcon />,
      label: '자주묻는질문',
    },
    {
      key: MenuKey['BookmarkedFeed'],
      icon: selectedMenu === MenuKey['BookmarkedFeed'] ? <BookmarkFilledIcon /> : <BookmarkIcon />,
      label: '북마크한 피드 조회',
    },
    {
      key: MenuKey['NotificationSettings'],
      icon: selectedMenu === MenuKey['NotificationSettings'] ? <BellFilledIcon /> : <BellIcon />,
      label: '알림 설정',
    },
    {
      key: MenuKey['Terms'],
      icon: selectedMenu === MenuKey['Terms'] ? <VerifiedFilledIcon /> : <VerifiedIcon />,
      label: '약관보기',
    },
    {
      key: MenuKey['License'],
      icon: selectedMenu === MenuKey['License'] ? <SettingFilledIcon /> : <SettingIcon />,
      label: '라이선스 정보',
    },
    {
      key: MenuKey['Signout'],
      icon: <SignOutIcon />,
      label: '로그아웃',
    },
  ]
}
