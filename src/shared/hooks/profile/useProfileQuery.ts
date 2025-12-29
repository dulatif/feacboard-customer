import { getProfile } from '@/api/profile'
import { useQuery } from '@tanstack/react-query'

export const useProfileQuery = () => {
  const queryKey = ['get-profile']
  const queryFn = async () => await getProfile()
  return useQuery({ queryKey, queryFn })
}
