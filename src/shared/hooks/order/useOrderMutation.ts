import { createOrder } from '@/api/order'
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
