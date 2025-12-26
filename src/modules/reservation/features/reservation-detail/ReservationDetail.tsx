'use client'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import Image from 'next/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { CaretLeft, GasPump } from 'phosphor-react'
import React from 'react'
import { Status } from '../../ReservationView.utils'
import styles from './ReservationDetail.module.scss'
import { BaseAlert } from '@/shared/components/base-alert/BaseAlert'
import { Avatar, QRCode } from 'antd'
import NavigationIcon from '@/shared/components/icons/NavigationIcon'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useGetDetailOrderQuery } from '@/shared/hooks/order/useOrderQuery'
import { usePayOrderMutation } from '@/shared/hooks/order/useOrderMutation'

export const ReservationDetail = () => {
  const { largeScreen, isTablet, isMobile } = useResponsive()
  const router = useRouter()
  const { id } = useParams()
  const [breadcrumbItems, setBreadcrumbItems] = React.useState([
    {
      title: '홈',
    },
    {
      title: '예약 내역',
    },
    {
      title: '예약',
    },
    {
      title: '예약 상태',
    },
  ])
  const { data: getDetailOrderData, isLoading: isGetDetailOrderLoading } = useGetDetailOrderQuery({
    orderId: Number(id),
  })

  const { mutate: payOrderMutate, isPending: isPayingOrder } = usePayOrderMutation()

  const handlePayOrder = () => {
    if (getDetailOrderData?.id) {
      payOrderMutate(getDetailOrderData.id, {
        onSuccess: () => {
          // Optionally show success message or redirect
        },
        onError: (error) => {
          // Optionally show error message
          console.error('Error paying order:', error)
        },
      })
    }
  }

  const boxPadding = largeScreen ? 'spacing-48px' : 'spacing-20px'
  return (
    <div>
      <BaseFlex vertical gap={boxPadding} padding={{ y: largeScreen ? 'spacing-80px' : 'spacing-40px' }}>
        <BaseBreadcrumb items={breadcrumbItems} />
        <BaseBox padding={{ x: boxPadding, y: boxPadding }} borderColor="neutral-300">
          <BaseFlex vertical gap="spacing-48px">
            <div>
              <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft size={20} />}>
                프로필
              </BaseButton>
            </div>
            <BaseSpin spinning={isGetDetailOrderLoading}>
              <>
                {getDetailOrderData?.status === 'pending' ? (
                  <div className={styles['pending']}>
                    <BaseFlex vertical gap="spacing-32px" padding={{ y: 'spacing-64px' }} align="center">
                      <BaseSpin spinerLoading />
                      <BaseTypography as="p" size="body1" weight="semibold">
                        결제 페이지로 이동합니다
                      </BaseTypography>
                      <BaseBadge variant="warning-100" padding={{ x: 'spacing-16px', y: 'spacing-8px' }}>
                        결제 대기 중 {getDetailOrderData.start_at}
                      </BaseBadge>
                    </BaseFlex>
                    <BaseButton
                      size="lg"
                      style={{ width: 380 }}
                      onClick={handlePayOrder}
                      loading={isPayingOrder}
                      disabled={isPayingOrder}
                    >
                      지금 결제하세요
                    </BaseButton>
                  </div>
                ) : getDetailOrderData?.status === 'failed' ? (
                  <div className={styles['failed']}>
                    <BaseFlex vertical gap="spacing-24px" align="center">
                      <Image src="/icons/failed-payment.svg" width={48} height={48} alt="" />
                      <BaseTypography as="p" size="body1" weight="semibold" color="danger-500">
                        결제에 실패했습니다
                      </BaseTypography>
                      <BaseAlert
                        padding={{ x: 'spacing-16px' }}
                        message="결제가 거부되었습니다. 다시 시도하거나 다른 결제 방법을 시도해 보세요."
                      />
                      <BaseFlex vertical gap="spacing-16px" padding={{ x: 'spacing-32px', y: 'spacing-16px' }}>
                        <BaseTypography as="p" size="body1" weight="semibold" color="neutral-900">
                          왜 그런 일이 일어났을까?
                        </BaseTypography>
                        <BaseFlex vertical>
                          <BaseTypography as="p" size="body2" weight="regular" color="neutral-500">
                            1. 신호 문제
                          </BaseTypography>
                          <BaseTypography as="p" size="body2" weight="regular" color="neutral-500">
                            2. 결제 기간이 지났습니다.
                          </BaseTypography>
                          <BaseTypography as="p" size="body2" weight="regular" color="neutral-500">
                            3. 우리 시스템 오류
                          </BaseTypography>
                          <BaseTypography as="p" size="body2" weight="regular" color="neutral-500">
                            4. 시스템 기술 오류
                          </BaseTypography>
                        </BaseFlex>
                      </BaseFlex>
                    </BaseFlex>
                  </div>
                ) : getDetailOrderData?.status === 'in-progress' ||
                  getDetailOrderData?.status === 'paid' ||
                  getDetailOrderData?.status === 'completed' ? (
                  <div className={styles['completed']}>
                    <BaseFlex vertical gap="spacing-24px" align="center">
                      <Image src="/icons/success-payment.svg" width={48} height={48} alt="" />
                      <BaseTypography as="p" size="body1" weight="semibold" color="success-600">
                        결제가 성공적으로 완료되었습니다!
                      </BaseTypography>
                      {getDetailOrderData?.checkin_code ? (
                        <>
                          <BaseTypography as="p" size="subtitle2" weight="semibold" color="success-600">
                            예약 코드는 다음과 같습니다 : {getDetailOrderData.checkin_code}
                          </BaseTypography>
                          <QRCode
                            value={getDetailOrderData?.checkin_qr_string || getDetailOrderData.checkin_code}
                            size={196}
                          />
                        </>
                      ) : (
                        <BaseFlex vertical gap="spacing-16px" align="center">
                          <BaseAlert
                            padding={{ x: 'spacing-16px' }}
                            message="예약 코드를 찾을 수 없습니다. 고객 지원팀에 문의해 주세요."
                          />
                        </BaseFlex>
                      )}
                    </BaseFlex>
                    {getDetailOrderData?.status === 'in-progress' ? (
                      <BaseFlex vertical gap="spacing-24px" align="center">
                        {getDetailOrderData.provider_type === 'designer' && (
                          <BaseFlex gap="spacing-24px" justify="space-between" align="center" style={{ minWidth: 266 }}>
                            <BaseFlex vertical gap="spacing-8px">
                              <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                                디자이너
                              </BaseTypography>
                              <BaseFlex gap="spacing-8px" align="center">
                                <Avatar src={'/dummy/designer01.jpg'} style={{ background: '#CFC3A7' }} size={40} />
                                <BaseTypography as="p" size="body1" weight="medium">
                                  {getDetailOrderData.provider_name || '-'}
                                </BaseTypography>
                              </BaseFlex>
                            </BaseFlex>
                            <BaseFlex vertical gap="spacing-8px" align="flex-end">
                              <BaseFlex gap="spacing-8px" align="center">
                                <div>
                                  <BuildingsIcon width={20} height={20} color="#292D32" />
                                </div>
                                <BaseTypography as="p" size="body1" weight="medium">
                                  {getDetailOrderData.shop_name || '-'}
                                </BaseTypography>
                              </BaseFlex>
                              {getDetailOrderData.address && (
                                <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                                  {getDetailOrderData.address}
                                </BaseTypography>
                              )}
                            </BaseFlex>
                          </BaseFlex>
                        )}
                        {getDetailOrderData.provider_type === 'shop' && (
                          <BaseFlex vertical gap="spacing-8px" align="center">
                            <BaseFlex gap="spacing-8px" align="center">
                              <div>
                                <BuildingsIcon width={20} height={20} color="#292D32" />
                              </div>
                              <BaseTypography as="p" size="body1" weight="medium">
                                {getDetailOrderData.shop_name || '-'}
                              </BaseTypography>
                            </BaseFlex>
                            {getDetailOrderData.address && (
                              <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                                {getDetailOrderData.address}
                              </BaseTypography>
                            )}
                          </BaseFlex>
                        )}
                        {getDetailOrderData.address && (
                          <BaseButton
                            outlined
                            size="lg"
                            color="tertiary"
                            icon={<NavigationIcon width={16} height={16} />}
                            iconPosition="end"
                            onClick={() => {
                              // Open navigation with address
                              const address = encodeURIComponent(getDetailOrderData.address || '')
                              window.open(`https://maps.google.com/?q=${address}`, '_blank')
                            }}
                          >
                            길찾기
                          </BaseButton>
                        )}
                      </BaseFlex>
                    ) : (
                      <BaseFlex vertical={isMobile} gap="spacing-40px" align="center">
                        <BaseFlex vertical gap="spacing-8px" align={isMobile ? 'center' : 'flex-end'}>
                          <BaseFlex gap="spacing-8px" align="center">
                            <div>
                              <BuildingsIcon width={20} height={20} color="#292D32" />
                            </div>
                            <BaseTypography as="p" size="body1" weight="medium">
                              {getDetailOrderData?.shop_name || '-'}
                            </BaseTypography>
                          </BaseFlex>
                          {getDetailOrderData?.address && (
                            <BaseTypography as="p" size="caption" weight="regular" color="neutral-500">
                              {getDetailOrderData.address}
                            </BaseTypography>
                          )}
                        </BaseFlex>
                        {getDetailOrderData?.address && (
                          <BaseButton
                            outlined
                            size="lg"
                            color="tertiary"
                            icon={<NavigationIcon width={16} height={16} />}
                            iconPosition="end"
                            onClick={() => {
                              // Open navigation with address
                              const address = encodeURIComponent(getDetailOrderData?.address || '')
                              window.open(`https://maps.google.com/?q=${address}`, '_blank')
                            }}
                          >
                            길찾기
                          </BaseButton>
                        )}
                      </BaseFlex>
                    )}
                  </div>
                ) : null}
              </>
            </BaseSpin>
          </BaseFlex>
        </BaseBox>
      </BaseFlex>
    </div>
  )
}
