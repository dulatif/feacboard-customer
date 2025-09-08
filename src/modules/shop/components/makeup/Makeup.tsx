import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import { MakeupByDesigner } from '../makeup-by-designer/MakeupByDesigner'
import { MakeupByShop } from '../makeup-by-shop/MakeupByShop'

export const Makeup = () => {
  const tabItems: BaseTabsProps['items'] = [
    {
      key: '1',
      label: '디자이너별',
      children: <MakeupByDesigner />,
    },
    {
      key: '2',
      label: '업체별',
      children: <MakeupByShop />,
    },
  ]
  return <BaseTabs defaultActiveKey="1" items={tabItems} gapContent="80px" />
}
