import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.scss'

const urbanist = Urbanist({
  variable: '--font-urbainst',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Faceboard',
  description: '-',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>{children}</body>
    </html>
  )
}
