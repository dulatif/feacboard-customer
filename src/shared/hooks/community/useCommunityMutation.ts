import { createPost } from '@/api/community'
import { CreatePost } from '@/shared/interface/community'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreatePost = () => {
  const queryClient = useQueryClient()
  const { mutate, mutateAsync, ...mutationStates } = useMutation({
    mutationFn: async (body: CreatePost) => {
      const response = await createPost(body)
      return response
    },
    onSuccess: (response, body) => {
      queryClient.invalidateQueries({
        queryKey: ['get-post'],
      })
    },
    onError: (error) => {},
    onSettled: () => {},
  })
  return { mutate, mutateAsync, ...mutationStates }
}
