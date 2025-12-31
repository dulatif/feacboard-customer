import { getDetailOrder, getOrder, GetOrderParams } from '@/api/order'
import { useQuery } from '@tanstack/react-query'

export const useGetOrderQuery = ({ enabled = true, params }: { enabled?: boolean; params?: GetOrderParams }) => {
  const queryKey = ['get-order', params]
  const queryFn = async () => await getOrder(params)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetDetailOrderQuery = ({ orderId }: { orderId: number }) => {
  const queryKey = ['get-detail-order', orderId]
  const queryFn = async () => await getDetailOrder(orderId)
  return useQuery({ queryKey, queryFn })
}
