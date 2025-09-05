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
import Image from 'next/image'

export enum MenuKey {
  PointEarned = 'point-earned',
  Information = 'information',
  InformationDetail = 'information-detail',
  Event = 'event',
  EventDetail = 'event-detail',
  CustomerService = 'customer-service',
  Faq = 'faq',
  BookmarkedFeed = 'bookmarked-feed',
  NotificationSettings = 'notification-settings',
  Terms = 'terms',
  License = 'license',
  Signout = 'signout',
}

export const menuItems = (selectedMenu: MenuKey): MenuItem[] => {
  return [
    {
      key: MenuKey['PointEarned'],
      icon:
        selectedMenu === MenuKey['PointEarned'] ? (
          <Image src={'/icons/account/point-filled.png'} width={24} height={24} alt="" />
        ) : (
          <Image src={'/icons/account/point.png'} width={24} height={24} alt="" />
        ),
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
