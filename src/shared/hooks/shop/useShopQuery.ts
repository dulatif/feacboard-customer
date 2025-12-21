import { getShopCategory } from '@/api/category'
import { getDetailShop, getShop } from '@/api/shop'
import { GetAllShopQueryParams, GetDetailShopQueryParams } from '@/app/interface/shop'
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

export const useShopDetailQuery = ({
  enabled = true,
  params,
}: {
  enabled?: boolean
  params?: GetDetailShopQueryParams
}) => {
  const queryKey = ['get-shop-detail', params]
  const queryFn = async () => await getDetailShop(params)
  return useQuery({ queryKey, queryFn, enabled })
}
