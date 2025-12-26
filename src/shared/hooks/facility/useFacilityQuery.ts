import { getAllFacilities, getShopFacilities } from '@/api/facility'
import { useQuery } from '@tanstack/react-query'

export const useShopFacilitiesQuery = ({ enabled = true, shopId }: { shopId: number; enabled?: boolean }) => {
  const queryKey = ['get-shop-facilities', shopId]
  const queryFn = async () => await getShopFacilities(shopId)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useAllFacilitiesQuery = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const queryKey = ['get-all-facilities']
  const queryFn = async () => await getAllFacilities()
  return useQuery({ queryKey, queryFn, enabled })
}
