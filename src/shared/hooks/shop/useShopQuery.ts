import { getShopCategory } from '@/api/category'
import { getShop, getShopCalendarHour, getShopDetails, GetShopDetailsParams, getShopServices } from '@/api/shop'
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

export const useGetShopDetailsQuery = (params: GetShopDetailsParams) => {
  const queryKey = ['get-shop-detail', params]
  const queryFn = async () => await getShopDetails(params)
  return useQuery({ queryKey, queryFn })
}

export const useGetShopServicesQuery = ({ shopId }: { shopId: number }) => {
  const queryKey = ['get-shop-detail-services', shopId]
  const queryFn = async () => await getShopServices({ shopId })
  return useQuery({ queryKey, queryFn })
}

export const useGetShopCalendarHourQuery = ({ shopId }: { shopId: number }) => {
  const queryKey = ['get-shop-detail-calendar', shopId]
  const queryFn = async () => await getShopCalendarHour({ shopId })
  return useQuery({ queryKey, queryFn })
}
