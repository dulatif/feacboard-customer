'use client'
import { Urbanist, Aleo } from 'next/font/google'
import './globals.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TanstackProvider from '@/shared/providers/TanstackProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { useParams, usePathname } from 'next/navigation'
import { Navbar } from '@/shared/components/navbar/Navbar'
import { Footer } from '@/shared/components/footer/Footer'
import { ConfigProvider } from 'antd'

const urbanist = Urbanist({
  variable: '--font-urbainst',
  subsets: ['latin'],
})

const aleo = Aleo({
  variable: '--font-aleo',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()
  const { id } = useParams()
  const useNavbar = [`/`, `/shop`, `/reservation`, `/my-account`].includes(pathName)
  const useFooter = [`/`, `/shop`, `/reservation`, `/my-account`].includes(pathName)
  const useHeroBgSolidGreen = [`/`].includes(pathName)
  const useHeroBgGradientGreen = [''].includes(pathName)
  const useNoContainer = ['/auth/login', '/shop', `/reservation`, `/my-account`].includes(pathName)

  const getLayoutClassName = () => {
    const layoutClasses: string[] = ['layout-wrapper']
    return layoutClasses.join(' ')
  }

  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${aleo.variable}`}>
        <TanstackProvider>
          <AntdRegistry>
            <ConfigProvider>
              <div className={getLayoutClassName()}>
                {useHeroBgSolidGreen && <div className={`hero-bg solid-green`}></div>}
                {useHeroBgGradientGreen && <div className={`hero-bg gradient-green`}></div>}
                <div className={`content-wrapper ${useNavbar ? 'content-wrapper--with-navbar' : ''}`}>
                  {useNavbar && <Navbar />}
                  {useNoContainer ? children : <BaseContainer variant={1440}>{children}</BaseContainer>}
                  {useFooter && (
                    <div className="content__footer">
                      <Footer />
                    </div>
                  )}
                </div>
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  )
}
