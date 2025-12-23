import { getCart } from '@/api/cart'
import { useQuery } from '@tanstack/react-query'

export const useGetCartQuery = ({ enabled = true }: { enabled?: boolean }) => {
  const queryKey = ['get-cart']
  const queryFn = async () => await getCart()
  return useQuery({ queryKey, queryFn, enabled })
}
