'use client'
import { BaseBadge } from '@/shared/components/base-badge/BaseBadge'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { useGetDetailOrderQuery } from '@/shared/hooks/order/useOrderQuery'
import { Avatar, notification, Space } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import ModalCancelReview from '../components/ModalCancelReview'
import ReviewRatingRow from '../components/ReviewRatingRow'
import ReviewTypeButton, { reviewTypes } from '../components/ReviewTypeButton'
import UploadReviewPhotos from '../components/UploadReviewPhotos'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { StoreReviewBody } from '@/shared/interface/review'
import { useStoreReviewMutation } from '@/shared/hooks/review/useReviewMutation'

export const OrderReviewView = () => {
  const { id } = useParams()
  const router = useRouter()
  const [notificationApi, contextHolder] = notification.useNotification()
  const [showModalCancel, setShowModalCancel] = useState(false)
  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: '예약 내역',
    },
    {
      title: '리뷰 작성',
    },
  ]

  const { data: getDetailOrderData, isLoading: isGetDetailOrderLoading } = useGetDetailOrderQuery({
    orderId: Number(id),
  })

  const [form, setForm] = useState<StoreReviewBody>({
    type: 'text',
    review: '',
    cleanlinest_rating: 0,
    hospitality_rating: 0,
    speed_rating: 0,
    designer_rating: 0,
  })
  const { mutate: storeReviewMutate, isPending: isStoreReviewPending } = useStoreReviewMutation()
  const isSubmitDisabled =
    !form.cleanlinest_rating ||
    !form.hospitality_rating ||
    !form.speed_rating ||
    !form.review ||
    (getDetailOrderData?.provider_type === 'designer' && !form.designer_rating)
  const handleSubmit = () => {
    console.log('form', form)
    // storeReviewMutate({ orderId: Number(id), body: form }, {
    //   onSuccess: () => {
    //     notificationApi.success({
    //       placement: 'topRight',
    //       message: '리뷰를 성공적으로 남겼어요! 감사합니다',
    //     })
    //     router.push('/reservation')
    //   },
    //   onError: () => {},
    //   onSettled: () => {},
    // })
  }

  return (
    <>
      {contextHolder}
      <BaseSpin spinning={isGetDetailOrderLoading}>
        <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
          <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '16px' }} />
          <BaseButton
            color="secondary-neutral"
            icon={<CaretLeft weight="bold" size={20} />}
            style={{ marginBottom: '40px ' }}
            onClick={() => setShowModalCancel(true)}
          >
            프로필
          </BaseButton>

          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <ReviewRatingRow
              label="1. 청결은 어떤가요?"
              onChange={(value) => setForm((prev) => ({ ...prev, cleanlinest_rating: value }))}
            />
            <ReviewRatingRow
              label="2. 환대는 어때요?"
              onChange={(value) => setForm((prev) => ({ ...prev, hospitality_rating: value }))}
            />
            <ReviewRatingRow
              label="3. 속도는 어때요?"
              onChange={(value) => setForm((prev) => ({ ...prev, speed_rating: value }))}
            />
            {getDetailOrderData?.provider_type === 'designer' && (
              <ReviewRatingRow
                label={
                  <Space align="center" size={8}>
                    <Avatar src={'/dummy/face03.png'} alt="user avatar" size={40} />
                    <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
                      한별 팀장 (글래드 강남점)
                    </BaseTypography>
                  </Space>
                }
                onChange={(value) => setForm((prev) => ({ ...prev, designer_rating: value }))}
              />
            )}
          </Space>

          <Space direction="vertical" size={40} style={{ marginTop: '40px', width: '100%' }}>
            <Space size={16}>
              {reviewTypes.map(({ value, label }) => (
                <ReviewTypeButton
                  key={value}
                  value={value}
                  active={form.type === value}
                  onClick={() => setForm({ ...form, type: value })}
                >
                  {label}
                </ReviewTypeButton>
              ))}
            </Space>
            {form.type === 'images' && (
              <>
                <UploadReviewPhotos orderId={Number(id)} type="images" />
              </>
            )}
            {form.type === 'before-after' && (
              <>
                <Space direction="vertical" size={16}>
                  <BaseBadge variant="danger-100">Before</BaseBadge>
                  <UploadReviewPhotos orderId={Number(id)} type="before" />
                </Space>
                <Space direction="vertical" size={16}>
                  <BaseBadge variant="success-100">After</BaseBadge>
                  <UploadReviewPhotos orderId={Number(id)} type="after" />
                </Space>
              </>
            )}
            <BaseTextarea
              placeholder="뭔가 신나는 걸 써봐"
              autoSize={{ minRows: 5, maxRows: 6 }}
              value={form.review}
              onChange={(e) => setForm((prev) => ({ ...prev, review: e.target.value }))}
            />
            <BaseButton
              size="xl"
              variant="fullwidth"
              onClick={handleSubmit}
              loading={isStoreReviewPending}
              disabled={isSubmitDisabled}
            >
              작성 완료
            </BaseButton>
          </Space>
        </BaseContainer>
      </BaseSpin>
      <ModalCancelReview
        isOpen={showModalCancel}
        onConfirm={() => setShowModalCancel(false)}
        onCancel={() => setShowModalCancel(false)}
      />
    </>
  )
}
