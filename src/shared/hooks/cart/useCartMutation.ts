import {
  StoreServiceToCartBody,
  UpdateCartBody,
  deleteServiceFromCart,
  storeServiceToCart,
  updateCart,
} from '@/api/cart'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useStoreServiceToCartMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async ({ body, serviceId }: { serviceId: number; body: StoreServiceToCartBody }) => {
      const response = await storeServiceToCart({ body, serviceId })
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-cart'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}

export const useDeleteServiceFromCartMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async ({ cartId }: { cartId: number }) => {
      const response = await deleteServiceFromCart({ cartId })
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-cart'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}

export const useUpdateCartMutation = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (body: UpdateCartBody) => {
      const response = await updateCart(body)
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-cart'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}
