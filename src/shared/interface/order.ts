export interface OrderItem {
  id: number
  order_id: number
  service_id: number
  variant_id: any
  service_name: string
  service_price: string
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
  provider_type: string
  provider_name: string
  price: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed' | 'paid'
  checkin_qr_string?: string
  checkin_code?: string
  items: OrderItem[]
}

export interface GetOrderResponse {
  data: Order[]
}
