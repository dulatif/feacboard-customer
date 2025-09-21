import { Col, Modal, ModalProps, Row } from 'antd'
import React, { useState } from 'react'
import './ServiceVariantModal.scss'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { Plus } from 'phosphor-react'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

export interface ServiceVariantModal extends ModalProps {
  defaultSelectedVariant?: string
  variants: string[]
  onSubmit: () => void
}
export const ServiceVariantModal: React.FC<ServiceVariantModal> = ({
  onCancel,
  onSubmit,
  variants,
  defaultSelectedVariant,
  ...props
}) => {
  const [selectedVariant, setSelectedVariant] = useState(defaultSelectedVariant)
  const handleCancel = () => {
    onCancel && onCancel(null as any)
  }
  return (
    <Modal footer={null} className="shop__service-variant-modal" onCancel={handleCancel} centered {...props}>
      <BaseFlex vertical gap="spacing-48px" align="center">
        <BaseFlex vertical gap="spacing-16px">
          <BaseTypography as="p" size="body1" weight="semibold">
            변형 선택
          </BaseTypography>
          <Row gutter={[8, 8]}>
            {variants.map((e, i) => (
              <Col key={i} span={6}>
                <div
                  onClick={() => setSelectedVariant(e)}
                  className={`shop__service-variant-modal__card ${selectedVariant === e && '--selected'}`}
                >
                  <BaseTypography as="p" size="body2" weight="semibold" color={'inherit'} lineClamp={1}>
                    {e}
                  </BaseTypography>
                </div>
              </Col>
            ))}
          </Row>
        </BaseFlex>
        <BaseButton
          icon={<Plus />}
          disabled={!selectedVariant}
          size="xl"
          iconPosition="start"
          style={{ width: 380 }}
          onClick={() => onSubmit()}
        >
          장바구니에 담기
        </BaseButton>
      </BaseFlex>
    </Modal>
  )
}
