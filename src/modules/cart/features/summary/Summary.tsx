import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import PhoneIcon from '@/shared/components/icons/PhoneIcon'
import UserIcon from '@/shared/components/icons/UserIcon'
import { useApp } from '@/shared/providers/AppProvider'
import { Avatar } from 'antd'
import { CartServiceItemCard } from '../../components/cart-service-item-card/CartServiceItemCard'
import styles from './Summary.module.scss'
import { formatNumberCurrency } from '@/shared/utils/number'
import { useMemo } from 'react'
import { useCreateOrderMutation } from '@/shared/hooks/order/useOrderMutation'
import { useRouter } from 'next/navigation'

export interface SummaryProps {
  onBack: () => void
}
export const Summary: React.FC<SummaryProps> = ({ onBack }) => {
  const { appointment } = useApp()
  const total = useMemo(() => {
    return appointment?.data?.items.reduce((total, item) => {
      return total + Number(item.service.price)
    }, 0)
  }, [appointment?.data?.items])

  const router = useRouter()
  const { mutate: createOrderMutate, isPending: isCreateOrderPending } = useCreateOrderMutation()
  const handleSubmit = () => {
    createOrderMutate(undefined, {
      onSuccess: () => {
        router.push('/reservation')
      },
    })
  }

  return (
    <BaseContainer variant={1440}>
      <div className={styles['container']}>
        <div>
          <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <BaseFlex vertical gap="spacing-32px">
              <div>
                <BaseButton onClick={onBack} color="secondary-neutral" icon={<ChevronLeftIcon />}>
                  뒤로가기
                </BaseButton>
              </div>

              <BaseFlex vertical gap="spacing-8px">
                <BaseTypography as="p" size="caption" weight="regular">
                  예약 시간
                </BaseTypography>
                <BaseTypography as="p" size="subtitle2" weight="medium">
                  {appointment?.data?.date || ''} {appointment?.data?.start_at || ''}
                </BaseTypography>
              </BaseFlex>

              <BaseFlex vertical gap="spacing-24px">
                <BaseTypography as="p" size="body1" weight="semibold">
                  제품 서비스 정보
                </BaseTypography>
                <BaseFlex gap="spacing-24px" justify="space-between" align="center">
                  {appointment?.data?.provider_type === 'designer' ? (
                    <BaseFlex vertical gap="spacing-8px">
                      <BaseTypography as="p" size="caption" color="neutral-500">
                        디자이너
                      </BaseTypography>
                      <BaseFlex gap="spacing-8px" align="center">
                        <Avatar src={'/dummy/face03.png'} style={{ background: '#CFC3A7' }} size={40} />
                        <BaseTypography as="p" size="body1" weight="medium">
                          강남 살롱
                        </BaseTypography>
                      </BaseFlex>
                    </BaseFlex>
                  ) : (
                    <div />
                  )}
                  <BaseFlex vertical gap="spacing-8px" align="flex-end">
                    <BaseFlex gap="spacing-8px" align="center">
                      <div>
                        <BuildingsIcon width={20} height={20} color="#292D32" />
                      </div>
                      <BaseTypography as="p" size="body1" weight="medium">
                        {appointment?.data?.provider.name || ''}
                      </BaseTypography>
                    </BaseFlex>
                    <BaseTypography as="p" size="caption" color="neutral-500">
                      {appointment?.data?.provider.address || ''}
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>
              </BaseFlex>

              {appointment?.data && (
                <BaseFlex vertical gap="spacing-16px">
                  {appointment?.data.items.map((e, i) => (
                    <CartServiceItemCard
                      key={i}
                      id={Number(e.id)}
                      image={e.service.image}
                      normalPrice={Number(e.service.price)}
                      service={e.service.name}
                      addons=""
                      discountPrice={0}
                    />
                  ))}
                </BaseFlex>
              )}

              <BaseFlex vertical gap="spacing-24px">
                <BaseTypography as="p" size="body1" weight="semibold">
                  예약자 정보
                </BaseTypography>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    예약자명
                  </BaseTypography>
                  <BaseFlex gap="spacing-8px" align="center" padding={{ x: 'spacing-16px', y: 'spacing-12px' }}>
                    <UserIcon width={20} height={20} />
                    <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                      {appointment?.data?.name}
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    휴대폰 번호
                  </BaseTypography>
                  <BaseFlex gap="spacing-8px" align="center" padding={{ x: 'spacing-16px', y: 'spacing-12px' }}>
                    <PhoneIcon width={20} height={20} />
                    <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                      {appointment?.data?.phone}
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    메모
                  </BaseTypography>
                  <BaseFlex gap="spacing-8px" align="center" padding={{ x: 'spacing-16px', y: 'spacing-12px' }}>
                    <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                      {appointment?.data?.note || '-'}
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>
              </BaseFlex>
            </BaseFlex>
          </BaseBox>
        </div>
        <div>
          <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <BaseFlex vertical gap="spacing-40px">
              <BaseTypography as="p" size="body1" weight="semibold">
                결제 요약
              </BaseTypography>
              <BaseFlex vertical gap="spacing-24px">
                {appointment?.data?.items
                  .map((e) => ({
                    title: e.service.name,
                    total: e.service.price,
                  }))
                  .map((e, i) => (
                    <BaseFlex key={i} justify="space-between" gap="spacing-24px">
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {e.title}
                      </BaseTypography>
                      <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                        {formatNumberCurrency(Number(e.total))} 원
                      </BaseTypography>
                    </BaseFlex>
                  ))}
                <BaseDivider />
                <BaseFlex justify="space-between" gap="spacing-24px">
                  <BaseTypography as="p" size="body1" weight="semibold">
                    총
                  </BaseTypography>
                  <BaseTypography as="p" size="body1" weight="semibold">
                    {formatNumberCurrency(Number(total))} 원
                  </BaseTypography>
                </BaseFlex>
                <BaseButton variant="fullwidth" onClick={handleSubmit} loading={isCreateOrderPending}>
                  계속 결제하기
                </BaseButton>
              </BaseFlex>
            </BaseFlex>
          </BaseBox>
        </div>
      </div>
    </BaseContainer>
  )
}
