import {
  getDesigner,
  getDesignerCategory,
  getDetailDesigner,
  getDesignerServices,
  getDesignerServiceCategories,
  getPopularDesigner,
  GetPopularDesignerParams,
} from '@/api/designer'
import {
  GetAllDesignerQueryParams,
  GetDetailDesignerQueryParams,
  GetDesignerServicesQueryParams,
} from '@/shared/interface/designers'
import { ID } from '@/shared/interface/general'
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

export const useDesignerCategoryQuery = () => {
  const queryKey = ['get-designer-category']
  const queryFn = async () => await getDesignerCategory()
  return useQuery({ queryKey, queryFn })
}

export const useGetDetailDesignerQuery = ({
  enabled = true,
  params,
}: {
  params: GetDetailDesignerQueryParams
  enabled?: boolean
}) => {
  const queryKey = ['get-designer-detail', params]
  const queryFn = async () => await getDetailDesigner(params)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetDesignerServicesQuery = ({
  enabled = true,
  params,
}: {
  params: GetDesignerServicesQueryParams
  enabled?: boolean
}) => {
  const queryKey = ['get-designer-services', params]
  const queryFn = async () => await getDesignerServices(params)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetDesignerServiceCategoriesQuery = ({
  enabled = true,
  designerId,
}: {
  designerId: ID | string
  enabled?: boolean
}) => {
  const queryKey = ['get-designer-service-categories', designerId]
  const queryFn = async () => await getDesignerServiceCategories(designerId)
  return useQuery({ queryKey, queryFn, enabled })
}

export const useGetPopularDesignerQuery = (params: GetPopularDesignerParams) => {
  const queryKey = ['get-designer-popular']
  const queryFn = async () => await getPopularDesigner(params)
  return useQuery({ queryKey, queryFn })
}
