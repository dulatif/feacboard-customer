import { BaseBadge, BaseBadgeProps } from '@/shared/components/base-badge/BaseBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import React from 'react'
import Image from 'next/image'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import ColorIcon from '@/shared/components/icons/ColorIcon'
import { BaseAlert } from '@/shared/components/base-alert/BaseAlert'
import SaveIcon from '@/shared/components/icons/SaveIcon'
import Edit02Icon from '@/shared/components/icons/Edit02Icon'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import CheckCircleIcon from '@/shared/components/icons/CheckCircleIcon'
import { BaseImage } from '@/shared/components/base-image/BaseImage'

type Category = 'ai-diagnosis' | 'manual-diagnosis'
type Status = 'in-progress' | 'completed' | 'failed'
type Result = 'light-summer' | 'gracie-fall'

const categoryMap: Record<Category, { label: string; icon: string; color: BaseBadgeProps['variant'] }> = {
  'ai-diagnosis': {
    label: 'AI 진단',
    icon: '/icons/badge/ai.svg',
    color: 'primary-25',
  },
  'manual-diagnosis': {
    label: '수동 진단',
    icon: '/icons/badge/manual.svg',
    color: 'secondary-25',
  },
}
const statusMap: Record<Status, { label: string; color: BaseBadgeProps['variant'] }> = {
  'in-progress': {
    label: '진행 중',
    color: 'success-100',
  },
  completed: {
    label: '완료',
    color: 'info-100',
  },
  failed: {
    label: '실패한',
    color: 'danger-100',
  },
}
const resultMap: Record<Result, { label: string; icon: string; color: BaseBadgeProps['variant'] }> = {
  'light-summer': {
    label: '가벼운 여름',
    icon: '/icons/badge/color-result.svg',
    color: 'pink-gradient',
  },
  'gracie-fall': {
    label: '그레이시 가을',
    icon: '/icons/badge/color-result.svg',
    color: 'brown-gradient',
  },
}
export interface ColorAnalystCardProps {
  data: {
    isMainPersonalColor: boolean
    category: Category
    date: string
    status: Status
    picture: string | null
    totalPrice: number | 'free'
    result: Result | null
    rate?: number
    isPaid: boolean
  }
}
export const ColorAnalystCard: React.FC<ColorAnalystCardProps> = ({ data }) => {
  const { isMainPersonalColor, picture, category, date, status, totalPrice, result, isPaid, rate } = data
  return (
    <BaseBox
      padding={{ x: 'spacing-24px', y: 'spacing-24px' }}
      radius="radius-16px"
      borderWidth={isMainPersonalColor ? 2 : 1}
      borderColor={isMainPersonalColor ? 'success-400' : 'neutral-300'}
    >
      <BaseFlex vertical gap="spacing-24px">
        {/* Main */}
        <BaseFlex vertical gap="spacing-16px">
          {/* Header */}
          <BaseFlex gap="spacing-24px" justify="space-between" align="center">
            <BaseFlex gap="spacing-24px" align="center">
              <BaseBadge
                icon={<Image src={categoryMap[category].icon} width={27} height={27} alt="" />}
                variant={categoryMap[category].color}
                padding={{ x: 'spacing-8px', y: 'spacing-8px' }}
              >
                {categoryMap[category].label}
              </BaseBadge>
              <BaseTypography as="p" size="body2" color="neutral-500">
                {date}
              </BaseTypography>
            </BaseFlex>
            <BaseBadge variant={statusMap[status].color}>{statusMap[status].label}</BaseBadge>
          </BaseFlex>
          {status === 'in-progress' && isPaid ? (
            <BaseAlert message="결제가 성공적으로 완료되었습니다. 지금 바로 AI 색상 분석을 시작하세요." />
          ) : status === 'failed' && !isPaid ? (
            <BaseAlert message="결제가 거부되었습니다. 다시 시도하거나 다른 결제 방법을 시도해 보세요." />
          ) : null}

          {/* Body */}
          <BaseFlex gap="spacing-24px" justify="space-between" align="flex-end">
            <BaseFlex gap="spacing-24px" align="center">
              <BaseImage src={picture} alt="" width={120} height={120} />
              <BaseFlex vertical gap="spacing-16px">
                {result ? (
                  <>
                    <BaseTypography as="p" size="caption" color="neutral-500">
                      결과
                    </BaseTypography>
                    <BaseBadge
                      icon={<Image src={resultMap[result].icon} width={27} height={27} alt="" />}
                      variant={resultMap[result].color}
                      padding={{ x: 'spacing-16px', y: 'spacing-8px' }}
                    >
                      {resultMap[result].label}
                    </BaseBadge>
                  </>
                ) : (
                  <BaseTypography as="p" size="caption" color="neutral-500">
                    아직 결과가 없습니다
                  </BaseTypography>
                )}
              </BaseFlex>
            </BaseFlex>
            <BaseTypography as="h6" size="header6" weight="bold" color="neutral-900">
              {totalPrice === 'free' ? '무료' : '총 가격 : ' + totalPrice + '원'}
            </BaseTypography>
          </BaseFlex>
        </BaseFlex>

        {/* Footer */}
        <BaseFlex align="flex-end" vertical gap="spacing-24px">
          {status === 'completed' ? (
            <>
              {isMainPersonalColor ? (
                <BaseFlex gap="spacing-24px">
                  <BaseButton size="2xl" color="tertiary">
                    결과 세부 정보 보기
                  </BaseButton>
                  <BaseButton size="2xl" color="success" icon={<CheckCircleIcon />}>
                    내 퍼스널 컬러로 설정하기
                  </BaseButton>
                </BaseFlex>
              ) : (
                <BaseFlex gap="spacing-24px">
                  <BaseButton size="2xl" color="tertiary">
                    결과 세부 정보 보기
                  </BaseButton>
                  <BaseButton size="2xl" icon={<SaveIcon />}>
                    내 주요 색상 개인으로 설정
                  </BaseButton>
                </BaseFlex>
              )}
              {rate ? (
                <BaseRate value={rate} allowHalf />
              ) : (
                <BaseFlex gap="spacing-8px" align="center">
                  <BaseTypography as="p" size="body1" color="success-500">
                    + 100점
                  </BaseTypography>
                  <BaseButton size="lg" icon={<Edit02Icon />}>
                    리뷰를 쓰다
                  </BaseButton>
                </BaseFlex>
              )}
            </>
          ) : status === 'in-progress' ? (
            <BaseButton icon={<ColorIcon />}>분석 시작</BaseButton>
          ) : null}
        </BaseFlex>
      </BaseFlex>
    </BaseBox>
  )
}
