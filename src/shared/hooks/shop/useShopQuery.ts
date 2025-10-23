import { getShop, getShopCategory, type GetShopCategoryResponse, type GetShopResponse } from '@/api/shop'
import { useQuery } from '@tanstack/react-query'

export const useShopCategoryQuery = () => {
  const queryKey = ['get-shop-category']
  const queryFn = async () => (await getShopCategory()) as GetShopCategoryResponse[]
  return useQuery({ queryKey, queryFn })
}

export const useShopQuery = ({ enabled = true, params }: { params: string; enabled?: boolean }) => {
  const queryKey = ['get-shop']
  const queryFn = async () => (await getShop(params)) as GetShopResponse[]
  return useQuery({ queryKey, queryFn, enabled })
}
