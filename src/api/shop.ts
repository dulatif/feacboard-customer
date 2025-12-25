import { GetAllShopQueryParams, GetDetailShopQueryParams, Shop } from '@/shared/interface/shop'
import { cleanObj } from '@/shared/utils/params'
import api from './index'

export interface GetShopDetailsResponse {
  id: number
  name: string
  status: 'registering' | 'registered' | 'inactive'
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  services: Service[]
  rating: number
  review_count: number
  open_hour_today: string
  designers: any[]
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
  with: 'services' | 'designers'
}
export const getShopDetails = async ({ shopId, with: withParam }: GetShopDetailsParams) => {
  return (await api.get(`/shop/${shopId}?with[]=designers`)) as GetShopDetailsResponse
}

export const getShop = async (params: GetAllShopQueryParams) => {
  const queryParams = new URLSearchParams(cleanObj(params) as Record<string, string>).toString()

  // return (await api.get(`/shop?category_id=${params.category_id}${queryParams}`)) as Shop[]
  return (await api.get(`/shop?category_id=${params.category_id}&with[]=designers`)) as Shop[]
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

export const getDetailShop = async (params?: GetDetailShopQueryParams) => {
  return (await api.get(`/shop/${params?.id}`, { params })) as Shop
}
