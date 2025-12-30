import { storeReview } from '@/api/review'
import { StoreReviewBody } from '@/shared/interface/review'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useStoreReviewMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async ({ body, orderId }: { orderId: number; body: StoreReviewBody }) => {
      const response = await storeReview({ body, orderId })
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-review'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}
