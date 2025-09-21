'use client'
import { BaseBreadcrumb } from '@/shared/components/base-breadcrumb/BaseBreadcrumb'
import { BaseButton } from '@/shared/components/base-button/BaseButton'
import { BaseFlex } from '@/shared/components/base-flex/BaseFlex'
import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { useRouter, useSearchParams } from 'next/navigation'
import { CaretLeft } from 'phosphor-react'
import { useState } from 'react'
import { StoreCard } from '../components/store-card/StoreCard'
import { StoreDesigners } from '../components/store-designers/StoreDesigners'
import { StoreInformation } from '../components/store-information/StoreInformation'
import { StoreReview } from '../components/store-review/StoreReview'
import { StoreTidings } from '../components/store-tidings/StoreTidings'
import { Category } from '../ShopView.utils'
import { StoreServices } from '../components/store-services/StoreServices'

export const ShopDetailsView = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') as unknown as Category
  const [breadcrumbItems, setBreadcrumbItems] = useState([
    {
      title: '홈',
    },
    {
      title: '헤어',
    },
    {
      title: '강남 살롱',
    },
  ])

  const shopData = {
    availableDesigners: 5,
    close: '22:30',
    open: '10:30',
    images: ['/dummy/store01.jpg', '/dummy/store02.jpg', '/dummy/store03.jpg'],
    rating: 4.8,
    reviewersCount: 129,
    storeName: '글래드 헤어 살롱 강남점',
    instagram: 'http://www.Instagram.com/glad_hair1',
  }

  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너',
      children: ['nail', 'studio'].includes(category) ? <StoreServices /> : <StoreDesigners />,
    },
    {
      key: '2',
      label: '소식',
      children: <StoreTidings />,
    },
    {
      key: '3',
      label: '리뷰',
      children: <StoreReview />,
    },
    {
      key: '4',
      label: '정보',
      children: <StoreInformation />,
    },
  ]
  return (
    <BaseFlex vertical gap="spacing-32px" padding={{ y: 'spacing-24px' }}>
      <BaseBreadcrumb items={breadcrumbItems} />
      <div>
        <BaseButton onClick={() => router.back()} color="secondary-neutral" icon={<CaretLeft size={20} />}>
          뒤로가기
        </BaseButton>
      </div>
      <BaseFlex vertical gap="spacing-80px">
        {/* Store Information */}
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
          {...shopData}
        />

        {/* Store Tabs */}
        <BaseTabs defaultActiveKey="1" variant="filled" gapContent="80px" items={tabItems} />
      </BaseFlex>
    </BaseFlex>
  )
}
