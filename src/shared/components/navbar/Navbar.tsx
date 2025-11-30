'use client'
import { useApp } from '@/shared/providers/AppProvider'
import { Avatar, MenuProps } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BaseButton } from '../base-button/BaseButton'
import { BaseContainer } from '../base-container/BaseContainer'
import { BaseDropdown } from '../base-dropdown/BaseDropdown'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography } from '../base-typography/BaseTypography'
import BellIcon from '../icons/BellIcon'
import './Navbar.scss'
import { menuItems } from './Navbar.utils'
import { useResponsive } from '@/shared/hooks/useResponsive'

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { t } = useTranslation()
  const pathName = usePathname()
  const { language, setLanguage, isAuthenticated } = useApp()
  const { largeScreen, isDesktop, isTablet, isMobile } = useResponsive()

  // START HANDLE SCROLL
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // END HANDLE SCROLL

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <BaseFlex gap="spacing-8px">
          <BaseTypography as="p" size="body1">
            한국어
          </BaseTypography>
        </BaseFlex>
      ),
      onClick: () => {
        setLanguage('ko')
      },
    },
    {
      key: '2',
      label: (
        <BaseFlex gap="spacing-8px">
          <BaseTypography as="p" size="body1">
            English
          </BaseTypography>
        </BaseFlex>
      ),
      onClick: () => {
        setLanguage('en')
      },
    },
  ]

  return (
    <div className={`base-navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <BaseContainer variant={1440}>
        <BaseFlex gap={largeScreen ? 'spacing-20px' : 'spacing-12px'} justify="space-between" align="center">
          <div>
            <Link href={'/'}>
              <BaseTypography
                as="h1"
                variant="hammersmith_one"
                size={largeScreen ? 'header5' : 'header6'}
                weight="regular"
                color="neutral-700"
              >
                Faceboard
              </BaseTypography>
            </Link>
          </div>
          {largeScreen && (
            <div>
              <BaseFlex gap={isDesktop ? 'spacing-40px' : 'spacing-20px'} className="base-navbar__menu">
                {menuItems.map((item, i) => {
                  const isActive =
                    pathName === item.path ||
                    (item.path === '/' && pathName === '/shop') ||
                    (item.path === '/reservation' && pathName.includes('/reservation')) ||
                    (item.path === '/my-account' && pathName.includes('/my-account'))
                  return (
                    <div
                      key={i}
                      className={`base-navbar__menu__item ${isActive ? 'base-navbar__menu__item--active' : ''}`}
                    >
                      <Link href={item.path}>
                        <BaseTypography
                          as="p"
                          size="body1"
                          weight={isActive ? 'semibold' : 'regular'}
                          color={isActive ? 'neutral-900' : undefined}
                        >
                          {t(item.labelKey)}
                        </BaseTypography>
                      </Link>
                    </div>
                  )
                })}
              </BaseFlex>
            </div>
          )}
          {isAuthenticated ? (
            <div>
              <BaseFlex gap={isDesktop ? 'spacing-24px' : 'spacing-8px'} align="center">
                <BaseFlex gap={isDesktop ? 'spacing-16px' : 'spacing-8px'} align="center">
                  <Avatar size={largeScreen ? 48 : 36} src={`/dummy/navbar-profile.png`} shape="circle" />
                  {largeScreen && (
                    <div className={`base-navbar__profile-info`}>
                      <BaseFlex vertical gap="spacing-0px">
                        <BaseTypography as="span" size="caption" color="neutral-500">
                          {t(`navbar.profile.hello`)}
                        </BaseTypography>
                        <BaseTypography as="span" size="body1" weight="semibold">
                          텡쿠 후안샤 👋🏻
                        </BaseTypography>
                      </BaseFlex>
                    </div>
                  )}
                </BaseFlex>
                <BaseFlex gap={isDesktop ? 'spacing-20px' : 'spacing-8px'} align="center">
                  <BaseButton
                    size={largeScreen ? 'lg' : 'sm'}
                    color="secondary-neutral"
                    shape="circle"
                    icon={<BellIcon width={largeScreen ? 24 : 12} height={largeScreen ? 24 : 12} />}
                  />
                  <BaseButton
                    size={largeScreen ? 'lg' : 'sm'}
                    color="secondary-neutral"
                    shape="circle"
                    icon={
                      <Image
                        src={`/icons/stamp.svg`}
                        width={largeScreen ? 24 : 12}
                        height={largeScreen ? 24 : 12}
                        alt="Stamp"
                      />
                    }
                  />
                  <BaseDropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                    <BaseButton
                      size={largeScreen ? 'lg' : 'sm'}
                      color="secondary-neutral"
                      shape="circle"
                      icon={
                        <Image
                          src={language === 'ko' ? `/icons/flags/korea.svg` : `/icons/flags/uk.svg`}
                          width={largeScreen ? 24 : 12}
                          height={largeScreen ? 24 : 12}
                          alt="Stamp"
                        />
                      }
                    />
                  </BaseDropdown>
                </BaseFlex>
              </BaseFlex>
            </div>
          ) : (
            <BaseFlex gap="spacing-20px" align="center">
              <BaseButton color="tertiary" size="xl" href="/auth/login">
                로그인 / 회원가입
              </BaseButton>
              <BaseDropdown menu={{ items }} trigger={['click']} placement="bottomRight">
                <BaseButton
                  size="xl"
                  color="tertiary-neutral"
                  shape="circle"
                  icon={
                    <Image
                      src={language === 'ko' ? `/icons/flags/korea.svg` : `/icons/flags/us.svg`}
                      width={24}
                      height={24}
                      alt="Stamp"
                    />
                  }
                />
              </BaseDropdown>
            </BaseFlex>
          )}
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
