'use client'
import DiagnosisTypeBadge from '@/modules/ai-diagnosis/components/DiagnosisTypeBadge'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { Flex, Space } from 'antd'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import ModalCancelReview from '../components/ModalCancelReview'
import { usePathname, useSearchParams } from 'next/navigation'

const ReviewColorPersonalityView = () => {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
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

  return (
    <>
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
          <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
            <Flex justify="space-between" align="center">
              <DiagnosisTypeBadge type={category?.includes('ai') ? 'ai' : 'manual'} />
              <BaseRate defaultValue={0} />
            </Flex>
          </BaseBox>
        </Space>

        <Space direction="vertical" size={40} style={{ marginTop: '40px', width: '100%' }}>
          <BaseTextarea placeholder="뭔가 신나는 걸 써봐" autoSize={{ minRows: 5, maxRows: 6 }} />
          <BaseButton size="xl" variant="fullwidth">
            작성 완료
          </BaseButton>
        </Space>
      </BaseContainer>
      <ModalCancelReview
        isOpen={showModalCancel}
        onConfirm={() => setShowModalCancel(false)}
        onCancel={() => setShowModalCancel(false)}
      />
    </>
  )
}

export default ReviewColorPersonalityView
