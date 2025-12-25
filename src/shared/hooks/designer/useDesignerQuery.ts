import { getDesigner } from '@/api/designer'
import { GetAllDesignerQueryParams } from '@/app/interface/designers'
import { useQuery } from '@tanstack/react-query'

export const useGetAllDesignerQuery = ({
  enabled = true,
  params,
}: {
  params: GetAllDesignerQueryParams
  enabled?: boolean
}) => {
  const queryKey = ['get-designer', params]
  const queryFn = async () => await getDesigner(params)
  return useQuery({ queryKey, queryFn, enabled })
}
