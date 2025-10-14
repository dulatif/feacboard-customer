import { isValidJwt } from '@/shared/utils/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/auth/login', '/shop']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isPublic = publicRoutes.some((path) => pathname.startsWith(path))
  const token = req.cookies.get('token')?.value

  if (isPublic) {
    if (token) return NextResponse.redirect(new URL('/', req.url))
    return NextResponse.next()
  }

  if (!token || !isValidJwt(token)) {
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
