'use client'
import { Urbanist, Aleo, Hammersmith_One } from 'next/font/google'
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
import { AppProvider } from '@/shared/providers/AppProvider'

const urbanist = Urbanist({
  variable: '--font-urbainst',
  subsets: ['latin'],
})

const aleo = Aleo({
  variable: '--font-aleo',
  subsets: ['latin'],
})

const hammersmith_one = Hammersmith_One({
  variable: '--font-hammersmith_one',
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()
  const { id } = useParams()

  const accountPaths = [
    `/my-account`,
    `/my-account/bookmarked-feeds`,
    `/my-account/customer-service`,
    `/my-account/event`,
    `/my-account/event/${id}`,
    `/my-account/faq`,
    `/my-account/information`,
    `/my-account/information/${id}`,
    `/my-account/license-information`,
    `/my-account/notification-settings`,
    `/my-account/point-details`,
    `/my-account/terms-and-conditions`,
    `/my-account/license`,
  ]
  const communityPaths = [`/community`, `/community/posts/${id}`]
  const useNavbar = [
    `/`,
    `/shop`,
    `/reservation`,
    `/reservation/${id}`,
    `/shop/${id}/details`,
    `/cart`,
    `/community`,
    ...communityPaths,
    ...accountPaths,
  ].includes(pathName)
  const useFooter = [
    `/`,
    `/shop`,
    `/reservation`,
    `/reservation/${id}`,
    `/shop/${id}/details`,
    `/cart`,
    ...communityPaths,
    ...accountPaths,
  ].includes(pathName)
  const useHeroBgSolidGreen = [`/`].includes(pathName)
  const useHeroBgGradientGreen = [''].includes(pathName)
  const useNoContainer = ['/auth/login', '/shop', `/reservation`, `/cart`, ...communityPaths, ...accountPaths].includes(
    pathName,
  )

  const getLayoutClassName = () => {
    const layoutClasses: string[] = ['layout-wrapper']
    return layoutClasses.join(' ')
  }

  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${aleo.variable} ${hammersmith_one.variable}`}>
        <TanstackProvider>
          <AntdRegistry>
            <ConfigProvider>
              <AppProvider>
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
              </AppProvider>
            </ConfigProvider>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  )
}
