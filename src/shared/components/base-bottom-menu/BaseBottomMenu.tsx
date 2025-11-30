'use client'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useApp } from '@/shared/providers/AppProvider'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { BaseFlex } from '../base-flex/BaseFlex'
import { BaseTypography } from '../base-typography/BaseTypography'
import { menuItems } from '../navbar/Navbar.utils'
import './BaseBottomMenu.scss'
import { BaseContainer } from '../base-container/BaseContainer'
import '../navbar/Navbar.scss'

export const BaseBottomMenu = () => {
  const { t } = useTranslation()
  const pathName = usePathname()
  const { language, setLanguage, isAuthenticated } = useApp()
  const { largeScreen, isDesktop, isTablet, isMobile } = useResponsive()
  return (
    <div className="base-bottom-menu">
      <BaseContainer variant={1440}>
        <BaseFlex gap="spacing-0px" justify="space-between" className="base-navbar__menu">
          {menuItems.map((item, i) => {
            const isActive =
              pathName === item.path ||
              (item.path === '/' && pathName === '/shop') ||
              (item.path === '/reservation' && pathName.includes('/reservation')) ||
              (item.path === '/my-account' && pathName.includes('/my-account'))
            const Icon = item.icon
            return (
              <div key={i} className={`base-navbar__menu__item ${isActive ? 'base-navbar__menu__item--active' : ''}`}>
                <Link href={item.path}>
                  <BaseFlex
                    vertical
                    align="center"
                    gap="spacing-4px"
                    className={`base-navbar__menu__item ${isActive ? 'base-navbar__menu__item--active' : ''}`}
                  >
                    <Icon variant={isActive ? 'Bulk' : 'Outline'} color={isActive ? '#49C3D0' : '#667085'} size={16} />
                    <BaseTypography
                      as="p"
                      size="caption"
                      weight={isActive ? 'semibold' : 'regular'}
                      color={isActive ? 'primary-600' : 'neutral-500'}
                    >
                      {t(item.labelKey)}
                    </BaseTypography>
                  </BaseFlex>
                </Link>
              </div>
            )
          })}
        </BaseFlex>
      </BaseContainer>
    </div>
  )
}
