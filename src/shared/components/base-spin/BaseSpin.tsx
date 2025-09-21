import { Spin, SpinProps } from 'antd'
import React from 'react'
import './BaseSpin.scss'
import { LoadingOutlined } from '@ant-design/icons'

export interface BaseSpinProps extends SpinProps {
  spinerLoading?: boolean
  spinerLoadingSize?: number
  spinerLoadingColor?: string
}
export const BaseSpin: React.FC<BaseSpinProps> = ({
  spinerLoading,
  spinerLoadingSize = 48,
  spinerLoadingColor = '#49C3D0',
  ...props
}) => {
  return (
    <Spin
      {...props}
      indicator={
        spinerLoading ? (
          <LoadingOutlined style={{ fontSize: spinerLoadingSize, color: spinerLoadingColor }} spin />
        ) : undefined
      }
      className="base-spin"
    />
  )
}
