'use client'
import { usePathname, useRouter } from 'next/navigation'

const MyAccount = () => {
  const pathname = usePathname()
  const router = useRouter()
  if (['/my-account', '/my-account/'].includes(pathname)) {
    router.push('/my-account/point-details')
  }
  return null
}

export default MyAccount
