import React, { useState } from 'react'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import Render from '@/shared/components/base-render/Render'
import { useGetAllShopQuery } from '@/shared/hooks/shop/useShopQuery'
import { useFilterStore } from '@/shared/hooks/state/useFilter'
import { Empty, Spin } from 'antd'
import { StoreCard } from '../store-card/StoreCard'
import { BasePagination } from '@/shared/components/base-pagination/BasePagination'
import { GetAllShopResponse } from '@/app/interface/shop'

export interface ShopListProps {
  categoryId?: string
}

export const ShopList: React.FC<ShopListProps> = ({ categoryId }) => {
  const { location, name } = useFilterStore()
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isPending } = useGetAllShopQuery({
    params: {
      category_id: categoryId ? Number(categoryId) : undefined,
      name: name,
      with: ['designers', 'designers.services'],
      paginate: 1,
      page: currentPage,
    },
    enabled: true,
  })

  // Handle pagination response
  const paginatedData = data as GetAllShopResponse | undefined
  const shops = paginatedData?.data || []
  const meta = paginatedData?.meta

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Optionally scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Spin tip="Loading..." size="large" spinning={isPending}>
        <Render in={shops.length === 0 || !shops}>
          <Empty />
        </Render>
        <Render in={shops.length > 0}>
          <BaseFlex vertical gap="spacing-80px">
            {shops.map((item, i) => (
              <StoreCard
                key={item.id || i}
                category="nail"
                id={String(item.id)}
                storeName={item.name}
                location={item.address}
                availableDesigners={item.designers?.length || item.designer_count || 0}
                images={[]}
                rating={item.rating || 0}
                reviewersCount={item.review_count || 0}
                open_and_close={item.open_hour_today || '-'}
              />
            ))}

            {meta && meta.last_page > 1 && (
              <BasePagination
                current={meta.current_page}
                total={meta.total}
                pageSize={meta.per_page}
                onChange={handlePageChange}
                showTotal={(total, range) => `${range[0]}-${range[1]} dari ${total} toko`}
              />
            )}
          </BaseFlex>
        </Render>
      </Spin>
    </>
  )
}
