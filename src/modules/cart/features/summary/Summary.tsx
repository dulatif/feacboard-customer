import React from 'react'
import styles from './Summary.module.scss'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseDivider } from '@/shared/components/base-divider/BaseDivider'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import ChevronLeftIcon from '@/shared/components/icons/ChevronLeftIcon'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import UserIcon from '@/shared/components/icons/UserIcon'
import PhoneIcon from '@/shared/components/icons/PhoneIcon'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { Avatar } from 'antd'
import BuildingsIcon from '@/shared/components/icons/BuildingsIcon'
import {
  CartServiceItemCard,
  CartServiceItemCardProps,
} from '../../components/cart-service-item-card/CartServiceItemCard'

export const Summary = () => {
  const data: CartServiceItemCardProps[] = [
    {
      image: '/dummy/service01.jpg',
      service: '헤어 스무딩',
      addons: `샴푸 + 3,000원`,
      normalPrice: 10000,
      discountPrice: 8000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 스무딩',
      normalPrice: 10000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 스무딩',
      normalPrice: 10000,
      discountPrice: 8000,
    },
    {
      image: '/dummy/service01.jpg',
      service: '헤어 스무딩',
      normalPrice: 10000,
    },
  ]
  return (
    <BaseContainer variant={1440}>
      <div className={styles['container']}>
        <div>
          <BaseBox padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <BaseFlex vertical gap="spacing-32px">
              <div>
                <BaseButton onClick={() => alert('back')} color="secondary-neutral" icon={<ChevronLeftIcon />}>
                  뒤로가기
                </BaseButton>
              </div>

              <BaseFlex vertical gap="spacing-8px">
                <BaseTypography as="p" size="caption" weight="regular">
                  예약 시간
                </BaseTypography>
                <BaseTypography as="p" size="subtitle2" weight="medium">
                  2025년 5월 25일 목요일 오후 3시 25분
                </BaseTypography>
              </BaseFlex>

              <BaseFlex vertical gap="spacing-24px">
                <BaseTypography as="p" size="body1" weight="semibold">
                  제품 서비스 정보
                </BaseTypography>
                <BaseFlex gap="spacing-24px" justify="space-between" align="center">
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
                  <BaseFlex vertical gap="spacing-8px" align="flex-end">
                    <BaseFlex gap="spacing-8px" align="center">
                      <div>
                        <BuildingsIcon width={20} height={20} color="#292D32" />
                      </div>
                      <BaseTypography as="p" size="body1" weight="medium">
                        강남 살롱
                      </BaseTypography>
                    </BaseFlex>
                    <BaseTypography as="p" size="caption" color="neutral-500">
                      서울 강남로 46
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>
              </BaseFlex>
              <BaseFlex vertical gap="spacing-16px">
                {data.map((e, i) => (
                  <CartServiceItemCard key={i} {...e} />
                ))}
              </BaseFlex>

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
                      정건우
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
                      010 – 1234 - 5678
                    </BaseTypography>
                  </BaseFlex>
                </BaseFlex>

                <BaseFlex vertical gap="spacing-6px">
                  <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                    메모
                  </BaseTypography>
                  <BaseFlex gap="spacing-8px" align="center" padding={{ x: 'spacing-16px', y: 'spacing-12px' }}>
                    <BaseTypography as="label" size="body2" weight="medium" color="neutral-700">
                      업체에 요청하실 내용을 적어주세요
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
                {[
                  { title: '소계', total: 24000 },
                  { title: '동전 적용', total: -3000 },
                ].map((e, i) => (
                  <BaseFlex key={i} justify="space-between" gap="spacing-24px">
                    <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                      {e.title}
                    </BaseTypography>
                    <BaseTypography as="p" size="body1" weight="semibold" color="neutral-500">
                      {e.total} 원
                    </BaseTypography>
                  </BaseFlex>
                ))}
                <BaseDivider />
                <BaseFlex justify="space-between" gap="spacing-24px">
                  <BaseTypography as="p" size="body1" weight="semibold">
                    총
                  </BaseTypography>
                  <BaseTypography as="p" size="body1" weight="semibold">
                    21000 원
                  </BaseTypography>
                </BaseFlex>
                <BaseButton variant="fullwidth">계속 결제하기</BaseButton>
              </BaseFlex>
            </BaseFlex>
          </BaseBox>
        </div>
      </div>
    </BaseContainer>
  )
}
