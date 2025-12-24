import { getDetailOrder, getOrder } from '@/api/order'
import { useQuery } from '@tanstack/react-query'

export const useGetOrderQuery = ({ enabled = true }: { enabled?: boolean }) => {
  const queryKey = ['get-order']
  const queryFn = async () => await getOrder()
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetDetailOrderQuery = ({ orderId }: { orderId: number }) => {
  const queryKey = ['get-detail-order', orderId]
  const queryFn = async () => await getDetailOrder(orderId)
  return useQuery({ queryKey, queryFn })
}
