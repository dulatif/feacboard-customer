import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authRoutes = ['/auth/login']
const publicRoutes = ['/shop']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAuthRoutes = authRoutes.some((path) => pathname.startsWith(path))
  const isPublicRoutes = publicRoutes.some((path) => pathname.startsWith(path))
  const token = req.cookies.get('token')?.value

  if (isPublicRoutes) {
    return NextResponse.next()
  }
  if (isAuthRoutes) {
    if (token) return NextResponse.redirect(new URL('/', req.url))
    return NextResponse.next()
  }

  if (!token) {
    const loginUrl = new URL('/auth/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/ai-diagnosis/:path*',
    '/auth/login',
    '/cart/:path*',
    '/community/:path*',
    '/designer/:path*',
    '/message/:path*',
    '/my-account/:path*',
    '/reservation/:path*',
    '/review/:path*',
    '/shop/:path*',
  ],
}
