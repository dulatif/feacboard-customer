import {
  Designer,
  DesignerCategory,
  GetAllDesignerQueryParams,
  GetDetailDesignerQueryParams,
  GetDetailDesignerResponse,
  GetDesignerServicesQueryParams,
  GetDesignerServicesResponse,
  DesignerServiceCategory,
} from '@/app/interface/designers'
import { ID } from '@/app/interface/general'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export const getDesigner = async (params: GetAllDesignerQueryParams) => {
  const cleanedParams = cleanObj(params)

  // Handle array 'with' parameter for format: with[]=value1&with[]=value2
  const queryParams = new URLSearchParams()

  Object.entries(cleanedParams).forEach(([key, value]) => {
    if (key === 'with' && Array.isArray(value)) {
      value.forEach((item) => {
        queryParams.append('with[]', item)
      })
    } else {
      queryParams.append(key, String(value))
    }
  })

  return (await api.get(`/designer?${queryParams.toString()}`)) as Designer[]
}

export const getDesignerCategory = async () => {
  return (await api.get('/designer/category')) as DesignerCategory[]
}

export const getDetailDesigner = async (params: GetDetailDesignerQueryParams) => {
  const cleanedParams = cleanObj(params)
  const { id, ...queryParams } = cleanedParams

  // Handle array 'with' parameter
  const urlParams = new URLSearchParams()

  Object.entries(queryParams).forEach(([key, value]) => {
    if (key === 'with' && Array.isArray(value)) {
      value.forEach((item) => {
        urlParams.append('with[]', String(item))
      })
    } else {
      urlParams.append(key, String(value))
    }
  })

  const queryString = urlParams.toString()
  const url = `/designer/${id}${queryString ? `?${queryString}` : ''}`

  return (await api.get(url)) as GetDetailDesignerResponse
}

export const getDesignerServices = async (params: GetDesignerServicesQueryParams) => {
  const cleanedParams = cleanObj(params)
  const { id, ...queryParams } = cleanedParams

  const urlParams = new URLSearchParams()

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlParams.append(key, String(value))
    }
  })

  const queryString = urlParams.toString()
  const url = `/designer/${id}/services${queryString ? `?${queryString}` : ''}`

  return (await api.get(url)) as GetDesignerServicesResponse
}

export const getDesignerServiceCategories = async (designerId: ID | string) => {
  return (await api.get(`/designer/${designerId}/service/categories`)) as DesignerServiceCategory[]
}
