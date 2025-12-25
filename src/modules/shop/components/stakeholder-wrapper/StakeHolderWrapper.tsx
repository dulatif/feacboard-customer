import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { TCategoryLabel } from '../../ShopView.utils'
import { DesignerList } from '../designer-list/DesignerList'
import { ShopList } from '../shop-list/ShopList'

export const StakeHolderWrapper = () => {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category_id')
  const category = searchParams.get('category') as unknown as TCategoryLabel
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너별',
      children: <DesignerList categoryId={categoryId || ''} />,
    },
    {
      key: '2',
      label: '업체별',
      children: <ShopList categoryId={categoryId || ''} />,
    },
  ]
  return /^hair$/i.test(category) || /^makeup$/i.test(category) ? (
    <BaseTabs defaultActiveKey="1" items={tabItems} gapContent="80px" />
  ) : (
    <ShopList categoryId={categoryId || ''} />
  )
}
