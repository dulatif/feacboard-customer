import { getShopCategory } from '@/api/category'
import { getShop } from '@/api/shop'
import { GetAllShopQueryParams } from '@/app/interface/shop'
import { useQuery } from '@tanstack/react-query'

export const useShopCategoryQuery = () => {
  const queryKey = ['get-shop-category']
  const queryFn = async () => await getShopCategory()
  return useQuery({ queryKey, queryFn })
}

export const useShopQuery = ({ enabled = true, params }: { params: GetAllShopQueryParams; enabled?: boolean }) => {
  const queryKey = ['get-shop', params]
  const queryFn = async () => await getShop(params)
  return useQuery({ queryKey, queryFn, enabled })
}
