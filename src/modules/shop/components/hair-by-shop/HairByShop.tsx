import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import Render from '@/shared/components/base-render/Render'
import { useShopQuery } from '@/shared/hooks/shop/useShopQuery'
import { Empty, Spin } from 'antd'
import { StoreCard } from '../store-card/StoreCard'
import { useFilterStore } from '@/shared/hooks/state/useFilter'
import { useSearchParams } from 'next/navigation'

export const HairByShop = () => {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category_id')
  const { location, name } = useFilterStore()
  const { data, isPending } = useShopQuery({
    params: { category_id: categoryId as string, with: 'designers.services', name: name, location: location },
  })

  return (
    <>
      <Spin tip="Loading..." size="large" spinning={isPending}>
        <Render in={data?.length === 0 || !data}>
          <Empty />
        </Render>
        <Render in={!!data && data.length > 0}>
          <BaseFlex vertical gap="spacing-80px">
            {data?.map((item, i) => (
              // @ts-expect-error: TODO: finish the attribute -> images , rating, reviewersCount, open & close,
              <StoreCard
                key={i}
                category="hair"
                id={item.id as unknown as string}
                storeName={item.name}
                location={item.address}
                availableDesigners={item.designers.length}
                images={[]}
              />
            ))}
          </BaseFlex>
        </Render>
      </Spin>
    </>
  )
}
