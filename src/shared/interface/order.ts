import { Status } from '@/modules/reservation/ReservationView.utils'

export interface OrderItem {
  id: number
  order_id: number
  service_id: number
  variant_id: any
  service_name: string
  price: string
  discount: string
  price_after_discount: string
  variant_name: any
  created_at: string
  updated_at: string
}

export interface Order {
  id: number
  name: string
  phone: string
  address: string | null
  date: string
  start_at: string
  end_at: string
  shop_name: string
  shop_category: string
  shop_category_icon_url: string
  provider_type: 'designer' | 'shop'
  provider_name: string
  price: string
  status: Status
  checkin_qr_string?: string
  checkin_code?: string
  items: OrderItem[]
}

export interface GetOrderResponse {
  data: Order[]
}
