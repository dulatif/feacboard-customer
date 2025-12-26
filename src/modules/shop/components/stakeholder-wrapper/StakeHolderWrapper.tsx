import { BaseTabs, BaseTabsProps } from '@/shared/components/base-tabs/BaseTabs'
import React, { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { TCategoryLabel } from '../../ShopView.utils'
import { DesignerList } from '../designer-list/DesignerList'
import { ShopList } from '../shop-list/ShopList'
import { useDesignerCategoryQuery } from '@/shared/hooks/designer/useDesignerQuery'

export const StakeHolderWrapper = () => {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category_id')
  const category = searchParams.get('category') as unknown as TCategoryLabel

  // Get designer categories from API
  const { data: designerCategories = [] } = useDesignerCategoryQuery()

  // Validate if category is a designer service category
  const isDesignerServiceCategory = useMemo(() => {
    if (!category || !designerCategories.length) return false

    // Find matching designer category by checking if category label matches
    // category name (en) in lowercase, or check if category_id matches
    const matchingCategory = designerCategories.find((designerCategory) => {
      // Check by category_id if available
      if (categoryId && String(designerCategory.id) === categoryId) {
        return designerCategory.needs_designer
      }

      // Check by category label matching localized name or name.en
      const categoryLabelLower = category.toLowerCase()
      const categoryNameEnLower = designerCategory.name.en?.toLowerCase() || ''
      const localizedNameLower = designerCategory.localized_name?.toLowerCase() || ''

      return (
        (categoryLabelLower === categoryNameEnLower || categoryLabelLower === localizedNameLower) &&
        designerCategory.needs_designer
      )
    })

    return !!matchingCategory
  }, [category, categoryId, designerCategories])

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

  return isDesignerServiceCategory ? (
    <BaseTabs defaultActiveKey="1" items={tabItems} gapContent="80px" />
  ) : (
    <ShopList categoryId={categoryId || ''} />
  )
}
