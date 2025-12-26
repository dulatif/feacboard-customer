import { createOrder, payOrder } from '@/api/order'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async () => {
      const response = await createOrder()
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-cart'],
      })
      queryClient.invalidateQueries({
        queryKey: ['get-order'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}

export const usePayOrderMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (orderId: number) => {
      const response = await payOrder(orderId)
      return response
    },
    onSuccess: (response, orderId) => {
      queryClient.invalidateQueries({
        queryKey: ['get-order'],
      })
      queryClient.invalidateQueries({
        queryKey: ['get-detail-order', orderId],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}
