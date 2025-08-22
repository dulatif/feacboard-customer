import { useMemo } from 'react'
import { Grid } from 'antd'

const { useBreakpoint } = Grid

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export const useResponsive = () => {
  const screens = useBreakpoint()

  const currentBreakpoint = useMemo<BreakpointType | null>(() => {
    if (!screens) return null

    if (screens.xxl) return 'xxl'
    if (screens.xl) return 'xl'
    if (screens.lg) return 'lg'
    if (screens.md) return 'md'
    if (screens.sm) return 'sm'
    if (screens.xs) return 'xs'

    return null
  }, [screens])

  const isMobile = useMemo(() => !!screens.xs && !screens.sm, [screens])
  const isTablet = useMemo(() => !!screens.sm && !screens.md, [screens])
  const isLaptop = useMemo(() => !!screens.md && !screens.lg, [screens])
  const isDesktop = useMemo(() => !!screens.lg, [screens])

  return {
    screens,
    currentBreakpoint,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
  }
}
