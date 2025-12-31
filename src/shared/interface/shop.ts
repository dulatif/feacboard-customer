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
  description?: string
  address: string
  address_lat: string
  address_long: string
  rating?: number | null
  review_count?: number
  open_hour_today?: string
  open_hours?: ShopOpenHour[]
  open_hours_calendar?: Record<string, Record<string, boolean>>
  designers?: Designer[]
  designer_count?: number
  thumbnails?: ShopThumbnail[]
}

export type ShopStatus = 'registering' | 'registered' | 'inactive' | 'withdrawal' | 'withdrew'

export type ShopWithOption = 'openHours' | 'designers' | 'designers.services' | 'thumbnails'

export type ReviewType = 'before' | 'after' | 'images' | 'text' | 'before_after'

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

export interface RatingStats {
  id: number
  name: string
  status: string
  phone: string
  person_in_charge: string
  description: string
  address: string
  address_lat: string
  address_long: string
  rating: any
  review_count: number
  open_hour_today: string
  designer_count: number
  overal_rating: string
  cleanlinest_rating: string
  hospitality_rating: string
  speed_rating: string
  '1_stars': number
  '2_stars': number
  '3_stars': number
  '4_stars': number
  '5_stars': number
  rank: number
  total_shops: number
  designer_rank: DesignerRank[]
}
export interface DesignerRank {
  id: number
  name: string
  phone: string
  bio: string
  status: string
  rating: string
  user: {
    id: number
    role: string
    email: string
    email_verified: boolean
    profile_image_url: string
    designer: {
      id: number
      name: string
      phone: string
      bio: string
      status: string
      rating: string
    }
  }
  service_categories: ServiceCategory[]
}
export interface ServiceCategory {
  id: number
  name: string
}

export interface GetShopReviewsResponse {
  data: ReviewData[]
  meta: ReviewMeta
}
export interface ReviewData {
  customer: CustomerReview
  designer: DesignerRank
  description: string
  type: ReviewType
  overal_rating: string
  cleanlinest_rating: number
  hospitality_rating: number
  speed_rating: number
  designer_rating: number
  created_at: string
  is_mine: boolean
  liked_by_me: boolean
  likes_count: number
  images?: {
    id: number
    url: string
  }[]
  before?: {
    id: number
    url: string
  }[]
  after?: {
    id: number
    url: string
  }[]
}
export interface CustomerReview {
  name: string
  user: {
    profile_image_url: string
  }
}
export interface ReviewMeta {
  current_page: number
  from: number
  last_page: number
  links: any[]
  path: string
  per_page: number
  to: number
  total: number
}
