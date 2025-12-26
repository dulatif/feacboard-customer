import { getCart, checkCartStatus } from '@/api/cart'
import { useQuery } from '@tanstack/react-query'

export const useGetCartQuery = ({ enabled = true }: { enabled?: boolean }) => {
  const queryKey = ['get-cart']
  const queryFn = async () => await getCart()
  return useQuery({ queryKey, queryFn, enabled })
}

export const useCheckCartStatusQuery = ({ serviceId, enabled = true }: { serviceId: number; enabled?: boolean }) => {
  const queryKey = ['check-cart-status', serviceId]
  const queryFn = async () => await checkCartStatus(serviceId)
  return useQuery({ queryKey, queryFn, enabled: enabled && !!serviceId })
}
