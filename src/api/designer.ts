import {
  Designer,
  DesignerCategory,
  GetAllDesignerQueryParams,
  GetDetailDesignerQueryParams,
  GetDetailDesignerResponse,
  GetDesignerServicesQueryParams,
  GetDesignerServicesResponse,
  DesignerServiceCategory,
} from '@/shared/interface/designers'
import { ID } from '@/shared/interface/general'
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
  const url = `/designer/${id}/detail${queryString ? `?${queryString}` : ''}`

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

export interface GetPopularDesignerResponse {
  data: {
    id: number
    name: string
    phone: string
    bio: any
    status: string
    rating: any
    employment: Employment
    user: User
    before_afters: BeforeAfter[]
  }[]
}
export interface Employment {
  id: number
  shop: Shop
  employed_at: string
  resigned_at: any
  fired_at: any
}

export interface Shop {
  id: number
  name: string
  status: string
  phone: string
  person_in_charge: string
  description: any
  address: string
  address_lat: string
  address_long: string
  rating: any
  review_count: number
  open_hour_today: string
}
export interface User {
  id: number
  role: string
  email: string
  email_verified: boolean
  profile_image_url: any
  designer: {
    id: number
    name: string
    phone: string
    bio: any
    status: string
    rating: any
  }
}
export interface BeforeAfter {
  id: number
  designer_id: number
  type: string
  created_at: string
  updated_at: string
  service_title: string
}
export interface GetPopularDesignerParams {
  before_after_only?: number
}
export const getPopularDesigner = async ({ before_after_only }: GetPopularDesignerParams) => {
  return (await api.get(
    `/designer/popular?limit=4${before_after_only ? `&before_after_only=${before_after_only}` : ''}`,
  )) as GetPopularDesignerResponse
}
