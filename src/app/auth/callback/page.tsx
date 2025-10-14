'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { isValidJwt, login } from '@/shared/utils/auth'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'

const Callback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  useEffect(() => {
    const token = searchParams.get('accessToken')
    const refreshToken = searchParams.get('refreshToken')

    if (token && isValidJwt(token) && refreshToken && isValidJwt(refreshToken)) {
      login(token, refreshToken).then((res) => {
        if (res.status === 'success') {
          router.replace('/')
        } else {
          router.replace('/auth/login')
        }
      })
    } else {
      router.replace('/auth/login')
    }
  }, [searchParams, router])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BaseSpin size="large" />
    </div>
  )
}

export default Callback
