'use client'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BannerProfile } from '../../components/banner-profile/BannerProfile'
import { MenuKey } from '../../components/menu/Menu'
import { withMenu } from '../../hoc/withMenu'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { CaretLeft } from 'phosphor-react'
import { BaseInput } from '@/shared/components/base-input/BaseInput'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useCreateTicketMutation } from '@/shared/hooks/customer-service/useCustomerServiceMutation'
import {
  CUSTOMER_SERVICE_CATEGORY_MAP,
  CUSTOMER_SERVICE_CATEGORY_LABELS,
  type CustomerServiceCategory,
} from '@/shared/interface/customer-service'
import { ApiResponseError } from '@/api'
import { notification } from 'antd'

// # constants
const DEFAULT_CATEGORY: CustomerServiceCategory = 'inquiry-form'

// # helpers
const getCategoryFromParam = (param: string | null): CustomerServiceCategory => {
  if (!param) return DEFAULT_CATEGORY
  return CUSTOMER_SERVICE_CATEGORY_MAP[param] ?? DEFAULT_CATEGORY
}

const getCategoryLabel = (category: CustomerServiceCategory): string => {
  return CUSTOMER_SERVICE_CATEGORY_LABELS[category] ?? '문의'
}

export const CustomerServiceInquiryView = () => {
  const breadcrumbItems = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '고객센터',
    },
  ]
  return (
    <div>
      <BannerProfile breadcrumbItems={breadcrumbItems} />
      <Content />
    </div>
  )
}

const Content = withMenu(() => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [notificationApi, contextHolder] = notification.useNotification()
  const { largeScreen, isTablet } = useResponsive()
  const boxPadding = largeScreen ? 'spacing-48px' : isTablet ? 'spacing-24px' : 'spacing-16px'

  // # state
  const category = getCategoryFromParam(searchParams.get('category'))
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // # hooks
  const { mutate: createTicket, isPending } = useCreateTicketMutation()

  // # validation
  const isFormValid = title.trim().length > 0 && description.trim().length > 0

  // # handlers
  const handleSubmit = () => {
    if (!isFormValid) return

    createTicket(
      {
        category,
        title: title.trim(),
        description: description.trim(),
      },
      {
        onSuccess: () => {
          notificationApi.success({
            message: '문의 접수 완료',
            description: '문의사항이 성공적으로 접수되었습니다. 가입하신 이메일로 답변을 드립니다.',
          })
          router.push('/my-account/customer-service')
        },
        onError: (error) => {
          const apiError = error as unknown as ApiResponseError
          notificationApi.error({
            message: '문의 접수 실패',
            description: apiError?.message ?? '문의사항 접수 중 오류가 발생했습니다. 다시 시도해주세요.',
          })
        },
      },
    )
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  return (
    <BaseBox borderWidth={0} shadow="lg" padding={{ x: boxPadding, y: boxPadding }}>
      {contextHolder}
      <BaseFlex vertical gap="spacing-24px">
        <div>
          <BaseButton href="/my-account/customer-service" color="secondary-neutral" icon={<CaretLeft />}>
            반품
          </BaseButton>
        </div>
        <BaseTypography as="h6" size="subtitle1" weight="semibold">
          {getCategoryLabel(category)}
        </BaseTypography>

        <BaseFlex vertical gap="spacing-6px">
          <BaseTypography as="h6" size="body2" weight="medium">
            제목
          </BaseTypography>
          <BaseInput placeholder="제목 입력" value={title} onChange={handleTitleChange} disabled={isPending} />
        </BaseFlex>
        <BaseFlex vertical gap="spacing-6px">
          <BaseTypography as="h6" size="body2" weight="medium">
            내용
          </BaseTypography>
          <BaseFlex vertical gap="spacing-4px">
            <BaseTextarea
              placeholder="내용 입력"
              rows={5}
              value={description}
              onChange={handleDescriptionChange}
              disabled={isPending}
            />
            <BaseTypography as="h6" size="body2" weight="regular" color="neutral-500">
              문의사항을 작성해 주시면, 관리자가 확인 후,
            </BaseTypography>
            <BaseTypography as="h6" size="body2" weight="regular" color="neutral-500">
              순차적으로 가입하신 이메일로 답변을 드립니다.
            </BaseTypography>
          </BaseFlex>
        </BaseFlex>

        <BaseButton onClick={handleSubmit} disabled={!isFormValid || isPending} loading={isPending}>
          문의사항 전송
        </BaseButton>
      </BaseFlex>
    </BaseBox>
  )
}, MenuKey.CustomerService)
