import { getDesignerCareers } from '@/api/career'
import type { GetCareersParams } from '@/shared/interface/career'
import { useQuery } from '@tanstack/react-query'

// # hooks
/**
 * Hook to fetch careers for a specific designer
 * @param params - Designer ID and optional enabled flag
 */
export const useGetDesignerCareersQuery = ({
  designerId,
  enabled = true,
}: GetCareersParams & { enabled?: boolean }) => {
  const queryKey = ['get-designer-careers', designerId]
  const queryFn = async () => await getDesignerCareers({ designerId })

  return useQuery({
    queryKey,
    queryFn,
    enabled,
  })
}
