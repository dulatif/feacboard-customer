import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import React from 'react'
import { HairByDesigner } from '../hair-by-designer/HairByDesigner'
import { HairByShop } from '../hair-by-shop/HairByShop'

export const Hair = () => {
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너별',
      children: <HairByDesigner />,
    },
    {
      key: '2',
      label: '업체별',
      children: <HairByShop />,
    },
  ]
  return <BaseTabs defaultActiveKey="1" items={tabItems} gapContent="80px" />
}
