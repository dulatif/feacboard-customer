import {
  GetAllShopQueryParams,
  GetAllShopResponse,
  GetDetailShopQueryParams,
  Shop,
  ShopOpenHour,
} from '@/app/interface/shop'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export const getShop = async (params: GetAllShopQueryParams) => {
  const cleanedParams = cleanObj(params)

  // Handle array parameters for format: status[]=value1&status[]=value2&with[]=value1&with[]=value2
  const queryParams = new URLSearchParams()

  Object.entries(cleanedParams).forEach(([key, value]) => {
    if ((key === 'status' || key === 'with') && Array.isArray(value)) {
      value.forEach((item) => {
        queryParams.append(`${key}[]`, String(item))
      })
    } else {
      queryParams.append(key, String(value))
    }
  })

  // If paginate is enabled, return paginated response, otherwise return array
  if (params.paginate) {
    return (await api.get(`/shop?${queryParams.toString()}`)) as GetAllShopResponse
  }
  return (await api.get(`/shop?${queryParams.toString()}`)) as Shop[]
}

export interface GetShopDetailsResponse {
  id: number
  name: string
  status: 'registering' | 'registered' | 'inactive'
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  rating: number
  review_count: number
  open_hour_today?: string
  open_hours?: ShopOpenHour[]
  open_hours_calendar?: Record<string, Record<string, boolean>>
  services?: Service[]
  designers?: any[]
}
export interface Service {
  id: number
  name: string
  price: string
  images: any[]
  variants: any[]
}
export interface GetShopDetailsParams {
  shopId: number
  with?: 'services' | 'designers'
}
export const getShopDetails = async ({ shopId, with: withParam }: GetShopDetailsParams) => {
  return (await api.get(`/shop/${shopId}?with[]=designers`)) as GetShopDetailsResponse
}

export const getDetailShop = async (params: GetDetailShopQueryParams) => {
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
  const url = `/shop/${id}${queryString ? `?${queryString}` : ''}`

  return (await api.get(url)) as GetShopDetailsResponse
}

export type GetShopCalendarHourResponse = Record<string, Record<string, boolean>>
export const getShopCalendarHour = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/openHours`)) as GetShopCalendarHourResponse
}
export interface GetShopServicesResponse {
  data: {
    id: number
    name: string
    price: string
    images: {
      'image-1': string
      'image-2': string
      'image-3': string
      'image-4': string
      'image-5': string
    }
  }[]
  meta: {
    current_page: number
    per_page: number
    total: number
    last_page: number
  }
}
export const getShopServices = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/services`)) as GetShopServicesResponse
}
