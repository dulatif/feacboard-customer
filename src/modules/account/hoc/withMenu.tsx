import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { Menu, MenuKey } from '../components/menu/Menu'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import styles from './withMenu.module.scss'
import { useResponsive } from '@/shared/hooks/useResponsive'

export const withMenu = <P extends object>(WrappedComponent: React.ComponentType<P>, selectedMenu: MenuKey) => {
  const WithMenuComponent: React.FC<P> = (props) => {
    const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
    return (
      <BaseContainer variant={1440} className={styles['with-menu-container']}>
        <div className={styles['with-menu-container__menu-wrapper']}>
          <BaseBox padding={{ x: 'spacing-16px', y: 'spacing-24px' }} radius="radius-16px" borderWidth={0} shadow="lg">
            <Menu selectedMenu={selectedMenu} />
          </BaseBox>
        </div>
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <WrappedComponent {...props} />
        </div>
      </BaseContainer>
    )
  }
  WithMenuComponent.displayName = `withMenu(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
  return WithMenuComponent
}
