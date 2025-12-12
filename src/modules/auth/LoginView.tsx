'use client'
import { ApiResponseError } from '@/api'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import ChevronRightIcon from '@/shared/components/icons/ChevronRightIcon'
import { useLoginGoogle } from '@/shared/hooks/useAuthMutation'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { APP_URL, AUTH_URL, DEV_APP_URL } from '@/shared/utils/url'
import { Divider, notification } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef } from 'react'
import styles from './LoginView.module.scss'

export const LoginView = () => {
  const params = useSearchParams()
  const { largeScreen, isTablet } = useResponsive()
  const callbackUrl = new URLSearchParams()
  const hasMutatedRef = useRef(false)
  const callbackAppUrl = useMemo(() => {
    const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost'
    return (isLocalhost ? DEV_APP_URL : APP_URL) + '/auth/google'
  }, [])
  callbackUrl.set('redirect', callbackAppUrl)

  const googleRedirectUrl = `${AUTH_URL}/google/redirect?${callbackUrl.toString()}`

  const handleLogin = (type: 'google' | 'kakao' | 'apple' | 'facebook') => {
    if (type === 'google') {
      // window.location.href = `${AUTH_URL}/google-oauth?redirectUrl=${APP_URL}/auth/callback`
      window.location.href = googleRedirectUrl
    }
  }

  const [notificationApi, contextHolder] = notification.useNotification()
  const loginGoogleMutation = useLoginGoogle()
  useEffect(() => {
    if (!!params.get('code') && !hasMutatedRef.current) {
      hasMutatedRef.current = true
      const callbackURLParams = `${callbackUrl.toString()}&${params.toString()}`
      loginGoogleMutation.mutate(callbackURLParams, {
        onError: (err: unknown) => {
          const error = err as ApiResponseError
          notificationApi.error({
            placement: 'topRight',
            message: error.message || '',
          })
        },
      })
    }
  }, [params, hasMutatedRef])

  return (
    <div className={styles['container']}>
      {contextHolder}
      <Link href={'/'} className={styles['logo']}>
        <BaseTypography as="h1" variant="aleo" size="header4" weight="bold" color="white">
          Faceboard
        </BaseTypography>
      </Link>
      {(largeScreen || isTablet) && (
        <div className={styles['banner']}>
          <BaseFlex vertical gap="spacing-20px" justify="space-between" className={styles['banner__content']}>
            <div></div>
            <div>
              <BaseFlex vertical gap="spacing-16px">
                <BaseTypography as="p" variant="aleo" size="header5" weight="medium" color="white">
                  정확한 색상 개인화를 통해 메이크업 선택 시 혼란스럽지 않습니다.
                </BaseTypography>
                <BaseTypography as="p" variant="urbanist" size="body1" weight="semibold" color="white">
                  켈리 윌리엄스
                </BaseTypography>
              </BaseFlex>
            </div>
          </BaseFlex>
        </div>
      )}
      <div className={styles['content']}>
        <BaseFlex
          vertical
          gap="spacing-32px"
          padding={{ x: 'spacing-48px', y: 'spacing-48px' }}
          className={styles['content__form']}
        >
          <BaseFlex vertical gap="spacing-8px">
            <BaseTypography as="h6" size="subtitle1" weight="semibold" color="neutral-700">
              환영합니다!
            </BaseTypography>
            <BaseTypography as="h6" size="body1" color="neutral-700">
              SNS에 로그인하다
            </BaseTypography>
          </BaseFlex>
          <BaseFlex vertical gap="spacing-24px">
            <BaseFlex vertical gap="spacing-8px">
              <BaseButton
                size="lg"
                color="secondary-neutral"
                variant="fullwidth"
                href="#"
                icon={<Image src={'/icons/sns/kakaotalk.svg'} width={24} height={24} alt="" />}
                iconPosition="start"
                className={`${styles['content__form__auth-button']} ${styles['--kakotalk']}`}
                onClick={() => handleLogin('kakao')}
              >
                카카오톡으로 계속하기
              </BaseButton>
              <BaseButton
                size="lg"
                color="secondary-neutral"
                variant="fullwidth"
                href="#"
                icon={<Image src={'/icons/sns/facebook.svg'} width={24} height={24} alt="" />}
                iconPosition="start"
                className={`${styles['content__form__auth-button']} ${styles['--facebook']}`}
                onClick={() => handleLogin('facebook')}
              >
                페이스북으로 계속하기
              </BaseButton>
              <BaseButton
                size="lg"
                color="secondary-neutral"
                variant="fullwidth"
                href="#"
                icon={<Image src={'/icons/sns/google.svg'} width={24} height={24} alt="" />}
                iconPosition="start"
                className={`${styles['content__form__auth-button']} ${styles['--google']}`}
                onClick={() => handleLogin('google')}
              >
                구글로 계속하기
              </BaseButton>
              <BaseButton
                size="lg"
                color="secondary-neutral"
                variant="fullwidth"
                href="#"
                icon={<Image src={'/icons/sns/apple.svg'} width={24} height={24} alt="" />}
                iconPosition="start"
                className={`${styles['content__form__auth-button']} ${styles['--apple']}`}
                onClick={() => handleLogin('apple')}
              >
                Apple로 계속하기
              </BaseButton>
            </BaseFlex>
            <Divider />
            <BaseFlex vertical gap="spacing-6px">
              <BaseTypography as="p" size="body2" weight="medium" color="neutral-500">
                미용실을 운영하시나요? 여기서 등록하세요
              </BaseTypography>
              <BaseButton
                size="lg"
                variant="fullwidth"
                href="#"
                icon={<ChevronRightIcon width={16} height={16} />}
                iconPosition="end"
                className={styles['content__form__link']}
              >
                살롱 목록
              </BaseButton>
            </BaseFlex>
            <BaseFlex vertical gap="spacing-6px">
              <BaseTypography as="p" size="body2" weight="medium" color="neutral-500">
                디자이너이신가요? 여기에서 등록하세요
              </BaseTypography>
              <BaseButton
                size="lg"
                variant="fullwidth"
                href="#"
                icon={<ChevronRightIcon width={16} height={16} />}
                iconPosition="end"
                className={styles['content__form__link']}
              >
                디자이너 목록
              </BaseButton>
            </BaseFlex>
          </BaseFlex>
        </BaseFlex>
      </div>
    </div>
  )
}
