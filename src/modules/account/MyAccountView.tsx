'use client'
import React, { useMemo, useState } from 'react'
import styles from './MyAccountView.module.scss'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import Image from 'next/image'
import { Avatar } from 'antd'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseMenu } from '@/shared/components/base-menu/BaseMenu'
import { PointEarned } from './features/point-earned/PointEarned'
import { Information } from './features/information/Information'
import { Event } from './features/event/Event'
import { CustomerService } from './features/customer-service/CustomerService'
import { Faq } from './features/faq/Faq'
import { BookmarkedFeeds } from './features/bookmarked-feeds/BookmarkedFeeds'
import { NotificationSettings } from './features/notification-settings/NotificationSettings'
import { TermsAndConditions } from './features/terms-and-conditions/TermsAndConditions'
import { License } from './features/license/License'
import { InformationDetail } from './features/information-detail/InformationDetail'
import { menuItems, MenuKey } from './MyAccountView.utils'
import { EventDetail } from './features/event-detail/EventDetail'

export const MyAccountView = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '정보',
    },
  ])

  const [selectedMenu, setSelectedMenu] = useState<MenuKey>(MenuKey['PointEarned'])
  const [id, setId] = useState<string | number>()

  const renderContentMenu = useMemo(() => {
    if (selectedMenu === MenuKey['Information']) {
      return <Information setSelectedMenu={setSelectedMenu} setId={setId} />
    }
    if (selectedMenu === MenuKey['InformationDetail']) {
      return <InformationDetail id={id} setId={setId} setSelectedMenu={setSelectedMenu} />
    }
    if (selectedMenu === MenuKey['Event']) {
      return <Event setSelectedMenu={setSelectedMenu} setId={setId} />
    }
    if (selectedMenu === MenuKey['EventDetail']) {
      return <EventDetail id={id} setId={setId} setSelectedMenu={setSelectedMenu} />
    }
    if (selectedMenu === MenuKey['CustomerService']) {
      return <CustomerService />
    }
    if (selectedMenu === MenuKey['Faq']) {
      return <Faq />
    }
    if (selectedMenu === MenuKey['BookmarkedFeed']) {
      return <BookmarkedFeeds />
    }
    if (selectedMenu === MenuKey['NotificationSettings']) {
      return <NotificationSettings />
    }
    if (selectedMenu === MenuKey['Terms']) {
      return <TermsAndConditions />
    }
    if (selectedMenu === MenuKey['License']) {
      return <License />
    }
    if (selectedMenu === MenuKey['Signout']) {
      confirm('are you sure?')
    }
    return <PointEarned />
  }, [selectedMenu, id])

  return (
    <div className={styles['my-account']}>
      <div className={styles['my-account__banner']}>
        <BaseContainer variant={1440}>
          <BaseFlex vertical gap="spacing-32px">
            <BaseBreadcrumb items={breadcrumbItems} color="white" />
            <BaseFlex gap="spacing-32px" justify="space-between" align="center">
              <BaseFlex gap="spacing-32px" align="center">
                <Avatar src={'/dummy/face02.png'} size={120} />
                <BaseFlex gap="spacing-8px" vertical>
                  <BaseTypography as="h6" size="header6" weight="semibold" color="white">
                    텡쿠 후안샤
                  </BaseTypography>
                  <BaseButton variant="link" icon={<ChevronRightIcon width={16} height={16} />} iconPosition="end">
                    계정 편집
                  </BaseButton>
                </BaseFlex>
              </BaseFlex>
              <BaseBadge
                icon={<Image src={'/icons/badge/color-result.svg'} width={24} height={24} alt="" />}
                variant={'pink-gradient'}
                padding={{ x: 'spacing-16px', y: 'spacing-8px' }}
              >
                가벼운 여름
              </BaseBadge>
            </BaseFlex>
          </BaseFlex>
        </BaseContainer>
      </div>
      <BaseContainer variant={1440} className={styles['my-account__content']}>
        <div className={styles['my-account__content__menu-wrapper']}>
          <BaseBox padding={{ x: 'spacing-16px', y: 'spacing-24px' }} radius="radius-16px" borderWidth={0} shadow="lg">
            <BaseMenu
              selectedKeys={
                selectedMenu === MenuKey['InformationDetail']
                  ? [MenuKey['Information']]
                  : selectedMenu === MenuKey['EventDetail']
                    ? [MenuKey['Event']]
                    : [selectedMenu]
              }
              items={menuItems(selectedMenu)}
              onSelect={(val) => setSelectedMenu(val.key as MenuKey)}
            />
          </BaseBox>
        </div>
        <div>{renderContentMenu}</div>
      </BaseContainer>
    </div>
  )
}
