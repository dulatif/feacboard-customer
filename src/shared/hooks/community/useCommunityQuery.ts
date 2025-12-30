import { getPost } from '@/api/community'
import { useQuery } from '@tanstack/react-query'

export const useGetPostQuery = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const queryKey = ['get-post']
  const queryFn = async () => await getPost()
  return useQuery({ queryKey, queryFn, enabled })
}
