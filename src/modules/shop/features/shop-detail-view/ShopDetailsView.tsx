'use client'
import { GetShopDetailsParams } from '@/api/shop'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import {
  useGetShopCalendarHourQuery,
  useGetShopDetailsQuery,
  useGetShopServicesQuery,
} from '@/shared/hooks/shop/useShopQuery'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useEffect, useMemo, useState } from 'react'
import { StoreCard } from '../../components/store-card/StoreCard'
import { StoreServices } from '../../components/store-services/StoreServices'
import { TCategoryLabel } from '../../ShopView.utils'
import { StoreInformation } from '../../components/store-information/StoreInformation'

export const ShopDetailsView = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const router = useRouter()
  const { id } = useParams()
  const shopId = Number(id)
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as unknown as TCategoryLabel
  const shopServiceCategory = ['nail', 'studio']
  const isServicesShopCategory = shopServiceCategory.includes(category)
  const params: GetShopDetailsParams = useMemo(() => {
    return {
      shopId,
      with: isServicesShopCategory ? 'services' : 'designers',
    }
  }, [isServicesShopCategory])
  const { data: shopDetailsData, isLoading: isShopDetailsLoading } = useGetShopDetailsQuery(params)
  const { data: shopCalendarHourData, isLoading: isShopCalendarHourLoading } = useGetShopCalendarHourQuery({ shopId })
  const { data: shopServicesData, isLoading: isShopServicesLoading } = useGetShopServicesQuery({ shopId })

  const [breadcrumbItems, setBreadcrumbItems] = useState<{ title: string }[]>([])
  useEffect(() => {
    if (shopDetailsData) {
      setBreadcrumbItems([
        {
          title: '홈',
        },
        {
          title: shopDetailsData.name,
        },
      ])
    }
  }, [id, shopDetailsData])

  const tabItems: BaseTabsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: isServicesShopCategory ? '서비스' : '디자이너',
        children: isServicesShopCategory ? (
          <StoreServices
            data={shopServicesData?.data}
            meta={shopServicesData?.meta}
            calendarHour={shopCalendarHourData || {}}
            loading={isShopServicesLoading || isShopCalendarHourLoading}
          />
        ) : null,
        // <StoreDesigners data={data?.designers || []} />
      },
      {
        key: '2',
        label: '소식',
        // children: <StoreTidings data={data?.tidings || []} />,
      },
      {
        key: '3',
        label: '리뷰',
        // children: <StoreReview designers={data?.designers || []} reviews={(data?.reviews as any) || []} />,
      },
      {
        key: '4',
        label: '정보',
        children: <StoreInformation data={{ storeName: shopDetailsData?.name || '' }} shopId={shopId} />,
      },
    ]
  }, [shopDetailsData, shopServicesData, isShopServicesLoading, isShopCalendarHourLoading])

  return (
    <>
      <BaseFlex vertical gap="spacing-32px" padding={{ y: 'spacing-24px' }}>
        <BaseBreadcrumb items={breadcrumbItems} />
        <div>
          <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft size={20} />}>
            뒤로가기
          </BaseButton>
        </div>
        <BaseFlex vertical gap={largeScreen ? 'spacing-80px' : 'spacing-20px'}>
          {/* Store Information */}
          <BaseSpin spinning={isShopDetailsLoading}>
            <StoreCard
              containerProps={{
                borderWidth: 0,
                padding: { x: 'spacing-0px', y: 'spacing-0px' },
                radius: 'radius-0px',
              }}
              metaInformationProps={{
                vertical: true,
                gap: 'spacing-8px',
              }}
              storeName={shopDetailsData?.name || ''}
              open_and_close={shopDetailsData?.open_hour_today || ''}
              id={`${shopDetailsData?.id}`}
              location={shopDetailsData?.address}
              rating={shopDetailsData?.rating || 0}
              reviewersCount={shopDetailsData?.review_count || 0}
              category={category}
              images={[]}
              availableDesigners={shopDetailsData?.designers.length || 0}
            />
          </BaseSpin>

          {/* Store Tabs */}
          <BaseTabs defaultActiveKey="1" variant="filled" gapContent={largeScreen ? '80px' : '24px'} items={tabItems} />
        </BaseFlex>
      </BaseFlex>
    </>
  )
}
