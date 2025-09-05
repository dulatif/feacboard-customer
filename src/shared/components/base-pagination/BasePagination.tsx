import { Pagination, PaginationProps } from 'antd'
import React from 'react'
import './BasePagination.scss'
import classNames from 'classnames'
import { BaseButton } from '../base-button/BaseButton'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'

export interface BasePaginationProps extends PaginationProps {}
export const BasePagination: React.FC<BasePaginationProps> = ({ className, ...props }) => {
  const paginationClass = classNames('base-pagination', className)
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <a>
          <BaseButton color="secondary-neutral" icon={<ArrowLeftIcon width={20} height={20} />}>
            이전에
          </BaseButton>
        </a>
      )
    }
    if (type === 'next') {
      return (
        <a>
          <BaseButton color="secondary-neutral" icon={<ArrowRightIcon width={20} height={20} />} iconPosition="end">
            다음
          </BaseButton>
        </a>
      )
    }
    return originalElement
  }
  return (
    <div className="base-pagination-wrapper">
      <Pagination
        itemRender={itemRender}
        responsive
        showLessItems
        showSizeChanger={false}
        {...props}
        className={paginationClass}
      />
    </div>
  )
}
