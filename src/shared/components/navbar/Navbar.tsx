'use client'
import React, { useEffect, useState } from 'react'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography } from '../base-typography/BaseTypography'
import './Navbar.scss'
import Image from 'next/image'
import { BaseButton } from '../base-button/BaseButton'
import BellIcon from '../icons/BellIcon'
import MenuIcon from '../icons/MenuIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BaseContainer } from '../base-container/BaseContainer'
import { menuItems } from './Navbar.utils'
import { Avatar } from 'antd'

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const pathName = usePathname()
  const isAuthenticated = true
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 144) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`base-navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <BaseContainer variant={1440}>
        <BaseFlex gap="spacing-20px" justify="space-between" align="center">
          <div>
            <Link href={'/'}>
              <BaseTypography as="h1" variant="aleo" size="header5" weight="bold" color="neutral-700">
                Faceboard
              </BaseTypography>
            </Link>
          </div>
          <div>
            <BaseFlex gap="spacing-40px" className="base-navbar__menu">
              {menuItems.map((item, i) => {
                const isActive =
                  pathName === item.path ||
                  (item.path === '/' && pathName === '/shop') ||
                  (item.path === '/reservation' && pathName.includes('/reservation'))
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
                        {item.label}
                      </BaseTypography>
                    </Link>
                  </div>
                )
              })}
            </BaseFlex>
          </div>
          {isAuthenticated ? (
            <div>
              <BaseFlex gap="spacing-24px" align="center">
                <BaseFlex gap="spacing-16px" align="center">
                  <Avatar size={48} src={`/dummy/navbar-profile.png`} shape="circle" />
                  <div className={`base-navbar__profile-info`}>
                    <BaseTypography as="p" size="body1" lineClamp={2}>
                      <BaseTypography as="span" size="body1" weight="semibold">
                        정건우님 안녕하세요,
                      </BaseTypography>
                      페이스보드에 오신 것을 환영합니다J 👋🏻
                    </BaseTypography>
                  </div>
                </BaseFlex>
                <BaseFlex gap="spacing-20px" align="center">
                  <BaseButton size="xl" color="tertiary-neutral" shape="circle" icon={<BellIcon />} />
                  <BaseButton size="xl" color="tertiary-neutral" shape="circle" icon={<MenuIcon />} />
                  <BaseButton
                    size="xl"
                    color="tertiary-neutral"
                    shape="circle"
                    icon={<Image src={`/icons/stamp.svg`} width={24} height={24} alt="Stamp" />}
                  />
                </BaseFlex>
              </BaseFlex>
            </div>
          ) : (
            <div>
              <BaseButton color="tertiary" size="xl" href="/auth/login">
                로그인 / 회원가입
              </BaseButton>
            </div>
          )}
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
