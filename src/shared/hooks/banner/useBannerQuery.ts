import { getActiveBanners } from '@/api/banner'
import { useQuery } from '@tanstack/react-query'

export const useActiveBannersQuery = ({ enabled = true }: { enabled?: boolean } = {}) => {
  const queryKey = ['get-active-banners']
  const queryFn = async () => await getActiveBanners()
  return useQuery({ queryKey, queryFn, enabled })
}
