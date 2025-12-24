'use client'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useEffect, useMemo, useState } from 'react'
import { StoreCard } from '../../components/store-card/StoreCard'
import { StoreDesigners } from '../../components/store-designers/StoreDesigners'
import { StoreInformation } from '../../components/store-information/StoreInformation'
import { StoreReview } from '../../components/store-review/StoreReview'
import { StoreTidings } from '../../components/store-tidings/StoreTidings'
import { TCategoryLabel } from '../../ShopView.utils'
import { StoreServices } from '../../components/store-services/StoreServices'
import { hair } from '@/shared/dummy/data'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useShopDetailQuery } from '@/shared/hooks/shop/useShopQuery'
import { Spin } from 'antd'
import { ID } from '@/shared/interface/general'

export const ShopDetailsView = () => {
  const router = useRouter()
  const { id } = useParams()
  const { data: shop, isLoading } = useShopDetailQuery({
    enabled: true,
    params: { id: id as string | ID, with: ['openHours'] },
  })
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as unknown as TCategoryLabel

  // TODO: update the dummy id after api ready
  const data = hair.shop.find((e) => e.id === '1')
  const [breadcrumbItems, setBreadcrumbItems] = useState<{ title: string }[]>([])
  useEffect(() => {
    if (data) {
      setBreadcrumbItems([
        {
          title: '홈',
        },
        {
          title: hair.type,
        },
        {
          title: data.storeName,
        },
      ])
    }
  }, [id, data])
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()

  const tabItems: BaseTabsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: ['nail', 'studio'].includes(category) ? '서비스' : '디자이너',
        children: ['nail', 'studio'].includes(category) ? (
          <StoreServices data={data?.services || []} />
        ) : (
          <StoreDesigners data={data?.designers || []} />
        ),
      },
      {
        key: '2',
        label: '소식',
        children: <StoreTidings data={data?.tidings || []} />,
      },
      {
        key: '3',
        label: '리뷰',
        children: <StoreReview designers={data?.designers || []} reviews={(data?.reviews as any) || []} />,
      },
      {
        key: '4',
        label: '정보',
        children: <StoreInformation data={{ storeName: data?.storeName || '' }} />,
      },
    ]
  }, [data])

  if (isLoading) return <Spin />
  if (!data) return null
  return (
    <BaseFlex vertical gap="spacing-32px" padding={{ y: 'spacing-24px' }}>
      <BaseBreadcrumb items={breadcrumbItems} />
      <div>
        <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft size={20} />}>
          뒤로가기
        </BaseButton>
      </div>
      <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-20px'}>
        {/* Store Information */}
        <StoreCard
          {...data}
          containerProps={{
            borderWidth: 0,
            padding: { x: 'spacing-0px', y: 'spacing-0px' },
            radius: 'radius-0px',
          }}
          metaInformationProps={{
            vertical: true,
            gap: 'spacing-8px',
          }}
          storeName={shop?.name || ''}
          location={shop?.address || ''}
          // availableDesigners={shop?.designers.length || 0}
        />

        {/* Store Tabs */}
        <BaseTabs defaultActiveKey="1" variant="filled" gapContent={largeScreen ? '80px' : '24px'} items={tabItems} />
      </BaseFlex>
    </BaseFlex>
  )
}
