import { BaseBox } from '@/shared/components/base-box/BaseBox'
import { BaseRate } from '@/shared/components/base-rate/BaseRate'
import { BaseTypography } from '@/shared/components/base-typography/BaseTypography'
import { Flex } from 'antd'
import React from 'react'

const ReviewRatingRow: React.FC<{ label: string | React.ReactNode; onChange?: (value: number) => void }> = ({
  label,
  onChange,
}) => (
  <BaseBox shadow="no-shadow" borderWidth={2} padding={{ x: 'spacing-24px', y: 'spacing-24px' }}>
    <Flex justify="space-between" align="center">
      {typeof label === 'string' ? (
        <BaseTypography as="p" size="body1" variant="aleo" weight="semibold">
          {label}
        </BaseTypography>
      ) : (
        label
      )}
      <BaseRate defaultValue={0} onChange={onChange} />
    </Flex>
  </BaseBox>
)

export default ReviewRatingRow
