'use client'
import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseContainer } from '@/shared/components/base-container/BaseContainer'
import { BaseTextarea } from '@/shared/components/base-textarea/BaseTextarea'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Checkbox, CheckboxChangeEvent, Divider, Flex, Space } from 'antd'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import ModalCancelMembership from './ModalCancelMembership'
import ModalCanceled from './ModalCanceled'

const ReasonItem = ({ label, onChange }: { label: string; onChange: (e: CheckboxChangeEvent) => void }) => (
  <div>
    <Flex gap={16} style={{ borderBottom: `2px solid ##F2F4F7` }}>
      <Checkbox onChange={onChange} />
      <BaseTypography as="h6" size="subtitle1" variant="aleo" weight="semibold">
        {label}
      </BaseTypography>
    </Flex>
    <Divider style={{ margin: '0', marginTop: '48px' }} />
  </div>
)

const DeleteAccountView = () => {
  const [showTextarea, setShowTextarea] = useState(false)
  const [showModalCancelMembership, setShowModalCancelMembership] = useState(false)
  const [showModalCanceled, setShowModalCanceled] = useState(false)

  const breadcrumbs = [
    {
      title: '홈',
    },
    {
      title: '내 계정',
    },
    {
      title: '계정 편집',
    },
    {
      title: '계정 삭제',
    },
  ]

  return (
    <>
      <BaseContainer variant={1440} padding={{ y: 'spacing-40px' }}>
        <BaseBreadcrumb items={breadcrumbs} style={{ marginBottom: '48px' }} />
        <BaseButton
          color="secondary-neutral"
          icon={<CaretLeft weight="bold" size={20} />}
          style={{ marginBottom: '48px' }}
        >
          반품
        </BaseButton>

        <BaseBox shadow="lg" padding={{ x: 'spacing-48px', y: 'spacing-48px' }}>
          <BaseTypography as="h6" size="subtitle1" variant="aleo" weight="semibold" style={{ marginBottom: '8px' }}>
            정건우님, 정말 탈퇴 하시겠어요?
          </BaseTypography>
          <BaseTypography as="p" size="body1" color="neutral-500" style={{ marginBottom: '40px' }}>
            더 나은 앱을 만들기위해, 탈퇴 사유를 선택해주세요J
          </BaseTypography>

          <Space direction="vertical" size={48} style={{ width: '100%', marginBottom: '24px' }}>
            <ReasonItem label="1. 진단 결과가 부정확한 것 같아요." onChange={(e) => console.log(e)} />
            <ReasonItem label="2. 앱 사용이 너무 불편해요." onChange={(e) => console.log(e)} />
            <ReasonItem label="3. 필요한 정보가 많이 없어요." onChange={(e) => console.log(e)} />
            <ReasonItem label="4. 기타." onChange={(e) => setShowTextarea(e.target.checked)} />
          </Space>
          <div style={{ marginBottom: '40px' }}>
            {showTextarea && <BaseTextarea defaultValue={'사유를 작성해주세요'} rows={5}></BaseTextarea>}
          </div>

          <BaseTypography as="h6" size="subtitle1" variant="aleo">
            <b>서비스 이용약관과, 개인정보 수집 동의</b> 약관에 따라, 회원을 탈퇴하여도 일부 데이터는 페이스보드 서버에
            저장될 수 있습니다.
          </BaseTypography>

          <Flex justify="flex-end">
            <BaseButton
              color="danger"
              size="xl"
              style={{ width: '246px' }}
              onClick={() => setShowModalCancelMembership(true)}
            >
              회원 탈퇴
            </BaseButton>
          </Flex>
        </BaseBox>
      </BaseContainer>

      <ModalCancelMembership
        isOpen={showModalCancelMembership}
        onClose={() => setShowModalCancelMembership(false)}
        onConfirm={() => {
          setShowModalCanceled(true)
        }}
      />
      <ModalCanceled
        isOpen={showModalCanceled}
        onClose={() => {
          setShowModalCanceled(false)
          setShowModalCancelMembership(false)
        }}
      />
    </>
  )
}

export default DeleteAccountView
