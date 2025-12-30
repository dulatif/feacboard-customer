import {
  GetAllShopQueryParams,
  GetAllShopResponse,
  GetDetailShopQueryParams,
  GetShopReviewsResponse,
  RatingStats,
  Shop,
  ShopCategory,
  ShopOpenHour,
} from '@/shared/interface/shop'
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
export interface ShopSocial {
  social_name: string
  social_displayname: string
  social_username: string
  social_url: string
}
export interface GetShopDetailsResponse {
  id: number
  name: string
  status: 'registering' | 'registered' | 'inactive'
  phone: string
  person_in_charge: string
  description?: string
  address: string
  address_lat: string
  address_long: string
  rating: number
  review_count: number
  open_hour_today?: string
  open_hours?: ShopOpenHour[]
  open_hours_calendar?: Record<string, Record<string, boolean>>
  category?: ShopCategory
  services?: Service[]
  designers?: any[]
  thumbnails?: { id: number; url: string }[]
  socials?: ShopSocial[]
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
  const url = `/shop/${id}/detail${queryString ? `?${queryString}` : ''}`

  return (await api.get(url)) as GetShopDetailsResponse
}

export type GetShopCalendarHourResponse = Record<string, Record<string, boolean>>
export const getShopCalendarHour = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/openHours`)) as GetShopCalendarHourResponse
}
export interface ShopServiceImage {
  'image-1': string | null
  'image-2': string | null
  'image-3': string | null
  'image-4': string | null
  'image-5': string | null
}

export interface ShopService {
  id: number
  name: string
  price: string
  images: ShopServiceImage
}

export interface ShopServicesDesigner {
  id: number
  name: string
  phone: string
  bio: string
  status: string
  services: ShopService[]
}

export interface GetShopServicesResponse {
  data: ShopServicesDesigner[] | ShopService[]
  links: {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
  }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: Array<{
      url: string | null
      label: string
      page: number | null
      active: boolean
    }>
    path: string
    per_page: number
    to: number
    total: number
  }
}

// Type guard to check if data is array of designers with services
// Designer has 'services' property, while direct service doesn't
export const isDesignerServicesResponse = (data: GetShopServicesResponse['data']): data is ShopServicesDesigner[] => {
  if (!data || data.length === 0) return false

  const firstItem = data[0]
  // Check if first item has 'services' property and it's an array
  // This indicates it's a designer with services, not a direct service
  return 'services' in firstItem && Array.isArray(firstItem.services)
}
export interface GetShopServicesParams {
  shopId: number
  category_id?: number
  per_page?: number
  name?: string
  page?: number
}

export const getShopServices = async (params: GetShopServicesParams) => {
  const { shopId, ...queryParams } = params
  const cleanedParams = cleanObj(queryParams)

  const urlParams = new URLSearchParams()
  Object.entries(cleanedParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      urlParams.append(key, String(value))
    }
  })

  const queryString = urlParams.toString()
  const url = `/shop/${shopId}/services${queryString ? `?${queryString}` : ''}`

  return (await api.get(url)) as GetShopServicesResponse
}

export interface ShopServiceCategory {
  id: number
  name: string
}

export const getShopServiceCategories = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/service/categories`)) as ShopServiceCategory[]
}

export const getShopRatingStats = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/review/stats`)) as RatingStats
}

export const getShopReviews = async ({ shopId }: { shopId: number }) => {
  return (await api.get(`/shop/${shopId}/reviews`)) as GetShopReviewsResponse
}
