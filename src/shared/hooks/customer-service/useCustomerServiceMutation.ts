import { createTicket } from '@/api/customer-service'
import type { CreateTicketFormValues } from '@/shared/interface/customer-service'
import { useMutation } from '@tanstack/react-query'

// # hooks
/**
 * Hook to create a new customer service ticket
 * Follows the established mutation pattern in the codebase
 */
export const useCreateTicketMutation = () => {
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (data: CreateTicketFormValues) => {
      const response = await createTicket(data)
      return response
    },
    onSuccess: (response, data) => {
      // No cache invalidation needed as this is a create-only operation
    },
    onError: (error) => {
      // Error handling delegated to component level
    },
    onSettled: () => {},
  })

  return { mutate, mutateAsync, ...mutationStates }
}
