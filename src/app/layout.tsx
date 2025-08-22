'use client'
import { Urbanist, Aleo } from 'next/font/google'
import './globals.scss'
import TanstackProvider from '@/shared/providers/TanstackProvider'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import BaseContainer from '@/shared/components/base-container/BaseContainer'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/shared/components/navbar/Navbar'
import { Footer } from '@/shared/components/footer/Footer'

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
  const useNavbar = [`/`].includes(pathName)
  const useFooter = [`/`].includes(pathName)
  const useHeroBg = [`/`].includes(pathName)

  const getLayoutClassName = () => {
    const layoutClasses: string[] = ['layout-wrapper']
    return layoutClasses.join(' ')
  }

  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${aleo.variable}`}>
        <TanstackProvider>
          <AntdRegistry>
            <div className={getLayoutClassName()}>
              {useHeroBg && <div className="hero-bg"></div>}
              <div className="content-wrapper">
                {useNavbar && <Navbar />}
                <BaseContainer>{children}</BaseContainer>
                {useFooter && (
                  <div className="content__footer">
                    <Footer />
                  </div>
                )}
              </div>
            </div>
          </AntdRegistry>
        </TanstackProvider>
      </body>
    </html>
  )
}
