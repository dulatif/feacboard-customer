'use client'
import { getDetailShop } from '@/api/shop'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseSpin } from '@/shared/components/base-spin/BaseSpin'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { useResponsive } from '@/shared/hooks/useResponsive'
import { GetDetailShopQueryParams } from '@/shared/interface/shop'
import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useEffect, useMemo, useState } from 'react'
import { StoreCard } from '../../components/store-card/StoreCard'
import { StoreDesigners } from '../../components/store-designers/StoreDesigners'
import { StoreInformation } from '../../components/store-information/StoreInformation'
import { StoreServices } from '../../components/store-services/StoreServices'
import { StoreTidings } from '../../components/store-tidings/StoreTidings'
import { StoreReview } from '../../components/store-review/StoreReview'

export const ShopDetailsView = () => {
  const { largeScreen, isDesktop, isLaptop, isTablet, isMobile } = useResponsive()
  const router = useRouter()
  const { id } = useParams()
  const shopId = Number(id)

  // Get shop details with category
  const shopDetailsParams: GetDetailShopQueryParams = useMemo(
    () => ({
      id: shopId,
      with: ['category'],
    }),
    [shopId],
  )

  const { data: shopDetailsData, isLoading: isShopDetailsLoading } = useQuery({
    queryKey: ['get-shop-detail', shopDetailsParams],
    queryFn: async () => await getDetailShop(shopDetailsParams),
  })

  // Validate if category is a designer service category using shop's category
  const isDesignerServiceCategory = useMemo(() => {
    if (!shopDetailsData?.category) return false
    return shopDetailsData.category.needs_designer === true
  }, [shopDetailsData?.category])

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
        label: isDesignerServiceCategory ? '디자이너' : '서비스',
        children: isDesignerServiceCategory ? <StoreDesigners shopId={shopId} /> : <StoreServices shopId={shopId} />,
      },
      {
        key: '2',
        label: '소식',
        children: <StoreTidings shopId={shopId} />,
      },
      {
        key: '3',
        label: '리뷰',
        children: <StoreReview shopId={shopId} />,
      },
      {
        key: '4',
        label: '정보',
        children: (
          <StoreInformation
            data={{ storeName: shopDetailsData?.name || '' }}
            description={shopDetailsData?.description || ''}
          />
        ),
      },
    ]
  }, [isDesignerServiceCategory])

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
              images={shopDetailsData?.thumbnails?.map((thumbnail) => thumbnail.url) || []}
              availableDesigners={shopDetailsData?.designers?.length || 0}
            />
          </BaseSpin>

          {/* Store Tabs */}
          <BaseTabs defaultActiveKey="1" variant="filled" gapContent={largeScreen ? '80px' : '24px'} items={tabItems} />
        </BaseFlex>
      </BaseFlex>
    </>
  )
}
