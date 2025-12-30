import { ID } from './general'

export interface StoreServiceToCartBody {
  service_variant_id?: number
  date?: string
  time?: string
}

export interface CartProvider {
  id: ID
  name: string
  status: string
  phone: string
  person_in_charge: string
  address: string
  address_lat: string
  address_long: string
  rating: number
  review_count: number
  open_hour_today: string
}

export interface CartService {
  id: ID
  name: string
  price: string
  image: string
}

export interface CartItem {
  id: ID
  service: CartService
}

export interface CartData {
  id: ID
  shop_id: ID
  provider_type: 'shop' | 'designer'
  provider: CartProvider
  name: string
  phone: any
  date: string
  start_at: string
  end_at: string
  items: CartItem[]
  note?: string
}

export interface GetCartResponse {
  data: CartData | null
}

export interface UpdateCartBody {
  date?: string
  time?: string
  name?: string
  phone?: string
  note?: string
}

export type CartStatus = 'no-cart' | 'diff-provider' | 'continue' | 'service-exists'

export interface CheckCartStatusResponse {
  status: CartStatus
}
