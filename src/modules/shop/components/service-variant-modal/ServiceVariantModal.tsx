import { Col, Modal, ModalProps, Row } from 'antd'
import React, { useState } from 'react'
import './ServiceVariantModal.scss'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { Plus } from 'phosphor-react'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'

export interface ServiceVariantModal extends ModalProps {
  defaultSelectedVariant?: string[]
  variants: {
    title: string
    options: string[]
  }[]
  onSubmit: () => void
}
export const ServiceVariantModal: React.FC<ServiceVariantModal> = ({
  onCancel,
  onSubmit,
  variants,
  defaultSelectedVariant = [null, null],
  ...props
}) => {
  const [selectedVariant, setSelectedVariant] = useState<(string | null)[]>(defaultSelectedVariant)
  const handleCancel = () => {
    onCancel && onCancel(null as any)
  }
  const handleSelectVariant = (option: string, i: number) => {
    setSelectedVariant((prev) => {
      const newSelectedVariant = [...prev]
      newSelectedVariant[i] = option
      return newSelectedVariant
    })
  }
  return (
    <Modal footer={null} className="shop__service-variant-modal" onCancel={handleCancel} centered {...props}>
      <BaseFlex vertical gap="spacing-48px" align="center">
        <BaseFlex vertical gap="spacing-16px">
          <BaseTypography as="p" size="body1" weight="semibold">
            변형 선택
          </BaseTypography>
          {variants.map((e, i) => (
            <BaseFlex key={i} vertical gap="spacing-8px">
              <BaseTypography as="p" size="body2" weight="regular" color="neutral-500">
                {e.title}
              </BaseTypography>
              <Row gutter={[8, 8]}>
                {e.options.map((option, optionIndex) => (
                  <Col key={optionIndex} span={6}>
                    <div
                      onClick={() => handleSelectVariant(option, i)}
                      className={`shop__service-variant-modal__card ${selectedVariant[i] === option && '--selected'}`}
                    >
                      <BaseTypography as="p" size="body2" weight="semibold" color={'inherit'} lineClamp={1}>
                        {option}
                      </BaseTypography>
                    </div>
                  </Col>
                ))}
              </Row>
            </BaseFlex>
          ))}
        </BaseFlex>
        <BaseButton
          icon={<Plus />}
          disabled={selectedVariant.some((e) => !e)}
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
