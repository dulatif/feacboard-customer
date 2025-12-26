import { Designer } from './designers'
import { ID, MutationParams } from './general'

export interface ShopThumbnail {
  id: ID
  url: string
}

export interface Shop {
  id: ID
  name: string
  status: string
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  rating?: number
  review_count?: number
  open_hour_today?: string
  designers?: Designer[]
  designer_count?: number
  thumbnails?: ShopThumbnail[]
}

export type ShopStatus = 'registering' | 'registered' | 'inactive' | 'withdrawal' | 'withdrew'

export type ShopWithOption = 'openHours' | 'designers' | 'designers.services' | 'thumbnails'

export interface GetAllShopQueryParams {
  status?: ShopStatus[]
  category_id?: number | string
  name?: string
  with?: ShopWithOption[]
  paginate?: number | boolean
  page?: number
}
export interface GetAllShopMutationParams extends MutationParams<Shop[], GetAllShopQueryParams> {}

export interface PaginationLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

export interface PaginationMetaLink {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

export interface PaginationMeta {
  current_page: number
  from: number
  last_page: number
  links: PaginationMetaLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface GetAllShopResponse {
  data: Shop[]
  links: PaginationLinks
  meta: PaginationMeta
}

export interface ShopOpenHour {
  day: string
  opens_at: string
  closes_at: string
  active: number
}

export interface ShopCategoryName {
  en: string
  ko: string
}

export interface ShopCategory {
  id: ID
  name: ShopCategoryName
  localized_name: string
  needs_designer: boolean
}

export type ShopDetailWithOption = 'openHours' | 'category'

export interface GetDetailShopQueryParams {
  id: ID | string
  status?: 'all' | string
  with?: ShopDetailWithOption[]
}

export interface ShopServiceCategory {
  id: ID
  name: string
}

export interface GetShopServicesQueryParams {
  shopId: ID | number
  category_id?: ID | number
  per_page?: number
  name?: string
  page?: number
}
