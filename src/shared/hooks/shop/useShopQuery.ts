import { getShopCategory } from '@/api/category'
import {
  getShop,
  getShopCalendarHour,
  getShopDetails,
  GetShopDetailsParams,
  getShopServices,
  GetShopServicesParams,
  getShopServiceCategories,
} from '@/api/shop'
import { GetAllShopQueryParams } from '@/shared/interface/shop'
import { useQuery } from '@tanstack/react-query'

export const useShopCategoryQuery = () => {
  const queryKey = ['get-shop-category']
  const queryFn = async () => await getShopCategory()
  return useQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 30, // 30 minutes - data dianggap fresh selama 30 menit
    gcTime: 1000 * 60 * 60, // 1 hour - data di cache selama 1 jam
  })
}

export const useGetAllShopQuery = ({
  enabled = true,
  params,
}: {
  params: GetAllShopQueryParams
  enabled?: boolean
}) => {
  const queryKey = ['get-shop', params]
  const queryFn = async () => await getShop(params)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetShopDetailsQuery = (params: GetShopDetailsParams) => {
  const queryKey = ['get-shop-detail', params]
  const queryFn = async () => await getShopDetails(params)
  return useQuery({ queryKey, queryFn })
}

export const useGetShopServicesQuery = (params: GetShopServicesParams) => {
  const queryKey = ['get-shop-detail-services', params]
  const queryFn = async () => await getShopServices(params)
  return useQuery({ queryKey, queryFn })
}

export const useGetShopServiceCategoriesQuery = ({ shopId }: { shopId: number }) => {
  const queryKey = ['get-shop-service-categories', shopId]
  const queryFn = async () => await getShopServiceCategories({ shopId })
  return useQuery({ queryKey, queryFn })
}

export const useGetShopCalendarHourQuery = ({ shopId }: { shopId: number }) => {
  const queryKey = ['get-shop-detail-calendar', shopId]
  const queryFn = async () => await getShopCalendarHour({ shopId })
  return useQuery({ queryKey, queryFn })
}
